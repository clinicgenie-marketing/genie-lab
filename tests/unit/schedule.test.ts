import { describe, expect, it } from "vitest";
import { CohortSchema, dayAccess, dayOpenDates, formatMinutes, formatOpenDate, lessonStatus, todayIn } from "@/lib/schedule";
import cohortJson from "@config/cohort.json";

const base = { timeZone: "Asia/Singapore", startDate: "2026-11-16", workingDays: ["Mon", "Tue", "Wed", "Thu", "Fri"], nonWorkingDates: [] as string[] };
const cohort = (over: Partial<typeof base> = {}) => CohortSchema.parse({ ...base, ...over });

describe("config/cohort.json", () => {
  it("is valid, in Singapore time, and has no start date yet", () => {
    const c = CohortSchema.parse(cohortJson);
    expect(c.timeZone).toBe("Asia/Singapore");
    expect(c.startDate).toBeNull();
  });
});

describe("opening dates", () => {
  it("are null until a start date is set", () => {
    expect(dayOpenDates(cohort({ startDate: null as unknown as string }), 10)).toBeNull();
  });
  it("open Day N on the Nth working day, skipping weekends", () => {
    // Monday 16 November 2026 start: Days 1 to 5 that week, Days 6 to 10 the next.
    expect(dayOpenDates(cohort(), 10)).toEqual([
      "2026-11-16", "2026-11-17", "2026-11-18", "2026-11-19", "2026-11-20",
      "2026-11-23", "2026-11-24", "2026-11-25", "2026-11-26", "2026-11-27",
    ]);
  });
  it("skip non-working dates", () => {
    const dates = dayOpenDates(cohort({ nonWorkingDates: ["2026-11-18"] }), 4);
    expect(dates).toEqual(["2026-11-16", "2026-11-17", "2026-11-19", "2026-11-20"]);
  });
  it("start on the first working day when the start date is not one", () => {
    expect(dayOpenDates(cohort({ startDate: "2026-11-14" }), 2)).toEqual(["2026-11-16", "2026-11-17"]);
  });
  it("respect custom working days", () => {
    expect(dayOpenDates(cohort({ workingDays: ["Mon", "Wed"] }), 3)).toEqual(["2026-11-16", "2026-11-18", "2026-11-23"]);
  });
  it("reject bad configuration", () => {
    expect(() => cohort({ timeZone: "Mars/Olympus" })).toThrow();
    expect(() => cohort({ startDate: "2026-02-30" })).toThrow();
    expect(() => cohort({ workingDays: [] })).toThrow();
    expect(() => cohort({ workingDays: ["Mon", "Mon"] })).toThrow();
  });
});

describe("today in the cohort time zone", () => {
  it("uses the Singapore date, not the server's", () => {
    // 20:00 UTC on 15 November is already 04:00 on 16 November in Singapore.
    expect(todayIn("Asia/Singapore", new Date("2026-11-15T20:00:00Z"))).toBe("2026-11-16");
    expect(todayIn("Europe/London", new Date("2026-11-15T20:00:00Z"))).toBe("2026-11-15");
  });
});

describe("day access and lesson status", () => {
  it("locks a day before its date, opens it on the date, and stays open after", () => {
    expect(dayAccess("2026-11-18", "2026-11-17", false)).toBe("locked");
    expect(dayAccess("2026-11-18", "2026-11-18", false)).toBe("open");
    expect(dayAccess("2026-11-18", "2026-12-25", false)).toBe("open");
    expect(dayAccess(null, "2026-11-18", false)).toBe("locked");
  });
  it("marks a day done only when all its lessons are complete", () => {
    expect(dayAccess("2026-11-16", "2026-11-18", true)).toBe("done");
  });
  it("sets Locked from the calendar and the rest from progress", () => {
    expect(lessonStatus("locked", "complete")).toBe("locked");
    expect(lessonStatus("open", undefined)).toBe("not_started");
    expect(lessonStatus("open", "in_progress")).toBe("in_progress");
    expect(lessonStatus("done", "complete")).toBe("complete");
  });
});

describe("wording", () => {
  it("says when a locked day opens", () => {
    expect(formatOpenDate("2026-11-20", "2026-11-16")).toBe("Opens on 20 November");
    expect(formatOpenDate("2027-01-04", "2026-12-28")).toBe("Opens on 4 January 2027");
  });
  it("states estimated times", () => {
    expect(formatMinutes(90)).toBe("about 90 minutes");
    expect(formatMinutes(360, "hours")).toBe("about 6 hours");
    expect(formatMinutes(390, "hours")).toBe("about 6 hours 30 minutes");
    expect(formatMinutes(60, "hours")).toBe("about 1 hour");
  });
});
