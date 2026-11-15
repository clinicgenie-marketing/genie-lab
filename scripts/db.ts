/** Shared by the database scripts: a pool and the Better Auth instance, from the environment. */
import pg from "pg";
import { createAuth } from "../src/lib/platform/better-auth.ts";

export function connect() {
  // Schema changes use the direct connection when Neon provides one; the app uses the pooled one.
  const url = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;
  if (!url) {
    console.error("DATABASE_URL is not set. Use your Neon connection string, for example:\n  DATABASE_URL='postgresql://…neon.tech/neondb?sslmode=require' npm run db:migrate");
    process.exit(1);
  }
  const pool = new pg.Pool({ connectionString: url, max: 2 });
  return { pool, auth: createAuth(pool) };
}
