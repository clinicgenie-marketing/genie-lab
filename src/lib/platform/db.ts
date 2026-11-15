/**
 * The Neon (Postgres) connection. Database mode is on when DATABASE_URL is set; without it
 * the app runs in local development mode with JSON files. Server-side only.
 */
import { Pool, type PoolClient } from "pg";

export function isDatabaseMode(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

const g = globalThis as unknown as { __geniePool?: Pool };

/** One pool per server process. Use Neon's pooled connection string in production. */
export function pool(): Pool {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");
  g.__geniePool ??= new Pool({ connectionString: process.env.DATABASE_URL, max: 5, idleTimeoutMillis: 30_000 });
  return g.__geniePool;
}

/**
 * Runs `fn` in a transaction that holds a lock on one intern, so changes to that intern's
 * records happen one at a time, across every server instance.
 */
export async function withInternLock<T>(db: Pool, internId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {
  const client = await db.connect();
  try {
    await client.query("begin");
    await client.query("select pg_advisory_xact_lock(hashtextextended($1, 0))", [`genie:${internId}`]);
    const result = await fn(client);
    await client.query("commit");
    return result;
  } catch (e) {
    await client.query("rollback").catch(() => undefined);
    throw e;
  } finally {
    client.release();
  }
}
