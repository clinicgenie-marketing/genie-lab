import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { reviewPointFor } from "@/lib/config";
import { getLesson, getLessonBySlug, lessons } from "@/lib/content/curriculum";
import { auth } from "@/lib/platform/auth";
import { emptyWork } from "@/lib/platform/work";
import { decisionsFor, reviewState, submissionsFor } from "@/lib/work-rules";
import { PageHeader } from "@/components/PageHeader";
import { ReviewTag, SubmissionBadge } from "@/components/StatusBadges";
import { dateTime, EvidenceView } from "@/components/work/EvidenceView";
import { ReviewForm } from "@/components/work/ReviewForm";
import { SharePanel } from "@/components/work/SharePanel";
import { workStore } from "@/lib/platform/stores";

type Props = { params: Promise<{ lesson: string }>; searchParams: Promise<{ submitted?: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return lessons.map((l) => ({ lesson: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ lesson: string }> }): Promise<Metadata> {
  const lesson = getLessonBySlug((await params).lesson);
  return { title: lesson ? `Submission for Lesson ${lesson.id}` : "Page not found" };
}

export default async function SubmissionPage({ params, searchParams }: Props) {
  const summary = getLessonBySlug((await params).lesson);
  if (!summary) notFound();
  await connection();
  const lesson = getLesson(summary.id);
  const intern = await auth.getCurrentIntern();
  const work = intern ? await workStore.get(intern.id) : emptyWork();
  const versions = submissionsFor(work, summary.id);
  const latest = versions[0];
  const reviewPoint = reviewPointFor(summary.id);
  const state = reviewState(work, summary.id);
  const decisions = decisionsFor(work, summary.id);
  const share = work.shares.find((s) => s.lessonId === summary.id && !s.revokedAt) ?? null;
  const justSubmitted = Number((await searchParams).submitted);
  const showSubmitted = Boolean(latest && justSubmitted === latest.version);
  const changes = state === "changes_requested" ? decisions.find((d) => d.version === latest?.version && d.decision === "changes_requested") : undefined;

  return (
    <>
      <PageHeader eyebrow={`Day ${summary.day} · Lesson ${summary.id}`} title={`Submission for Lesson ${summary.id}: ${summary.title}`} />
      <p className="ob-p gl-inline-status">
        <SubmissionBadge state={latest ? "submitted" : "draft"} />
        {reviewPoint && latest ? <ReviewTag decision={state} /> : null}
        <Link className="gl-link" href={`/lesson/${summary.slug}`}>
          Open Lesson {summary.id}
        </Link>
      </p>

      {showSubmitted ? (
        <div className="ob-alert ob-alert--success gl-alert" role="status">
          <span className="ob-glyph" aria-hidden="true">✓</span>
          <div>
            <p className="ob-alert__title">Submitted</p>
            <p className="ob-p">Your evidence is saved as version {latest!.version}. You can view it below and in My work.</p>
          </div>
        </div>
      ) : null}

      {!latest || !lesson ? (
        <section className="ob-card ob-card--outlined gl-empty" aria-label="Nothing submitted">
          <p className="ob-p">Nothing has been submitted for this lesson yet{work.drafts.some((d) => d.lessonId === summary.id) ? ", but you have a saved draft" : ""}.</p>
          <p className="ob-p">
            <Link className="ob-btn ob-btn--primary" href={`/lesson/${summary.slug}/submit`}>
              {work.drafts.some((d) => d.lessonId === summary.id) ? "Continue your draft" : "Submit evidence"}
            </Link>
          </p>
        </section>
      ) : (
        <>
          {changes ? (
            <div className="ob-alert ob-alert--info gl-alert">
              <span className="ob-glyph" aria-hidden="true">!</span>
              <div>
                <p className="ob-alert__title">Changes requested on version {latest.version}</p>
                {changes.notes ? <p className="ob-p gl-prewrap">{changes.notes}</p> : null}
                <p className="ob-p">Fix the work in VS Code, then resubmit. Your earlier versions are kept.</p>
                <p className="ob-p">
                  <Link className="ob-btn ob-btn--primary" href={`/lesson/${summary.slug}/submit`}>
                    Resubmit
                  </Link>
                </p>
              </div>
            </div>
          ) : null}

          <section className="gl-section" aria-labelledby="latest">
            <h2 id="latest" className="ob-h t-section-heading">
              {versions.length > 1 ? `Latest version (${latest.version} of ${versions.length})` : "What you sent"}
            </h2>
            <EvidenceView lesson={lesson} submission={latest} fileHref={(id) => `/files/${id}`} />
            {!changes ? (
              <p className="ob-p">
                <Link className="ob-btn ob-btn--secondary" href={`/lesson/${summary.slug}/submit`}>
                  Submit a new version
                </Link>
              </p>
            ) : null}
          </section>

          <section id="share" className="gl-section" aria-labelledby="share-heading">
            <h2 id="share-heading" className="ob-h t-section-heading">
              Share with supervisor
            </h2>
            <SharePanel lessonId={summary.id} token={share?.token ?? null} canSave={Boolean(intern)} />
          </section>

          {reviewPoint ? (
            <section id="record" className="gl-section" aria-labelledby="record-heading">
              <h2 id="record-heading" className="ob-h t-section-heading">
                Review outcome
              </h2>
              <div className="ob-card ob-card--outlined gl-review-record">
                <p className="ob-p">Record the decision your supervisor shared with you.</p>
                <p className="ob-p ob-secondary">Your supervisor: {reviewPoint.supervisorDecides}</p>
                {decisions.length ? (
                  <ol className="gl-decisions">
                    {decisions.map((d) => (
                      <li key={d.id} className="gl-decision">
                        <dl className="ob-dl">
                          <dt>Decision</dt>
                          <dd>
                            <ReviewTag decision={d.decision} />
                          </dd>
                          <dt>Version</dt>
                          <dd>{d.version}</dd>
                          <dt>Reviewer</dt>
                          <dd>{d.reviewerName}</dd>
                          <dt>Notes</dt>
                          <dd className="gl-prewrap">{d.notes || "None recorded"}</dd>
                          <dt>Recorded</dt>
                          <dd>{dateTime(d.recordedAt)}</dd>
                        </dl>
                        <p className="ob-attrib ob-p">Recorded by you from an external review</p>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="ob-p">No decision recorded yet. This submission is awaiting review.</p>
                )}
                <ReviewForm lessonId={summary.id} version={latest.version} canSave={Boolean(intern)} />
              </div>
            </section>
          ) : null}

          {versions.length > 1 ? (
            <section className="gl-section" aria-labelledby="earlier">
              <h2 id="earlier" className="ob-h t-section-heading">
                Earlier versions
              </h2>
              {versions.slice(1).map((v) => (
                <details key={v.id} className="ob-card ob-card--outlined gl-version">
                  <summary className="ob-h t-card-title">Version {v.version}</summary>
                  <EvidenceView lesson={lesson} submission={v} fileHref={(id) => `/files/${id}`} />
                </details>
              ))}
            </section>
          ) : null}
        </>
      )}
    </>
  );
}
