import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Browser-safe Supabase client (anon/publishable key only).
 * RLS policies permit: SELECT on `resources`, INSERT on `contact_submissions`.
 */
let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  if (!client) client = createClient(url, key, { auth: { persistSession: false } });
  return client;
}

export interface ResourceRow {
  id: string;
  title: string;
  summary: string | null;
  category: string | null;
  tags: string[];
  publisher: string | null;
  source_url: string | null;
  type: string | null;
  status: string | null;
  collected_at: string | null;
  reviewed_at: string | null;
  reuse: string | null;
  notes: string | null;
  featured: boolean;
}

export async function fetchLiveResources(): Promise<ResourceRow[] | null> {
  const sb = getSupabase();
  if (!sb) return null;
  const { data, error } = await sb
    .from("resources")
    .select("*")
    .order("featured", { ascending: false })
    .order("title");
  if (error) {
    console.error("supabase resources error", error.message);
    return null;
  }
  return data as ResourceRow[];
}
