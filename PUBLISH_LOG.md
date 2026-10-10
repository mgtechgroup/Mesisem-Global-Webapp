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

## 2026-10-10 — Usability test pass + fixes (succeeded)

- Commit `f94eebc` → deployments `afe3280d` (git push) and `420f9561` (redeploy after secrets re-set); all stages success.
- **Fixes:** `NEXT_PUBLIC_*` were not reaching the build because a `wrangler.toml` was present (it overrides dashboard plain vars). Moved non-secret vars into `wrangler.toml [vars]`; re-set `DATABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` as dashboard secrets. Removed Vercel remnants (`.vercel` ignore, old DEPLOY.md). DEPLOY.md rewritten Cloudflare-only.
- **Browser tests (real Chromium):** 18 routes incl. 404 render with header/footer and correct titles; 18 internal links resolve; logo loads; mobile 390px no horizontal overflow, hamburger present.
- `/resources/`: "17 of 17 records · source: Supabase (live)"; search "owasp" → 1; category Media → 2; external links `rel=noopener`.
- Contact form UI → "Message Received". `/api/contact` → `{"neon":"ok","supabase":"ok"}`. Rows verified: Neon `contact_submissions` = 4 test rows, Supabase = 1 (mirror enabled only on last deploy).
- Security headers live: X-Frame-Options DENY, nosniff, HSTS preload, Referrer-Policy, CSP incl. `*.supabase.co`.
- Vercel: `mesisem-global-llc-design.vercel.app` returns 402 (dead/suspended); no DNS points to Vercel. `mesisemglobal.com` + `www` still → `mesisem-public-resources.pages.dev` (A 172.66.x via CF proxy). Cutover to this project not performed — awaiting approval.
- Test rows can be deleted: `DELETE FROM contact_submissions WHERE email LIKE '%@mesisemglobal.com'`.

## Entry template
- Date / commit / deployment id / URL / outcome / checks / env or DNS changes / blockers.
