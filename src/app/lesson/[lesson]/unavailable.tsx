import Link from "next/link";
import type { LessonAccess } from "@/lib/lesson-access";
import { ComingSoonBadge, ProgressBadge } from "@/components/StatusBadges";

/** Shown instead of a lesson that is not open: Coming soon (no file) or Locked (calendar). */
export function LessonUnavailable({ access }: { access: Extract<LessonAccess, { kind: "coming_soon" | "locked" }> }) {
  const { summary, day } = access;
  const soon = access.kind === "coming_soon";
  return (
    <section className="ob-soon" aria-labelledby="unavailable-title">
      {soon ? <ComingSoonBadge /> : <ProgressBadge status="locked" />}
      <p className="ob-p t-label-meta gl-eyebrow">
        Day {summary.day} · Lesson {summary.id}
      </p>
      <h1 id="unavailable-title" className="ob-h t-lesson-title">
        {summary.title}
      </h1>
      <p className="ob-p">
        {soon
          ? "This lesson is coming soon. It isn't published yet, so there is nothing to read or submit here."
          : day.opensLabel
            ? `This lesson is locked. ${day.opensLabel}, with the rest of Day ${day.n}.`
            : `This lesson is locked. Day ${day.n} opens once your cohort's start date is confirmed.`}
      </p>
      <div className="ob-card__actions">
        <Link className="ob-btn ob-btn--primary" href="/syllabus">
          Back to syllabus
        </Link>
        <Link className="ob-btn ob-btn--tertiary" href="/help">
          Get help
        </Link>
      </div>
    </section>
  );
}
