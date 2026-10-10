/// <reference types="@cloudflare/workers-types" />
import { neon } from "@neondatabase/serverless";

/**
 * Cloudflare Pages Function: POST /api/contact
 * Persists consultation requests to Neon (primary, serverless Postgres) and
 * mirrors to Supabase via its REST API when a service key is configured.
 */
interface Env {
  DATABASE_URL?: string;            // Neon pooled connection string
  SUPABASE_URL?: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  const name = (body.name ?? "").trim().slice(0, 200);
  const email = (body.email ?? "").trim().slice(0, 320);
  const company = (body.company ?? "").trim().slice(0, 200) || null;
  const service = (body.service ?? "").trim().slice(0, 50) || null;
  const message = (body.message ?? "").trim().slice(0, 5000);

  if (!name || !email || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ ok: false, error: "validation_failed" }, 422);
  }

  const results: Record<string, string> = {};

  if (env.DATABASE_URL) {
    try {
      const sql = neon(env.DATABASE_URL);
      await sql`INSERT INTO contact_submissions (name, email, company, service, message, source)
                VALUES (${name}, ${email}, ${company}, ${service}, ${message}, 'webapp:neon')`;
      results.neon = "ok";
    } catch (e) {
      results.neon = `error: ${(e as Error).message}`;
    }
  } else {
    results.neon = "skipped: DATABASE_URL unset";
  }

  if (env.SUPABASE_URL && env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const r = await fetch(`${env.SUPABASE_URL}/rest/v1/contact_submissions`, {
        method: "POST",
        headers: {
          apikey: env.SUPABASE_SERVICE_ROLE_KEY,
          authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
          "content-type": "application/json",
          prefer: "return=minimal",
        },
        body: JSON.stringify({ name, email, company, service, message, source: "webapp:supabase" }),
      });
      results.supabase = r.ok ? "ok" : `error: HTTP ${r.status}`;
    } catch (e) {
      results.supabase = `error: ${(e as Error).message}`;
    }
  } else {
    results.supabase = "skipped: SUPABASE_URL/SERVICE_ROLE unset";
  }

  const ok = Object.values(results).some((v) => v === "ok");
  return json({ ok, results }, ok ? 200 : 503);
};

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, {
    status: 204,
    headers: {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type",
    },
  });
