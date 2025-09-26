import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";
import { google, sheets_v4 } from "googleapis";

export const runtime = "nodejs";

declare global {
  // reuse prisma in dev to avoid hot-reload warning
  var prisma: PrismaClient | undefined;
}
const prisma = global.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

const resend = new Resend(process.env.RESEND_API_KEY!);

const allowedOrigins = (process.env.FRONTEND_ORIGINS ?? process.env.FRONTEND_ORIGIN ?? "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

function buildCorsHeaders(request: Request) {
  const requestOrigin = request.headers.get("origin");
  const allowOrigin = requestOrigin && allowedOrigins.includes(requestOrigin)
    ? requestOrigin
    : allowedOrigins[0] ?? "*";

  return new Headers({
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
}

type InquiryRecord = {
  id: string;
  createdAt: Date;
  name: string;
  email: string;
  phone: string;
  message: string;
  ip: string;
  userAgent: string;
};

type SheetsConfig = {
  email: string;
  privateKey: string;
  spreadsheetId: string;
  range: string;
};

let sheetsClientCache: { signature: string; promise: Promise<sheets_v4.Sheets> } | null = null;

function getSheetsConfig(): SheetsConfig | null {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
  if (!email || !key || !spreadsheetId) return null;

  return {
    email,
    privateKey: key.replace(/\\n/g, "\n"),
    spreadsheetId,
    range: process.env.GOOGLE_SHEETS_RANGE ?? "Sheet1!A:H",
  };
}

async function getSheetsClient(config: SheetsConfig) {
  const signature = `${config.email}|${config.spreadsheetId}`;
  if (!sheetsClientCache || sheetsClientCache.signature !== signature) {
    const auth = new google.auth.JWT({
      email: config.email,
      key: config.privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    sheetsClientCache = {
      signature,
      promise: auth.authorize().then(() => google.sheets({ version: "v4", auth })),
    };
  }

  return sheetsClientCache.promise;
}

async function appendInquiryToSheet(entry: InquiryRecord) {
  try {
    const config = getSheetsConfig();
    if (!config) return;

    const sheets = await getSheetsClient(config);
    await sheets.spreadsheets.values.append({
      spreadsheetId: config.spreadsheetId,
      range: config.range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          entry.createdAt.toISOString(),
          entry.id,
          entry.name,
          entry.email,
          entry.phone,
          entry.message || "(no message)",
          entry.ip,
          entry.userAgent,
        ]],
      },
    });
  } catch (error) {
    console.error("Google Sheets append failed", error);
  }
}

async function sendZapierWebhook(entry: InquiryRecord) {
  try {
    const url = process.env.ZAPIER_WEBHOOK_URL;
    if (!url) return;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: entry.id,
        createdAt: entry.createdAt.toISOString(),
        name: entry.name,
        email: entry.email,
        phone: entry.phone,
        message: entry.message,
        ip: entry.ip,
        userAgent: entry.userAgent,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => response.statusText);
      console.error("Zapier webhook failed", response.status, errorText);
    }
  } catch (error) {
    console.error("Zapier webhook error", error);
  }
}

export async function OPTIONS(request: Request) {
  return new Response(null, { status: 204, headers: buildCorsHeaders(request) });
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" } as Record<string, string>)[c]!
  );
}

export async function POST(request: Request) {
  const corsHeaders = buildCorsHeaders(request);

  try {
    const body = await request.json();
    if (body.website) {
      corsHeaders.set("Content-Type", "application/json");
      return new Response(JSON.stringify({ ok: true }), { headers: corsHeaders });
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();
    if (!name || !email || !phone) {
      corsHeaders.set("Content-Type", "application/json");
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400, headers: corsHeaders });
    }

    const headersObj = Object.fromEntries(request.headers);
    const ip = headersObj["x-forwarded-for"]?.split(",")[0]?.trim() || headersObj["x-real-ip"] || "";
    const userAgent = headersObj["user-agent"] || "";

    const saved = await prisma.contactInquiry.create({
      data: { name, email, phone, message, ip, userAgent },
    });

    const { error } = await resend.emails.send({
      from: process.env.MAIL_FROM!,
      to: process.env.MAIL_TO!,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message || "(no message)"}

IP: ${ip}
UA: ${userAgent}
Submitted: ${new Date().toLocaleString()}
      `.trim(),
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto">
          <tr><td style="padding:16px 0"><h2 style="margin:0">New Property Inquiry</h2></td></tr>
          <tr><td style="border-top:1px solid #eee"></td></tr>
          <tr><td style="padding:12px 0"><strong>Name:</strong> ${escapeHtml(name)}</td></tr>
          <tr><td style="padding:6px 0"><strong>Email:</strong> ${escapeHtml(email)}</td></tr>
          <tr><td style="padding:6px 0"><strong>Phone:</strong> ${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:12px 0"><strong>Message:</strong><br/>${escapeHtml(message || "(no message)")}</td></tr>
          <tr><td style="padding:12px 0;color:#666;font-size:12px">
            IP: ${escapeHtml(ip)} | UA: ${escapeHtml(userAgent)}
          </td></tr>
        </table>
      `,
    });

    if (error) {
      console.error("Resend error", error);
    }

    const entry: InquiryRecord = {
      id: saved.id,
      createdAt: saved.createdAt,
      name,
      email,
      phone,
      message,
      ip,
      userAgent,
    };

    await appendInquiryToSheet(entry);
    await sendZapierWebhook(entry);

    corsHeaders.set("Content-Type", "application/json");
    return new Response(JSON.stringify({ ok: true, id: saved.id }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (e) {
    console.error(e);
    corsHeaders.set("Content-Type", "application/json");
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500, headers: corsHeaders });
  }
}
