import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

declare global {
  // avoid multiple Prisma instances during dev hot reloads
  var prisma: PrismaClient | undefined;
}
const prisma = global.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

async function getInquiries() {
  return prisma.contactInquiry.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export default async function InquiriesPage() {
  const inquiries: Awaited<ReturnType<typeof getInquiries>> = await getInquiries();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-6 py-12">
      <header className="flex flex-col gap-2">
        <p className="text-sm text-neutral-500">Contact inquiries database</p>
        <h1 className="text-3xl font-semibold tracking-tight">Inquiry Log</h1>
        <p className="text-sm text-neutral-500">
          Every form submission is stored in the Prisma database and mirrored in your email.
        </p>
      </header>

      <section className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600">
              <tr>
                <th scope="col" className="px-4 py-3">Submitted</th>
                <th scope="col" className="px-4 py-3">Name</th>
                <th scope="col" className="px-4 py-3">Contact</th>
                <th scope="col" className="px-4 py-3">Message</th>
                <th scope="col" className="px-4 py-3">Meta</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 text-sm text-neutral-700">
              {inquiries.length === 0 ? (
                <tr>
                  <td className="px-4 py-10 text-center text-neutral-400" colSpan={5}>
                    No inquiries captured yet. Submit the website form to populate this list.
                  </td>
                </tr>
              ) : (
                inquiries.map((entry: Awaited<ReturnType<typeof getInquiries>>[number]) => (
                  <tr key={entry.id} className="hover:bg-neutral-50">
                    <td className="px-4 py-3 align-top font-medium text-neutral-900">
                      {entry.createdAt.toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-4 py-3 align-top">
                      <div className="font-medium text-neutral-900">{entry.name}</div>
                    </td>
                    <td className="px-4 py-3 align-top">
                      <div className="space-y-1">
                        <a href={`mailto:${entry.email}`} className="block text-blue-600 hover:underline">
                          {entry.email}
                        </a>
                        <a href={`tel:${entry.phone}`} className="block text-blue-600 hover:underline">
                          {entry.phone}
                        </a>
                      </div>
                    </td>
                    <td className="px-4 py-3 align-top">
                      <p className="whitespace-pre-wrap text-sm text-neutral-700">
                        {entry.message || "(no message)"}
                      </p>
                    </td>
                    <td className="px-4 py-3 align-top text-xs text-neutral-500">
                      <div className="space-y-1">
                        <p><span className="font-semibold">IP:</span> {entry.ip || "n/a"}</p>
                        <p className="break-words"><span className="font-semibold">UA:</span> {entry.userAgent || "n/a"}</p>
                        <p className="font-mono text-[11px] text-neutral-400">{entry.id}</p>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="text-xs text-neutral-400">
        Tip: bookmark this page or secure it behind auth before going live.
      </footer>
    </main>
  );
}





