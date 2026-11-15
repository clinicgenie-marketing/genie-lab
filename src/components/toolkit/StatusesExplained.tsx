import { ComingSoonBadge, DayChip, ProgressBadge, ReviewTag, SubmissionBadge } from "../StatusBadges";

/** Statuses explained, from the IA plan's status model. Shown in the Toolkit and the Help drawer. */
export function StatusesExplained({ compact = false }: { compact?: boolean }) {
  const H = compact ? "h3" : "h2";
  const cls = compact ? "ob-h t-label-meta gl-status-kind" : "ob-h t-section-heading";
  return (
    <div className="gl-statuses">
      <section aria-label="Lesson progress">
        <H className={cls}>Lesson progress</H>
        <p className="ob-p ob-secondary">How far you are with a lesson. You set it, except Locked.</p>
        <dl className="gl-status-list">
          <dt><ProgressBadge status="locked" /></dt><dd>The lesson&apos;s day has not opened yet. Days open on the calendar.</dd>
          <dt><ProgressBadge status="not_started" /></dt><dd>Open, and you have not opened it yet.</dd>
          <dt><ProgressBadge status="in_progress" /></dt><dd>You have started reading or ticking steps.</dd>
          <dt><ProgressBadge status="complete" /></dt><dd>You marked it complete: steps ticked, evidence submitted, self-check ticked, and the knowledge check passed or not yet available.</dd>
          <dt><ComingSoonBadge /></dt><dd>The lesson is not published yet. This is not the same as Locked.</dd>
        </dl>
      </section>
      <section aria-label="Review decision">
        <H className={cls}>Review decision</H>
        <p className="ob-p ob-secondary">What your supervisor decided outside the platform, as you recorded it. Only at review points. It never affects whether a lesson is complete.</p>
        <dl className="gl-status-list">
          <dt><ReviewTag decision="not_submitted" /></dt><dd>Nothing submitted for this review point yet.</dd>
          <dt><ReviewTag decision="awaiting_review" /></dt><dd>Submitted, and no decision recorded for the latest version.</dd>
          <dt><ReviewTag decision="changes_requested" /></dt><dd>You recorded that your supervisor asked for changes. Fix the work and resubmit.</dd>
          <dt><ReviewTag decision="accepted" /></dt><dd>You recorded that your supervisor accepted the latest version.</dd>
        </dl>
      </section>
      <section aria-label="Submission">
        <H className={cls}>Submission</H>
        <dl className="gl-status-list">
          <dt><SubmissionBadge state="draft" /></dt><dd>Saved as a draft, not submitted yet.</dd>
          <dt><SubmissionBadge state="submitted" /></dt><dd>Your evidence is submitted. Earlier versions are kept when you resubmit.</dd>
        </dl>
      </section>
      <section aria-label="Day access">
        <H className={cls}>Day access</H>
        <p className="ob-p ob-secondary">Set by the calendar: Day N opens on your cohort&apos;s Nth working day.</p>
        <dl className="gl-status-list">
          <dt><DayChip access="locked" /></dt><dd>Not open yet. The Syllabus shows the date it opens.</dd>
          <dt><DayChip access="open" /></dt><dd>Open. Earlier days stay open, so you can catch up.</dd>
          <dt><DayChip access="done" /></dt><dd>Every lesson in the day is complete.</dd>
        </dl>
      </section>
      <section aria-label="Words in your evidence">
        <H className={cls}>Words in your evidence</H>
        <p className="ob-p">Check results (Passed, Failed, Not checked, Not applicable) and finding statuses (Open; Corrected, awaiting verification; Verified; Awaiting decision) belong to your own records. They are never platform statuses and never appear as badges here.</p>
      </section>
    </div>
  );
}
