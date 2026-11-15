-- Genie Lab data, keyed to Better Auth's "user" table. Deleting a user deletes their data.
-- Each record is validated by the app (zod) on every read and write.

create table if not exists genie_lesson_progress (
  intern_id  text not null references "user"(id) on delete cascade,
  lesson_id  text not null,
  data       jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (intern_id, lesson_id)
);

-- Drafts, submissions with every version, recorded review decisions and share links.
create table if not exists genie_work (
  intern_id  text primary key references "user"(id) on delete cascade,
  data       jsonb not null,
  updated_at timestamptz not null default now()
);

-- An index of share tokens, kept in step with genie_work, so a supervisor's link is found
-- without reading every intern's work.
create table if not exists genie_share_tokens (
  token      text primary key,
  intern_id  text not null references "user"(id) on delete cascade,
  lesson_id  text not null,
  revoked_at timestamptz
);
create index if not exists genie_share_tokens_intern on genie_share_tokens (intern_id);

create table if not exists genie_settings (
  intern_id  text primary key references "user"(id) on delete cascade,
  data       jsonb not null,
  updated_at timestamptz not null default now()
);

-- Evidence files, up to 10 MB each, until a file store is chosen.
create table if not exists genie_files (
  id         text primary key,
  intern_id  text not null references "user"(id) on delete cascade,
  name       text not null,
  size       integer not null check (size > 0 and size <= 10485760),
  type       text not null,
  bytes      bytea not null,
  created_at timestamptz not null default now()
);
create index if not exists genie_files_intern on genie_files (intern_id);
