# Publish log — Mesisem Global Webapp

## 2026-10-10 — Initial unified release (succeeded)

- Source: `https://github.com/mgtechgroup/Mesisem-Global-Webapp`, branch `main`, commit `d389abd362fbc513b38f8c47e332e01dc4b85669`.
- Cloudflare Pages: project `mesisem-global-webapp` (id `2feba9d8-4de6-4143-b0ac-0fdee82b42e9`), GitHub-connected, production branch `main`.
  - Deployment `b99df1cd-16ed-4937-9044-e5d39d1427f3` — queued/initialize/clone/build/deploy all **success**; Functions detected (`/api/contact`).
  - URL: `https://mesisem-global-webapp.pages.dev` · deployment URL `https://b99df1cd.mesisem-global-webapp.pages.dev`.
  - Env: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_URL` (plain); `SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL` (secret). `nodejs_compat` enabled.
- Supabase: project `mesisem-global-webapp` ref `qjbqecssqgeztfxinizm` (us-east-1). Schema + RLS applied; `resources` seeded 17 rows.
- Neon: project `mesisem-global-webapp` id `snowy-term-04061104` (aws-us-east-1, PG17), branch `br-summer-mud-b7tcwnqc`, db `mesisem`. Schema applied; `resources` seeded 17 rows (count verified).
- Live checks: `/` 200, `/resources/` 200 showing "17 of 17 records", `/data/resources.json` served.
- Not yet verified: a live POST to `/api/contact` (local execution approval timed out). Submit the contact form once and confirm a row in `contact_submissions` on both DBs.
- Custom domain: **not attached**. `mesisemglobal.com` still points to `mesisem-public-resources`. Cutover requires explicit approval.
- Costs: free tiers only. No DNS changes.

## Entry template
- Date / commit / deployment id / URL / outcome / checks / env or DNS changes / blockers.
