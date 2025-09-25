import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot (optional)
    if (body.website) return NextResponse.json({ ok: true });

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const headers = Object.fromEntries(request.headers);
    const ip =
      headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      headers["x-real-ip"] || "";
    const userAgent = headers["user-agent"] || "";

    // 1) Save to DB
    const saved = await prisma.contactInquiry.create({
      data: { name, email, phone, message, ip, userAgent },
    });

    // 2) Email admin
    await resend.emails.send({
      from: process.env.MAIL_FROM!,
      to: process.env.MAIL_TO!,
      subject: `New inquiry from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message || "(no message)"}

IP: ${ip}
UA: ${userAgent}
Submitted: ${new Date().toLocaleString()}
      `.trim(),
    });

    return NextResponse.json({ ok: true, id: saved.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
