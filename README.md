# Mesisem Global Webapp

Unified public web application for **Mesisem Global LLC** — combines the brand website
(`mesisem-global-llc-design`) with the public resource library (`mesisem-global-llc`) into a
single Next.js 14 static-export app, deployed on **Cloudflare Pages** with **Supabase** and
**Neon** Postgres backends.

| Layer | Target |
|---|---|
| Source | `github.com/mgtechgroup/Mesisem-Global-Webapp` (branch `main`) |
| Hosting | Cloudflare Pages project `mesisem-global-webapp` |
| DB (primary, serverless) | Neon project `mesisem-global-webapp` · db `mesisem` · PG17 · us-east-1 |
| DB (REST/RLS, live catalog) | Supabase project `mesisem-global-webapp` · ref `qjbqecssqgeztfxinizm` · us-east-1 |

## Features
- Brand site: Home, Services (7 verticals), Pricing, Compliance, About, Contact, legal pages.
- `/resources/` — searchable, filterable public catalog (17 records). Static JSON baked at build;
  progressively overlays the live Supabase `resources` table when `NEXT_PUBLIC_SUPABASE_*` is set.
- `/api/contact` — Cloudflare Pages Function (`functions/api/contact.ts`) that validates and writes
  consultation requests to **Neon** (via `@neondatabase/serverless`) and mirrors to **Supabase**
  (REST, service role). Either sink succeeding returns 200.
- Security headers + CSP via `public/_headers`; www→apex redirects via `public/_redirects`.

## Run
```sh
npm ci
cp .env.example .env.local   # fill NEXT_PUBLIC_* values
npm run dev                  # Next dev server (no Functions)
npm run build                # static export → dist/
npm run pages:dev            # wrangler: dist + functions/, reads .dev.vars
```

## Database
Schema: `db/schema.sql` · Seed: `db/seed.sql` (idempotent upsert). Applied identically to Neon and
Supabase. Supabase additionally has RLS: public `SELECT` on `resources`, public `INSERT` on
`contact_submissions`.

## Environment / secrets
Set in Cloudflare Pages → Settings → Environment variables (Production):

| Name | Type | Used by |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | plain | build (Resources live overlay) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | plain | build (publishable key only) |
| `DATABASE_URL` | **secret** | `functions/api/contact.ts` (Neon pooled URL) |
| `SUPABASE_URL` | plain | `functions/api/contact.ts` |
| `SUPABASE_SERVICE_ROLE_KEY` | **secret** | `functions/api/contact.ts` |

GitHub Actions (`.github/workflows/deploy.yml`) needs repo secrets `CLOUDFLARE_API_TOKEN`,
`CLOUDFLARE_ACCOUNT_ID` and repo variables `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

Never commit `.env*` (except `.env.example`), `.dev.vars`, or service-role keys.

## Deploy
Pushes to `main` build and deploy via GitHub Actions. Manual: `npm run build && npm run pages:deploy`.
