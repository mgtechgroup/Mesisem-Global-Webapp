# Deployment Guide — Mesisem Global LLC Website

**Domain:** https://mesisemglobal.com  
**GitHub:** https://github.com/mgtechgroup/mesisem-global-llc-design  
**Build Output:** `dist/` (static export)

---

## Option A: Cloudflare Pages Native Git Integration (Recommended)

1. **Log in to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com

2. **Navigate to Pages**
   - Click "Pages" in the left sidebar
   - Click "Create a project"
   - Select "Connect to Git"

3. **Connect GitHub**
   - Authorize Cloudflare to access GitHub
   - Select repository: `mgtechgroup/mesisem-global-llc-design`
   - Click "Begin setup"

4. **Configure Build Settings**
   | Setting | Value |
   |---------|-------|
   | Project name | `mesisem-global-llc-design` |
   | Production branch | `master` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |

5. **Add Environment Variables** (if needed)
   - None required for static build

6. **Save and Deploy**
   - Click "Save and Deploy"
   - First build will start automatically

7. **Add Custom Domain**
   - Go to project → "Custom domains"
   - Click "Set up a custom domain"
   - Enter: `mesisemglobal.com`
   - Follow DNS verification steps
   - Enable SSL/TLS (Full or Full (strict))

---

## Option B: GitHub Actions + Cloudflare API

1. **Get Cloudflare API Token**
   - Go to https://dash.cloudflare.com/profile/api-tokens
   - Create token with "Cloudflare Pages: Edit" permission

2. **Add Secrets to GitHub Repo**
   - Go to repo → Settings → Secrets and variables → Actions
   - Add `CLOUDFLARE_API_TOKEN`
   - Add `CLOUDFLARE_ACCOUNT_ID` (from Cloudflare dashboard right sidebar)

3. **Push to trigger deploy**
   - The `.github/workflows/deploy.yml` is already configured
   - Push to `master` will auto-deploy

---

## Security Headers

The `public/_headers` file configures:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Content-Security-Policy
- Strict-Transport-Security
- Referrer-Policy

The `public/_redirects` file configures:
- www → non-www redirect
- HTTP → HTTPS redirect

---

## Pre-Launch Checklist

- [ ] DNS A record points to Cloudflare Pages
- [ ] SSL/TLS certificate active
- [ ] Custom domain shows "Active"
- [ ] Build succeeds without errors
- [ ] All pages render correctly
- [ ] Contact form submits successfully
- [ ] Mobile responsive test passed
- [ ] Security headers verified (securityheaders.com)

---

*Generated: 2026-04-27*
