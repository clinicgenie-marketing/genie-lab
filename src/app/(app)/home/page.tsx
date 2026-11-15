import Link from "next/link";
import { connection } from "next/server";
import { getLesson } from "@/lib/content/curriculum";
import { getIdentity } from "@/lib/identity";
import { lessonsBehind, nextUp } from "@/lib/home";
import { type LessonProgress } from "@/lib/platform/progress";
import { emptyWork } from "@/lib/platform/work";
import { getProgrammeView } from "@/lib/programme";
import { formatMinutes } from "@/lib/schedule";
import { decisionsFor, latestSubmission, reviewState } from "@/lib/work-rules";
import { PageHeader } from "@/components/PageHeader";
import { DayChip, ProgressBadge, ReviewTag } from "@/components/StatusBadges";
import { dateTime } from "@/components/work/EvidenceView";
import { progressStore, workStore } from "@/lib/platform/stores";

export const metadata = { title: "Home" };

export default async function HomePage() {
  await connection();
  const [view, { intern }] = await Promise.all([getProgrammeView(), getIdentity()]);
  const progress = intern ? await progressStore.list(intern.id) : new Map<string, LessonProgress>();
  const work = intern ? await workStore.get(intern.id) : emptyWork();
  const up = nextUp(view, progress);
  const behind = lessonsBehind(view);
  const today = view.currentDay ? view.days.find((d) => d.n === view.currentDay)! : null;
  const allLessons = view.days.flatMap((d) => d.lessons);
  const reviewLessons = allLessons.filter((l) => l.reviewPoint);

  // Needs your attention: changes requested, newest decision first.
  const attention = reviewLessons
    .filter((l) => reviewState(work, l.id) === "changes_requested")
    .map((l) => ({ lesson: l, decision: decisionsFor(work, l.id)[0]! }))
    .sort((a, b) => b.decision.recordedAt.localeCompare(a.decision.recordedAt));
  // Waiting on your supervisor: submitted at a review point, no decision recorded for the latest version.
  const waiting = reviewLessons.filter((l) => reviewState(work, l.id) === "awaiting_review").map((l) => ({ lesson: l, submitted: latestSubmission(work, l.id)! }));

  const firstLockedOpens = view.days.find((d) => d.access === "locked")?.opensLabel ?? null;
  const nextSectionTitle = up.kind === "lesson" && up.section ? getLesson(up.lesson.id)?.sections.find((s) => s.number === up.section)?.title : undefined;
  const totalSections = up.kind === "lesson" ? getLesson(up.lesson.id)?.sections.length : undefined;

  return (
    <>
      <PageHeader title="Home" lead={today ? `Day ${today.n} of ${view.days.length}: ${today.title}` : "Your programme has not started yet."} />

      {attention.length ? (
        <section className="gl-section" aria-labelledby="attention">
          <h2 id="attention" className="ob-h t-section-heading">
            Needs your attention
          </h2>
          <ul className="gl-cardlist">
            {attention.map(({ lesson, decision }) => (
              <li key={lesson.id} className="ob-card ob-card--butter gl-attention">
                <p className="ob-p gl-inline-status">
                  <ReviewTag decision="changes_requested" />
                  <span className="t-label-meta">Recorded {dateTime(decision.recordedAt)}</span>
                </p>
                <h3 className="ob-h t-card-title">
                  Lesson {lesson.id}: {lesson.title}
                </h3>
                {decision.notes ? <p className="ob-p gl-prewrap gl-attention__notes">{decision.notes}</p> : null}
                <div className="ob-card__actions">
                  <Link className="ob-link" href={`/work/${lesson.slug}`} aria-label={`Resubmit Lesson ${lesson.id}`}>
                    Resubmit
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="ob-card ob-card--featured gl-today" aria-labelledby="today-title">
        {up.kind === "lesson" ? (
          <>
            <p className="ob-p gl-today__meta gl-inline-status">
              <span>
                Day {up.lesson.day} · Lesson {up.lesson.id}
              </span>
              <ProgressBadge status={up.lesson.status} />
            </p>
            <h2 id="today-title" className="ob-h t-page-heading">
              {up.lesson.title}
            </h2>
            <p className="ob-p gl-today__text">
              {up.action === "continue" && up.section && nextSectionTitle
                ? `You stopped at section ${up.section} of ${totalSections}: ${nextSectionTitle}.`
                : `${formatMinutes(up.lesson.estimatedMinutes)}. Start with section 1.`}
            </p>
            {behind ? (
              <p className="ob-p gl-today__text">
                {behind} {behind === 1 ? "lesson" : "lessons"} behind. Earlier days stay open, so you can catch up; nothing is blocked.
              </p>
            ) : null}
            <div className="ob-card__actions">
              <Link className="ob-btn ob-btn--primary ob-btn--large" href={`/lesson/${up.lesson.slug}${up.section ? `#section-${up.section}` : ""}`}>
                {up.action === "continue" ? "Continue lesson" : `Start Lesson ${up.lesson.id}`}
              </Link>
            </div>
          </>
        ) : up.kind === "all_done" ? (
          <>
            <h2 id="today-title" className="ob-h t-card-title">
              Every open lesson is complete
            </h2>
            <p className="ob-p gl-today__text">{firstLockedOpens ? `The next day ${firstLockedOpens.charAt(0).toLowerCase()}${firstLockedOpens.slice(1)}.` : "You have completed the programme's open lessons."}</p>
            <div className="ob-card__actions">
              <Link className="ob-btn ob-btn--primary" href="/work">
                View my work
              </Link>
            </div>
          </>
        ) : (
          <>
            <h2 id="today-title" className="ob-h t-card-title">
              Your first day has not opened yet
            </h2>
            <p className="ob-p gl-today__text">{firstLockedOpens ? `Day 1 ${firstLockedOpens.charAt(0).toLowerCase()}${firstLockedOpens.slice(1)}.` : "Day 1 opens once your cohort's start date is confirmed."} Meanwhile, the welcome tour explains how lessons work.</p>
            <div className="ob-card__actions">
              <Link className="ob-btn ob-btn--primary" href="/welcome">
                Open the welcome tour
              </Link>
            </div>
          </>
        )}
      </section>

      <section className="gl-section" aria-labelledby="days">
        <h2 id="days" className="ob-h t-section-heading">
          Your {view.days.length} days
        </h2>
        <ol className="gl-dayrow">
          {view.days.map((d) => {
            const points = d.lessons.filter((l) => l.reviewPoint);
            const current = d.n === view.currentDay;
            return (
              <li key={d.n}>
                <Link className={`gl-daytile${current ? " gl-daytile--current" : ""}`} href={`/day/${d.n}`} aria-current={current ? "date" : undefined}>
                  <span className="gl-daytile__n">Day {d.n}</span>
                  {current ? <span className="t-label-meta">Today</span> : null}
                  <DayChip access={d.access} />
                  {points.map((l) => (
                    <span key={l.id} className="gl-daytile__review">
                      <span className="t-label-meta">Review {l.id}</span>
                      <ReviewTag decision={l.review ?? "not_submitted"} />
                    </span>
                  ))}
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="gl-section" aria-labelledby="waiting">
        <h2 id="waiting" className="ob-h t-section-heading">
          Waiting on your supervisor
        </h2>
        {waiting.length ? (
          <>
            <p className="ob-p ob-secondary">Meanwhile, carry on with your next lesson. Days open on the calendar, and nothing waits for a review. Record each decision in My work when you hear it.</p>
            <ul className="ob-list gl-sublist">
              {waiting.map(({ lesson, submitted }) => (
                <li key={lesson.id} className="ob-sub gl-sub">
                  <div className="gl-sub__main">
                    <p className="ob-meta ob-p">Lesson {lesson.id}</p>
                    <p className="ob-p gl-sub__title">{lesson.title}</p>
                    <p className="ob-meta ob-p">Version {submitted.version} submitted {dateTime(submitted.submittedAt)}</p>
                  </div>
                  <div className="ob-sub__actions">
                    <ReviewTag decision="awaiting_review" />
                    <Link className="ob-link" href={`/work/${lesson.slug}`} aria-label={`View submission: Lesson ${lesson.id}`}>
                      View submission
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="ob-p">Nothing is waiting on your supervisor.</p>
        )}
      </section>

      <section className="gl-section" aria-labelledby="shortcuts">
        <h2 id="shortcuts" className="ob-h t-section-heading">
          Shortcuts
        </h2>
        <ul className="ob-grid gl-shortcuts">
          <li className="ob-card ob-card--lavender">
            <p className="ob-tk__kind ob-p">Prompt library</p>
            <p className="ob-p">Every Claude prompt in the course, with Copy.</p>
            <Link className="ob-link" href="/toolkit/prompts">
              View prompts
            </Link>
          </li>
          <li className="ob-card ob-card--outlined">
            <p className="ob-tk__kind ob-p">Glossary</p>
            <p className="ob-p">Terms the lessons define.</p>
            <Link className="ob-link" href="/toolkit/glossary">
              Open the glossary
            </Link>
          </li>
          <li className="ob-card ob-card--outlined">
            <p className="ob-tk__kind ob-p">Command sheet</p>
            <p className="ob-p">Every terminal command in the course.</p>
            <Link className="ob-link" href="/toolkit/commands">
              View commands
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
