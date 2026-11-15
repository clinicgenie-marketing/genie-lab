import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { days, getDayFromParam } from "@/lib/content/curriculum";
import { dayGoal } from "@/lib/config";
import { getProgrammeView, nextLesson, type LessonView } from "@/lib/programme";
import { formatMinutes } from "@/lib/schedule";
import { PageHeader } from "@/components/PageHeader";
import { Inlines } from "@/components/content/Inlines";
import { ComingSoonBadge, DayChip, ProgressBadge, ReviewTag } from "@/components/StatusBadges";

type Props = { params: Promise<{ n: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return days.map((d) => ({ n: String(d.n) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const day = getDayFromParam((await params).n);
  return { title: day ? `Day ${day.n}: ${day.title}` : "Page not found" };
}

const ACTION: Partial<Record<LessonView["status"], string>> = { not_started: "Start lesson", in_progress: "Continue lesson", complete: "Review lesson" };

function LessonCard({ lesson, next }: { lesson: LessonView; next: boolean }) {
  const action = lesson.available ? ACTION[lesson.status] : undefined;
  return (
    <li>
      <article className={`ob-card ${next ? "ob-card--cyan" : "ob-card--outlined"} gl-lessoncard`} aria-labelledby={`lesson-${lesson.slug}`}>
        <div className="gl-lessoncard__head">
          <h3 id={`lesson-${lesson.slug}`} className="ob-h t-card-title">
            <span className="gl-lessoncard__id">Lesson {lesson.id}</span> {lesson.title}
          </h3>
          <span className="ob-row__badges">{lesson.available ? <ProgressBadge status={lesson.status} /> : <ComingSoonBadge />}</span>
        </div>
        <p className="ob-p gl-lessoncard__meta">
          {formatMinutes(lesson.estimatedMinutes)}
          {lesson.reviewPoint ? " · Review point" : ""}
        </p>
        {lesson.available ? (
          <details className="gl-disclosure">
            <summary>What you&apos;ll be able to do</summary>
            <ul className="gl-disclosure__body gl-bullets">
              {lesson.objectiveItems.map((item, i) => (
                <li key={i}>
                  <Inlines nodes={item} />
                </li>
              ))}
            </ul>
          </details>
        ) : (
          <p className="ob-p ob-secondary">Not yet published.</p>
        )}
        {action ? (
          <div className="ob-card__actions">
            <Link className="ob-link" href={`/lesson/${lesson.slug}`} aria-label={`${action}: Lesson ${lesson.id}`}>
              {action}
            </Link>
          </div>
        ) : null}
      </article>
    </li>
  );
}

export default async function DayPage({ params }: Props) {
  const summary = getDayFromParam((await params).n);
  if (!summary) notFound();
  await connection();
  const view = await getProgrammeView();
  const day = view.days.find((d) => d.n === summary.n)!;
  const goal = dayGoal(day.n);
  const next = nextLesson(day);
  const reviewPoints = day.lessons.filter((l) => l.reviewPoint);

  return (
    <>
      <div className="gl-dayhead">
        <PageHeader eyebrow={`Day ${day.n} of ${view.days.length}`} title={day.title} />
        <div className="gl-inline-status">
          <DayChip access={day.access} />
          {day.access === "locked" ? <span className="ob-p">{day.opensLabel ?? "Opening date not set yet"}</span> : null}
        </div>
        <p className="ob-p">
          <strong>Goal:</strong> {goal ?? <span className="ob-secondary">Not yet supplied</span>}
        </p>
        {next ? (
          <p className="ob-p">
            <Link className="ob-btn ob-btn--primary ob-btn--large" href={`/lesson/${next.slug}`}>
              {next.status === "in_progress" ? "Continue" : "Start"} Lesson {next.id}
            </Link>
          </p>
        ) : day.access === "locked" ? (
          <p className="ob-p ob-secondary">
            {day.opensLabel ? "" : "This day opens once your cohort's start date is confirmed. "}Earlier days stay open.
          </p>
        ) : null}
      </div>

      <section className="gl-section" aria-labelledby="needs">
        <h2 id="needs" className="ob-h t-section-heading">
          {day.n === view.currentDay ? "What you need today" : "What you need"}
        </h2>
        <dl className="gl-needs">
          {day.lessons.map((l) => (
            <div key={l.id} className="gl-needs__item">
              <dt className="t-label-meta">
                Lesson {l.id}: {l.title}
              </dt>
              <dd className="ob-p">{l.available ? <Inlines nodes={l.requiredMaterials} /> : <span className="ob-secondary">Not yet published.</span>}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="gl-section" aria-labelledby="lessons">
        <div className="gl-section__head">
          <h2 id="lessons" className="ob-h t-section-heading">
            Lessons
          </h2>
          <p className="ob-p ob-secondary">
            Suggested order · {formatMinutes(day.estimatedMinutes, "hours")} in total · {day.completeCount} of {day.lessons.length} complete
          </p>
        </div>
        <ol className="gl-cardlist">
          {day.lessons.map((l) => (
            <LessonCard key={l.id} lesson={l} next={l.id === next?.id} />
          ))}
        </ol>
      </section>

      <section className="gl-section" aria-labelledby="review">
        <h2 id="review" className="ob-h t-section-heading">
          Review point
        </h2>
        {reviewPoints.length ? (
          <ul className="gl-cardlist">
            {reviewPoints.map((l) => (
              <li key={l.id} className="ob-card ob-card--outlined gl-review">
                <p className="ob-p gl-inline-status">
                  <strong>
                    Lesson {l.id}: {l.title}
                  </strong>
                  <ReviewTag decision="not_submitted" />
                </p>
                <p className="ob-p">
                  <span className="ob-secondary">Your supervisor:</span> {l.reviewPoint!.supervisorDecides}
                </p>
                <p className="ob-p ob-secondary">Your supervisor reviews this outside the platform. When they share their decision, record it in My work.</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="ob-p">No review point today. You still submit evidence for each lesson.</p>
        )}
      </section>
    </>
  );
}
