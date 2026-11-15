/**
 * Platform configuration from config/, validated at load. Server-side only.
 */
import { z } from "zod";
import cohortJson from "@config/cohort.json";
import daysJson from "@config/days.json";
import reviewPointsJson from "@config/review-points.json";
import { CohortSchema, type Cohort } from "./schedule";

export const cohort: Cohort = CohortSchema.parse(cohortJson);

const DaysSchema = z.object({ goals: z.record(z.string().regex(/^\d+$/), z.string().min(1).nullable()) });
const dayGoals = DaysSchema.parse(daysJson).goals;

/** The day's one-sentence goal, or null while it is not yet supplied. */
export function dayGoal(n: number): string | null {
  return dayGoals[String(n)] ?? null;
}

const ReviewPointsSchema = z.object({
  status: z.literal("proposed"),
  reviewPoints: z.array(z.object({ lesson: z.string().regex(/^\d+\.\d+$/), supervisorDecides: z.string().min(1) })),
});
const reviewPoints = ReviewPointsSchema.parse(reviewPointsJson).reviewPoints;

export type ReviewPoint = { lesson: string; supervisorDecides: string };

export function reviewPointFor(lessonId: string): ReviewPoint | undefined {
  return reviewPoints.find((r) => r.lesson === lessonId);
}

export const allReviewPoints: readonly ReviewPoint[] = reviewPoints;

/**
 * The cohort in effect and today's date in its time zone. With GENIE_LAB_DEV=1 only,
 * GENIE_LAB_DEV_COHORT_START and GENIE_LAB_DEV_TODAY override the start date and today,
 * so unlocking can be developed and tested before the real start date is known.
 */
export function effectiveSchedule(now: Date = new Date()): { cohort: Cohort; today: string; devOverride: boolean } {
  const dev = process.env.GENIE_LAB_DEV === "1";
  const start = dev ? process.env.GENIE_LAB_DEV_COHORT_START : undefined;
  const today = dev ? process.env.GENIE_LAB_DEV_TODAY : undefined;
  const effective = start ? CohortSchema.parse({ ...cohort, startDate: start }) : cohort;
  const todayIso = today ? z.string().regex(/^\d{4}-\d{2}-\d{2}$/).parse(today) : new Intl.DateTimeFormat("en-CA", { timeZone: cohort.timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
  return { cohort: effective, today: todayIso, devOverride: Boolean(start || today) };
}
