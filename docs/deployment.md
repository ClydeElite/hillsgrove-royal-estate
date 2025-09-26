# Deployment Playbook

## 1. Environment variables on Vercel

All required keys live in `.env` (server) and `.env.local` (client hints). Mirror them into Vercel for the Production and Preview environments:

| Variable | Source | Notes |
| --- | --- | --- |
| `DATABASE_URL` | `.env` | Point to your production database. Leave as `file:./dev.db` only for local SQLite. |
| `RESEND_API_KEY` | `.env` | Found in your Resend dashboard. |
| `MAIL_FROM` | `.env` | Sender domain registered with Resend. |
| `MAIL_TO` | `.env` | Recipient mailbox for enquiries. |
| `ZAPIER_WEBHOOK_URL` | `.env` | Zapier catch hook URL. |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | optional (`.env.local`) | Only set if you must hit a different origin; otherwise omit so the form posts to same origin. |
| `FRONTEND_ORIGINS` | optional (`.env`) | Comma separated list if you need CORS for non-Vercel origins. |

Run these once per Vercel environment:

```bash
# Install the CLI locally if needed
npm install --global vercel

# Log in (opens a browser prompt)
vercel login

# Add each secret (use `--prod` for production values)
vercel env add DATABASE_URL production
vercel env add RESEND_API_KEY production
vercel env add MAIL_FROM production
vercel env add MAIL_TO production
vercel env add ZAPIER_WEBHOOK_URL production
# Optional extras
vercel env add NEXT_PUBLIC_CONTACT_ENDPOINT production
vercel env add FRONTEND_ORIGINS production

# Repeat for the preview environment if required
vercel env add DATABASE_URL preview
...
```

Already have the values locally? Let Vercel read them and push:

```bash
vercel env pull .env.vercel
vercel env push
```

> Tip: Skip `NEXT_PUBLIC_CONTACT_ENDPOINT` in Vercel so the contact form defaults to `/api/contact` on the deployed host.

## 2. Database migrations

Set `DATABASE_URL` in `.env` to your live database connection string (copy the Vercel value). Then run:

```bash
npx prisma migrate deploy
```

Prisma will apply any pending migrations to the remote database. Run this whenever you update `prisma/migrations/` (locally before deploy or in CI).

## 3. Trigger deployment

After pushing to the main branch (or running `vercel --prod`), Vercel will:

1. Install dependencies (`npm install`).
2. Generate the Prisma client (`npm run postinstall`).
3. Build the Next.js app (`npm run build`).

If all steps pass, the unified site (marketing pages, API, admin dashboard) goes live on your Vercel domain.

Manual deploy from your machine:

```bash
vercel pull           # optional: sync local config with Vercel project
vercel --prod         # build and deploy current branch to production
```

## 4. Smoke test checklist

- `/` renders and the hero contact tiles load.
- Contact form submission returns `200` and emails/logs appear in Prisma + Zapier.
- `/admin/inquiries` lists stored leads.
- Browser console shows no CORS errors; POST hits `/api/contact` on production.

Keep this checklist handy for post-deploy verification.
