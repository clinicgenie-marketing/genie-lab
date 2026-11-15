import Link from "next/link";
import type { LessonView } from "@/lib/programme";
import { formatMinutes } from "@/lib/schedule";
import { ComingSoonBadge, ProgressBadge } from "./StatusBadges";

const ACTION: Partial<Record<LessonView["status"], string>> = {
  not_started: "Start lesson",
  in_progress: "Continue lesson",
  complete: "Review lesson",
};

/** One lesson in a list: ID, full title, time, badges and at most one action. */
export function LessonRow({ lesson, current = false }: { lesson: LessonView; current?: boolean }) {
  const action = lesson.available ? ACTION[lesson.status] : undefined;
  return (
    <li className={`ob-row gl-row${current ? " ob-row--current" : ""}`}>
      <span className="ob-row__id" aria-hidden="true">
        {lesson.id}
      </span>
      <span className="gl-row__main">
        <span className="ob-row__title">
          <span className="sr-only">Lesson {lesson.id}: </span>
          {lesson.title}
        </span>
        <span className="ob-meta gl-row__meta">{formatMinutes(lesson.estimatedMinutes)}</span>
      </span>
      <span className="ob-row__badges">
        {lesson.available ? <ProgressBadge status={lesson.status} /> : <ComingSoonBadge />}
      </span>
      <span className="gl-row__action">
        {action ? (
          <Link href={`/lesson/${lesson.slug}`} aria-label={`${action}: Lesson ${lesson.id}`}>
            {action}
          </Link>
        ) : !lesson.available ? (
          <span className="ob-meta">Not yet published</span>
        ) : null}
      </span>
    </li>
  );
}
