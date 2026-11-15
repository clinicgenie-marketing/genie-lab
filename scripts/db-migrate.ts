/**
 * Creates or updates the database: Better Auth's tables first, then Genie Lab's own
 * migrations in db/migrations, each applied once and recorded in genie_migrations.
 *
 * Run with: DATABASE_URL=… npm run db:migrate
 */
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { getMigrations } from "better-auth/db/migration";
import { connect } from "./db.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

async function main() {
  // During a build without a database (local builds, CI) there is nothing to migrate.
  if (process.argv.includes("--if-configured") && !process.env.DATABASE_URL) {
    console.log("No DATABASE_URL: skipping database migrations.");
    return;
  }
  const { pool, auth } = connect();
  // One migration at a time, even when several deployments build together.
  const lock = await pool.connect();
  await lock.query("select pg_advisory_lock(hashtextextended('genie-lab:migrations', 0))");
  try {
    const { runMigrations, toBeCreated, toBeAdded } = await getMigrations(auth.options);
    if (toBeCreated.length || toBeAdded.length) {
      await runMigrations();
      console.log(`Better Auth tables: created ${toBeCreated.map((t) => t.table).join(", ") || "none"}; updated ${toBeAdded.map((t) => t.table).join(", ") || "none"}.`);
    } else console.log("Better Auth tables: up to date.");

    await pool.query("create table if not exists genie_migrations (name text primary key, applied_at timestamptz not null default now())");
    const done = new Set((await pool.query<{ name: string }>("select name from genie_migrations")).rows.map((r) => r.name));
    const files = readdirSync(join(root, "db/migrations")).filter((f) => f.endsWith(".sql")).sort();
    for (const f of files) {
      if (done.has(f)) continue;
      const client = await pool.connect();
      try {
        await client.query("begin");
        await client.query(readFileSync(join(root, "db/migrations", f), "utf8"));
        await client.query("insert into genie_migrations (name) values ($1)", [f]);
        await client.query("commit");
        console.log(`Applied ${f}.`);
      } catch (e) {
        await client.query("rollback");
        throw e;
      } finally {
        client.release();
      }
    }
    console.log("Database is up to date.");
  } finally {
    await lock.query("select pg_advisory_unlock(hashtextextended('genie-lab:migrations', 0))").catch(() => undefined);
    lock.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
