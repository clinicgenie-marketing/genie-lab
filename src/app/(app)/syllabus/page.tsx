import Link from "next/link";
import { connection } from "next/server";
import { getProgrammeView, type DayView } from "@/lib/programme";
import { formatMinutes } from "@/lib/schedule";
import { PageHeader } from "@/components/PageHeader";
import { LessonRow } from "@/components/LessonRow";
import { DayChip, ReviewTag } from "@/components/StatusBadges";

export const metadata = { title: "Syllabus" };

function DayCard({ day, current, total }: { day: DayView; current: boolean; total: number }) {
  const reviewPoints = day.lessons.filter((l) => l.reviewPoint);
  return (
    <li>
      <section className={`ob-card gl-daycard${current ? " ob-card--cyan" : ""}`} aria-labelledby={`day-${day.n}`}>
        <div className="gl-daycard__head">
          <div className="gl-daycard__titles">
            <p className="ob-p t-label-meta gl-daycard__eyebrow">
              Day {day.n} of {total}
              {current ? " · Today" : ""}
            </p>
            <h2 id={`day-${day.n}`} className="ob-h t-card-title">
              {day.title}
            </h2>
          </div>
          <DayChip access={day.access} />
        </div>

        <p className="ob-p gl-daycard__meta">
          {day.lessons.length} lessons · {formatMinutes(day.estimatedMinutes, "hours")} · {day.completeCount} of {day.lessons.length} complete
        </p>
        {day.access === "locked" ? <p className="ob-p gl-daycard__opens">{day.opensLabel ?? "Opening date not set yet"}</p> : null}

        <details className="gl-disclosure" open={current}>
          <summary>Lessons in Day {day.n}</summary>
          <ol className="ob-list gl-disclosure__body">
            {day.lessons.map((l) => (
              <LessonRow key={l.id} lesson={l} />
            ))}
          </ol>
        </details>

        {reviewPoints.length ? (
          <div className="gl-daycard__review">
            {reviewPoints.map((l) => (
              <p key={l.id} className="ob-p gl-inline-status">
                <span>Review point: Lesson {l.id}</span>
                <ReviewTag decision={l.review ?? "not_submitted"} />
              </p>
            ))}
          </div>
        ) : null}

        <div className="ob-card__actions">
          <Link className={current ? "ob-btn ob-btn--primary" : "ob-btn ob-btn--secondary"} href={`/day/${day.n}`}>
            Open Day {day.n}
          </Link>
        </div>
      </section>
    </li>
  );
}

export default async function SyllabusPage() {
  await connection();
  const view = await getProgrammeView();
  return (
    <>
      <PageHeader
        title="Syllabus"
        lead={`${view.days.length} days, ${view.lessonCount} lessons. Each day opens on its working day, and earlier days stay open.`}
      />

      {!view.scheduleSet ? (
        <div className="ob-alert ob-alert--info gl-alert" role="note">
          <span className="ob-glyph" aria-hidden="true">i</span>
          <div>
            <p className="ob-alert__title">Opening dates are not set yet</p>
            <p className="ob-p">Days open once your cohort's start date is confirmed.</p>
          </div>
        </div>
      ) : null}

      <section className="ob-card ob-card--cyan gl-stat" aria-labelledby="progress-label">
        <p id="progress-label" className="ob-stat__label ob-p">Lessons complete</p>
        <p className="ob-stat__figure ob-p">{view.completeCount}</p>
        <p className="ob-stat__scope ob-p">of {view.lessonCount} lessons in the programme</p>
      </section>

      <ol className="gl-daylist">
        {view.days.map((d) => (
          <DayCard key={d.n} day={d} current={d.n === view.currentDay} total={view.days.length} />
        ))}
      </ol>
    </>
  );
}
