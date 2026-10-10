# Brain, context & key-vault setup (proposed)

Goal: one durable "second brain" for Mesisem projects plus a single source of truth for API keys and
passwords, usable by both humans and Hermes.

## 1. Key / password vault — use what already exists, don't build one
| Secret | Where it lives | Access path |
|---|---|---|
| Supabase DB password, service-role key, anon key | **Hermes vault** (`hermes vault add`, encrypted, origin-bound) + 1Password/Bitwarden if installed | `browser_vault_*` tools / `op`/`bw` CLI |
| Neon `DATABASE_URL` | Hermes vault + Cloudflare Pages secret (already set) | Neon MCP `get_connection_string` regenerates on demand |
| Cloudflare API token (for GitHub Actions) | GitHub repo secret `CLOUDFLARE_API_TOKEN` + Hermes vault | Cloudflare dashboard → API Tokens (Pages:Edit) |
| GitHub token | `gh auth` keyring (already) | `gh auth status` |

Rules: secrets never go in repo files, Obsidian notes, or chat. Obsidian stores *references* (name, where, rotation date), never values.

## 2. Context "brain" — Obsidian vault (local-first, git-synced)
```
Mesisem-Brain/
  00-Inbox/
  10-Projects/
    Mesisem-Global-Webapp.md        # status, URLs, IDs, open tasks (mirrors README/PUBLISH_LOG)
    mesisem-global-llc (resources).md
  20-Infra/
    Cloudflare.md  Supabase.md  Neon.md  GitHub.md   # project IDs, regions, env var NAMES, runbooks
  30-Decisions/   # ADRs: "static JSON + Supabase overlay", "Neon primary for writes"
  40-Secrets-Index.md   # WHERE each secret is, never WHAT it is
  90-Templates/
```
- Sync: private GitHub repo `mgtechgroup/mesisem-brain` (Obsidian Git plugin, auto-commit every 10 min).
- Hermes reads it via `read_file`/`search_files`; durable facts promoted into Hermes memory/skills.
- Optional: Obsidian **Dataview** for dashboards of open tasks across project notes.

## 3. Semantic layer (optional, pick one)
- **OpenViking** — if you want a self-hosted retrieval/agent memory service, point it at `Mesisem-Brain/` + the two repos; expose via MCP so Hermes can query it.
- **Granola** — meeting notes → auto-filed into `00-Inbox/` (connector `granola_mcp` is available in Hermes but not connected).
- Hermes built-in **Honcho** memory is already available for per-user long-term memory.

## 4. Next actions (need your go-ahead)
1. Store the 4 secrets above in Hermes vault (masked prompt; I never see values).
2. Create `mgtechgroup/mesisem-brain` private repo and the folder skeleton above.
3. Create Cloudflare API token → GitHub secrets so Actions can deploy (today Cloudflare builds from Git on its own, so this is optional).
4. Decide on OpenViking vs Granola vs none.
