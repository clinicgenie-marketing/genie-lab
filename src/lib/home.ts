/** What Home and Help say about where the intern is. Pure functions over the programme view, unit-tested. */
import type { LessonProgress } from "./platform/progress";
import type { LessonView, ProgrammeView } from "./programme";

export type NextUp =
  | { kind: "not_open" }
  | { kind: "all_done" }
  | { kind: "lesson"; lesson: LessonView; section: number | null; action: "start" | "continue" };

/**
 * The earliest open lesson that is not complete. Earlier days come first, so an intern who
 * is behind continues where they are behind. "continue" once a section has been visited.
 */
export function nextUp(view: ProgrammeView, progress: Map<string, LessonProgress>): NextUp {
  const open = view.days.filter((d) => d.access !== "locked");
  if (!open.length) return { kind: "not_open" };
  for (const d of open) {
    for (const l of d.lessons) {
      if (!l.available || l.status === "complete") continue;
      const section = progress.get(l.id)?.lastSection ?? null;
      return { kind: "lesson", lesson: l, section, action: section ? "continue" : "start" };
    }
  }
  return { kind: "all_done" };
}

/** Lessons not complete on open days before today's day. Today's own lessons are not "behind". */
export function lessonsBehind(view: ProgrammeView): number {
  if (view.currentDay === null) return 0;
  return view.days.filter((d) => d.n < view.currentDay! && d.access !== "locked").reduce((n, d) => n + d.lessons.filter((l) => l.available && l.status !== "complete").length, 0);
}
