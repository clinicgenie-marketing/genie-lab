import Link from "next/link";
import { connection } from "next/server";
import { reviewPointFor } from "@/lib/config";
import { lessons } from "@/lib/content/curriculum";
import { auth } from "@/lib/platform/auth";
import { emptyWork, workStore } from "@/lib/platform/work";
import { getProgrammeView, nextLesson } from "@/lib/programme";
import { latestSubmission, reviewState, submissionsFor, type ReviewState } from "@/lib/work-rules";
import { dateTime } from "@/components/work/EvidenceView";
import { PageHeader } from "@/components/PageHeader";
import { ReviewTag, SubmissionBadge } from "@/components/StatusBadges";

export const metadata = { title: "My work" };

const FILTERS = [
  { key: "needs-action", label: "Needs action" },
  { key: "awaiting", label: "Awaiting review" },
  { key: "accepted", label: "Accepted" },
  { key: "all", label: "All" },
] as const;
type FilterKey = (typeof FILTERS)[number]["key"];

type Row = { id: string; slug: string; title: string; day: number; when: string | null; versions: number; draft: boolean; review: ReviewState | null };

const matches = (f: FilterKey, r: Row) =>
  f === "all" || (f === "needs-action" && r.review === "changes_requested") || (f === "awaiting" && r.review === "awaiting_review") || (f === "accepted" && r.review === "accepted");

export default async function WorkPage({ searchParams }: { searchParams: Promise<{ filter?: string }> }) {
  await connection();
  const intern = await auth.getCurrentIntern();
  const work = intern ? await workStore.get(intern.id) : emptyWork();
  const rows: Row[] = lessons
    .map((l) => {
      const subs = submissionsFor(work, l.id);
      const draft = work.drafts.some((d) => d.lessonId === l.id);
      if (!subs.length && !draft) return null;
      return {
        id: l.id,
        slug: l.slug,
        title: l.title,
        day: l.day,
        when: latestSubmission(work, l.id)?.submittedAt ?? null,
        versions: subs.length,
        draft,
        review: subs.length && reviewPointFor(l.id) ? reviewState(work, l.id) : null,
      };
    })
    .filter((r): r is Row => r !== null)
    .sort((a, b) => (b.when ?? "").localeCompare(a.when ?? ""));

  const counts = Object.fromEntries(FILTERS.map((f) => [f.key, rows.filter((r) => matches(f.key, r)).length])) as Record<FilterKey, number>;
  const requested = (await searchParams).filter;
  const filter: FilterKey = FILTERS.some((f) => f.key === requested) ? (requested as FilterKey) : counts["needs-action"] ? "needs-action" : "all";
  const shown = rows.filter((r) => matches(filter, r));

  let firstStep: { id: string; slug: string } | undefined;
  if (!rows.length) {
    const programme = await getProgrammeView();
    const day = programme.days.find((d) => d.n === programme.currentDay);
    const next = day ? nextLesson(day) : undefined;
    firstStep = next ? { id: next.id, slug: next.slug } : undefined;
  }

  return (
    <>
      <PageHeader title="My work" lead="Everything you have submitted, and the review decisions you have recorded." />
      <nav className="gl-subnav" aria-label="Filter submissions">
        <ul>
          {FILTERS.map((f) => (
            <li key={f.key}>
              <Link href={`/work?filter=${f.key}`} aria-current={filter === f.key ? "page" : undefined}>
                {f.label} ({counts[f.key]})
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {!rows.length ? (
        <section className="ob-card ob-card--outlined gl-empty" aria-label="No submissions yet">
          <p className="ob-p">You haven&apos;t submitted any evidence yet. Each lesson ends with Submit evidence, after its task.</p>
          {firstStep ? (
            <p className="ob-p">
              <Link className="ob-btn ob-btn--primary" href={`/lesson/${firstStep.slug}`}>
                Go to Lesson {firstStep.id}
              </Link>
            </p>
          ) : (
            <p className="ob-p ob-secondary">Your first lesson opens once your cohort&apos;s start date is confirmed.</p>
          )}
        </section>
      ) : !shown.length ? (
        <p className="ob-p">Nothing here. <Link className="gl-link" href="/work?filter=all">Show all your work</Link>.</p>
      ) : (
        <ul className="ob-list gl-sublist">
          {shown.map((r) => (
            <li key={r.id} className="ob-sub gl-sub">
              <div className="gl-sub__main">
                <p className="ob-meta ob-p">
                  Day {r.day} · Lesson {r.id}
                </p>
                <p className="ob-p gl-sub__title">{r.title}</p>
                <p className="ob-sub__meta ob-meta ob-p">
                  {r.when ? <span>Last submitted {dateTime(r.when)}</span> : <span>Not submitted yet</span>}
                  {r.versions > 1 ? <span>{r.versions} versions</span> : null}
                </p>
              </div>
              <div className="ob-sub__actions">
                <SubmissionBadge state={r.versions ? "submitted" : "draft"} />
                {r.review ? <ReviewTag decision={r.review} /> : null}
                <Link className="ob-link" href={`/work/${r.slug}`} aria-label={`View submission: Lesson ${r.id}`}>
                  View submission
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
