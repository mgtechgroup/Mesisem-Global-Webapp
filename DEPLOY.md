# Deployment — Mesisem Global Webapp

**Hosting:** Cloudflare Pages only (Vercel is not used; no `vercel.json`, no Vercel project linkage).
**Repo:** https://github.com/mgtechgroup/Mesisem-Global-Webapp · branch `main`
**Pages project:** `mesisem-global-webapp` → https://mesisem-global-webapp.pages.dev
**Build:** `npm ci && npm run build` → `dist/` (Next.js static export) + `functions/` (Pages Functions)

## How deploys happen
Cloudflare Pages is Git-connected: every push to `main` builds and deploys. No GitHub Action is
required for deployment (the workflow in `.github/workflows/deploy.yml` is a CI typecheck/build and
an optional secondary deploy path; it only deploys if `CLOUDFLARE_API_TOKEN`/`ACCOUNT_ID` secrets exist).

## Configuration sources
| Setting | Where |
|---|---|
| `compatibility_date`, `nodejs_compat`, output dir | `wrangler.toml` |
| `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_URL` | `wrangler.toml` `[vars]` (non-secret) |
| `DATABASE_URL` (Neon), `SUPABASE_SERVICE_ROLE_KEY` | Pages dashboard → Settings → Variables and Secrets (**secret**) |
| Security headers / CSP | `public/_headers` |
| www → apex, http → https | `public/_redirects` |

> When `wrangler.toml` is present Cloudflare uses it as the source of truth for non-secret vars;
> dashboard plain-text vars are ignored. Keep secrets out of the file.

## Custom domain cutover (requires explicit approval)
`mesisemglobal.com` currently serves the `mesisem-public-resources` Pages project. To move it:
1. Pages → `mesisem-global-webapp` → Custom domains → add `mesisemglobal.com` and `www.mesisemglobal.com`.
2. Remove the same two domains from `mesisem-public-resources` (Cloudflare will prompt to reassign).
3. DNS CNAMEs (apex + www) → `mesisem-global-webapp.pages.dev`, proxied. Leave MX/TXT untouched.
4. Verify 200 on apex, www, `/resources/`, `/api/contact`, and canonical tags.

## Post-deploy checklist
- [ ] Deployment stages all `success`, `uses_functions: true`
- [ ] `/`, `/services/*`, `/pricing/`, `/compliance/`, `/resources/`, `/about/`, `/contact/`, legal pages → 200
- [ ] `/resources/` shows "17 of 17 records · source: Supabase (live)"
- [ ] Contact form → "Message Received"; `/api/contact` returns `neon: ok`, `supabase: ok`
- [ ] Rows present in `contact_submissions` on Neon and Supabase
- [ ] Security headers present (`X-Frame-Options`, CSP with `connect-src … *.supabase.co`, HSTS)
- [ ] Record result in `PUBLISH_LOG.md`
