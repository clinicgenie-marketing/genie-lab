/**
 * Prepares the throwaway database for the account tests: wipes it, migrates it and creates
 * two test students. Refuses anything that is not a database on this machine.
 *
 * Run with: E2E_DATABASE_URL=postgres://…@localhost:…/genie_e2e node tests/e2e/db-setup.ts
 */
import { execFileSync } from "node:child_process";
import pg from "pg";

export const STUDENTS = [
  { email: "student.one@example.test", name: "Student One", password: "test-password-one-1234" },
  { email: "student.two@example.test", name: "Student Two", password: "test-password-two-5678" },
];

async function main() {
  const url = process.env.E2E_DATABASE_URL;
  if (!url) throw new Error("E2E_DATABASE_URL is not set");
  const host = new URL(url).hostname;
  if (!["localhost", "127.0.0.1", "::1"].includes(host)) throw new Error(`Refusing to wipe a database on ${host}. The account tests only run against a local throwaway database.`);
  const pool = new pg.Pool({ connectionString: url });
  await pool.query("drop schema public cascade; create schema public;");
  await pool.end();
  const env = { ...process.env, DATABASE_URL: url };
  execFileSync("node", ["scripts/db-migrate.ts"], { env, stdio: "inherit" });
  for (const s of STUDENTS) {
    execFileSync("node", ["scripts/create-intern.ts", "--email", s.email, "--name", s.name, "--password-stdin"], { env, input: s.password, stdio: ["pipe", "inherit", "inherit"] });
  }
}

if (process.argv[1]?.endsWith("db-setup.ts")) {
  main().catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exit(1);
  });
}
