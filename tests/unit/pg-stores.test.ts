import { afterAll, beforeAll, describe, expect, it } from "vitest";
import pg from "pg";
import { PgFileStorage, PgProgressStore, PgSettingsStore, PgWorkStore } from "@/lib/platform/pg-stores";
import { FileRefusedError } from "@/lib/platform/files";
import { newShareToken } from "@/lib/platform/work";
import { emptyProgress, recordVisit, setStep, markComplete } from "@/lib/progress-rules";

// Runs against a real Postgres when TEST_DATABASE_URL is set (a throwaway database that
// `npm run db:migrate` has prepared). Without it these tests are skipped, and say so.
const url = process.env.TEST_DATABASE_URL;
const d = url ? describe : describe.skip;

d("Postgres stores (Neon)", () => {
  let db: pg.Pool;
  const ada = `test-ada-${Date.now()}`;
  const grace = `test-grace-${Date.now()}`;

  beforeAll(async () => {
    db = new pg.Pool({ connectionString: url });
    for (const [id, email] of [[ada, `${ada}@example.com`], [grace, `${grace}@example.com`]]) {
      await db.query(`insert into "user" (id, name, email, "emailVerified", "createdAt", "updatedAt") values ($1, $2, $3, true, now(), now())`, [id, "Test", email]);
    }
  });
  afterAll(async () => {
    await db.query(`delete from "user" where id = any($1)`, [[ada, grace]]);
    await db.end();
  });

  it("saves lesson progress against the account and reads it back", async () => {
    const store = new PgProgressStore(db);
    expect(await store.get(ada, "1.1")).toBeUndefined();
    await store.update(ada, "1.1", (p) => recordVisit(p ?? emptyProgress("1.1"), 3));
    await store.update(ada, "1.1", (p) => markComplete(p!, "2026-11-18T10:00:00Z", "unavailable"));
    expect(await store.get(ada, "1.1")).toMatchObject({ status: "complete", lastSection: 3, completedAt: "2026-11-18T10:00:00Z" });
    expect([...(await store.list(ada)).keys()]).toEqual(["1.1"]);
  });

  it("keeps one student's progress apart from another's", async () => {
    const store = new PgProgressStore(db);
    expect(await store.get(grace, "1.1")).toBeUndefined();
    expect((await store.list(grace)).size).toBe(0);
  });

  it("keeps every one of 20 simultaneous ticks", async () => {
    const store = new PgProgressStore(db);
    await Promise.all(Array.from({ length: 20 }, (_, i) => store.update(ada, "4.2", (p) => setStep(p ?? emptyProgress("4.2"), `s${i + 1}`, true))));
    expect((await store.get(ada, "4.2"))!.tickedSteps).toHaveLength(20);
  });

  it("refuses an invalid record and leaves the stored one unchanged", async () => {
    const store = new PgProgressStore(db);
    await expect(store.update(ada, "1.1", () => ({ ...emptyProgress("1.1"), lastSection: 0 }))).rejects.toThrow();
    expect((await store.get(ada, "1.1"))!.status).toBe("complete");
  });

  it("stores work and finds a live share link through the token index", async () => {
    const store = new PgWorkStore(db);
    const token = newShareToken();
    await store.update(ada, (w) => ({ next: { ...w, shares: [{ token, lessonId: "2.4", createdAt: "2026-11-18T10:00:00Z", revokedAt: null }] }, result: null }));
    expect(await store.findShare(token)).toMatchObject({ internId: ada, share: { lessonId: "2.4" } });
    await store.update(ada, (w) => ({ next: { ...w, shares: w.shares.map((s) => ({ ...s, revokedAt: "2026-11-18T11:00:00Z" })) }, result: null }));
    expect(await store.findShare(token)).toBeNull();
    expect((await store.get(grace)).shares).toEqual([]);
  });

  it("stores settings per student", async () => {
    const store = new PgSettingsStore(db);
    await store.update(ada, (s) => ({ ...s, name: "Ada Lovelace", textSize: "large" }));
    expect(await store.get(ada)).toMatchObject({ name: "Ada Lovelace", textSize: "large" });
    expect((await store.get(grace)).name).toBeNull();
  });

  it("stores evidence files per student and refuses disallowed ones", async () => {
    const files = new PgFileStorage(db);
    const ref = await files.save(ada, "proof.txt", new TextEncoder().encode("hello"));
    expect(new TextDecoder().decode((await files.read(ada, ref.id))!.bytes)).toBe("hello");
    expect(await files.read(grace, ref.id)).toBeNull();
    await expect(files.save(ada, "page.html", new Uint8Array([1]))).rejects.toBeInstanceOf(FileRefusedError);
  });

  it("deletes a student's data when their account is deleted", async () => {
    const temp = `test-temp-${Date.now()}`;
    await db.query(`insert into "user" (id, name, email, "emailVerified", "createdAt", "updatedAt") values ($1, 'Temp', $2, true, now(), now())`, [temp, `${temp}@example.com`]);
    await new PgProgressStore(db).update(temp, "1.1", (p) => recordVisit(p ?? emptyProgress("1.1"), 1));
    await db.query(`delete from "user" where id = $1`, [temp]);
    expect((await db.query("select count(*)::int as n from genie_lesson_progress where intern_id = $1", [temp])).rows[0].n).toBe(0);
  });
});

if (!url) {
  describe("Postgres stores (Neon)", () => {
    it.skip("skipped: set TEST_DATABASE_URL to a migrated throwaway database to run them", () => {});
  });
}
