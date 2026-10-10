-- Mesisem Global Webapp — shared schema (applied identically to Supabase and Neon)
-- Tables: resources (public catalog mirror), contact_submissions (consultation form)

CREATE TABLE IF NOT EXISTS resources (
  id            TEXT PRIMARY KEY,
  title         TEXT NOT NULL,
  summary       TEXT,
  category      TEXT,
  tags          TEXT[] DEFAULT '{}',
  publisher     TEXT,
  source_url    TEXT,
  type          TEXT,
  status        TEXT,
  collected_at  DATE,
  reviewed_at   DATE,
  reuse         TEXT,
  notes         TEXT,
  featured      BOOLEAN DEFAULT FALSE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS resources_category_idx ON resources (category);
CREATE INDEX IF NOT EXISTS resources_featured_idx ON resources (featured) WHERE featured;

CREATE TABLE IF NOT EXISTS contact_submissions (
  id          BIGSERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  company     TEXT,
  service     TEXT,
  message     TEXT NOT NULL,
  source      TEXT DEFAULT 'webapp',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS contact_submissions_created_idx ON contact_submissions (created_at DESC);
