"use client";

import { useEffect, useMemo, useState } from "react";
import { fetchLiveResources } from "@/lib/supabase";

export interface ResourceItem {
  id: string;
  title: string;
  summary?: string;
  category?: string;
  tags?: string[];
  publisher?: string;
  sourceUrl?: string;
  type?: string;
  status?: string;
  collectedAt?: string;
  reviewedAt?: string;
  reuse?: string;
  notes?: string;
  featured?: boolean;
}

export default function ResourceLibrary({ initial }: { initial: ResourceItem[] }) {
  const [items, setItems] = useState<ResourceItem[]>(initial);
  const [live, setLive] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  // Progressive enhancement: overlay the Supabase-backed catalog when available.
  useEffect(() => {
    let cancelled = false;
    fetchLiveResources().then((rows) => {
      if (cancelled || !rows || rows.length === 0) return;
      setItems(
        rows.map((r) => ({
          id: r.id,
          title: r.title,
          summary: r.summary ?? undefined,
          category: r.category ?? undefined,
          tags: r.tags ?? [],
          publisher: r.publisher ?? undefined,
          sourceUrl: r.source_url ?? undefined,
          type: r.type ?? undefined,
          status: r.status ?? undefined,
          collectedAt: r.collected_at ?? undefined,
          reviewedAt: r.reviewed_at ?? undefined,
          reuse: r.reuse ?? undefined,
          notes: r.notes ?? undefined,
          featured: r.featured,
        })),
      );
      setLive(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.category).filter(Boolean) as string[])).sort()],
    [items],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((i) => {
      if (category !== "All" && i.category !== category) return false;
      if (!q) return true;
      const hay = [i.title, i.summary, i.publisher, i.category, i.type, ...(i.tags ?? [])]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [items, query, category]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="search"
          aria-label="Search resources"
          placeholder="Search title, publisher, tag…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-3 bg-steel/30 border border-metallic-dark/30 rounded-sm text-metallic-light placeholder-metallic-dark focus:outline-none focus:border-metallic-mid transition-colors"
        />
        <select
          aria-label="Filter by category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-3 bg-steel/30 border border-metallic-dark/30 rounded-sm text-metallic-light focus:outline-none focus:border-metallic-mid transition-colors"
        >
          {categories.map((c) => (
            <option key={c} value={c} className="bg-steel">
              {c}
            </option>
          ))}
        </select>
      </div>

      <p className="text-metallic-dark text-xs mb-6">
        {filtered.length} of {items.length} records · source: {live ? "Supabase (live)" : "static catalog"} ·{" "}
        <a href="/data/resources.json" className="underline hover:text-metallic-mid">
          JSON
        </a>
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((r) => (
          <li key={r.id} className="card-metallic p-6 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-metallic-light font-semibold text-lg leading-snug">{r.title}</h2>
              {r.featured && (
                <span className="text-[10px] uppercase tracking-wider text-metallic-mid border border-metallic-dark/40 px-2 py-0.5 rounded-sm">
                  Featured
                </span>
              )}
            </div>
            <p className="text-metallic-mid text-sm">{r.summary}</p>
            <div className="flex flex-wrap gap-2 text-[11px] text-metallic-dark">
              {r.category && <span>{r.category}</span>}
              {r.type && <span>· {r.type}</span>}
              {r.status && <span>· {r.status}</span>}
              {r.publisher && <span>· {r.publisher}</span>}
            </div>
            {r.sourceUrl && (
              <a
                href={r.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-metallic-light text-sm underline underline-offset-4 hover:text-white mt-auto"
              >
                View source ↗
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
