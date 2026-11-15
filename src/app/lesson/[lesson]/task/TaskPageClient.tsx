"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { Check, Circle } from "lucide-react";
import type { CriteriaPart, TaskPart } from "@/lib/content/model";
import { chooseCriterionOption, markLessonComplete, saveCriterion, saveStep } from "@/lib/actions/progress";
import type { CheckState } from "@/lib/work-rules";
import { Blocks } from "@/components/content/Blocks";
import { Inlines } from "@/components/content/Inlines";
import { SaveStatus, TaskPanel } from "@/components/lesson/TaskPanel";
import { useTicks } from "@/components/lesson/useTicks";
import { ProgressBadge } from "@/components/StatusBadges";

type Props = {
  lessonId: string;
  slug: string;
  task: TaskPart;
  criteria: CriteriaPart;
  tickedSteps: string[];
  tickedCriteria: string[];
  canSave: boolean;
  lastSection: number;
  submitted: boolean;
  check: CheckState;
  complete: boolean;
  next: { id: string; slug: string; title: string } | null;
};

function Condition({ ok, label, detail, href, linkText }: { ok: boolean; label: string; detail: string; href?: string; linkText?: string }) {
  return (
    <li className={`gl-condition${ok ? " gl-condition--ok" : ""}`}>
      {ok ? <Check size={20} aria-hidden="true" focusable="false" /> : <Circle size={20} aria-hidden="true" focusable="false" />}
      <span>
        <strong>{label}:</strong> {ok ? "Done" : "Not yet"}. <span className="ob-secondary">{detail}</span>
        {!ok && href && linkText ? (
          <>
            {" "}
            <Link className="gl-link" href={href}>
              {linkText}
            </Link>
          </>
        ) : null}
      </span>
    </li>
  );
}

export function TaskPageClient(props: Props) {
  const { lessonId, slug, task, criteria, canSave, submitted, check } = props;
  const router = useRouter();
  const steps = useTicks(props.tickedSteps, useCallback((id: string, checked: boolean) => saveStep(lessonId, id, checked), [lessonId]));
  const one = criteria.mode === "one";
  const crit = useTicks(
    props.tickedCriteria,
    useCallback((id: string, checked: boolean) => (one ? chooseCriterionOption(lessonId, id) : saveCriterion(lessonId, id, checked)), [lessonId, one]),
    one,
  );
  const [complete, setComplete] = useState(props.complete);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const stepsDone = task.steps.filter((s) => steps.ticked.has(s.id)).length;
  const chosen = criteria.items.filter((c) => crit.ticked.has(c.id)).length;
  const criteriaOk = one ? chosen === 1 : chosen === criteria.items.length;
  const conditions = {
    steps: stepsDone === task.steps.length,
    evidence: submitted,
    criteria: criteriaOk,
    check: check !== "pending",
  };
  const ready = Object.values(conditions).every(Boolean);
  const missing = [!conditions.steps && "tick every task step", !conditions.evidence && "submit your evidence", !conditions.criteria && (one ? "choose which statement applies" : "tick every self-check item"), !conditions.check && "pass the knowledge check"].filter(Boolean);

  async function onComplete() {
    setBusy(true);
    setError(null);
    const r = await markLessonComplete(lessonId).catch(() => ({ ok: false as const, error: "We couldn't save your changes. Check your connection, then try again." }));
    setBusy(false);
    if (r.ok) {
      setComplete(true);
      router.refresh();
    } else setError(r.error);
  }

  return (
    <div className="gl-taskpage">
      <TaskPanel task={task} slug={slug} ticked={steps.ticked} onToggle={steps.toggle} message={steps.message} canSave={canSave} headingLevel={1} headingId="task-heading" />

      <section className="ob-card ob-card--outlined gl-selfcheck" aria-labelledby="selfcheck-heading">
        <h2 id="selfcheck-heading" className="ob-h t-section-heading">
          Final self-check
        </h2>
        <div className="gl-prose gl-prose--compact">
          <Blocks blocks={criteria.intro} />
        </div>
        {one ? (
          <fieldset className="ob-fieldset gl-criteria">
            <legend>Choose the statement that applies to you</legend>
            {criteria.items.map((c) => {
              const first = c.children[0];
              return (
                <label key={c.id} className="ob-option gl-criterion-option">
                  <input type="radio" name="criteria-choice" checked={crit.ticked.has(c.id)} disabled={!canSave || complete} onChange={() => crit.toggle(c.id, true)} />
                  <span>{first?.type === "paragraph" ? <Inlines nodes={first.children} /> : c.id}</span>
                </label>
              );
            })}
          </fieldset>
        ) : (
          <ul className="gl-steps gl-criteria">
            {criteria.items.map((c) => {
              const first = c.children[0];
              const id = `criterion-${c.id}`;
              return (
                <li key={c.id} className="gl-step">
                  <div className="ob-check">
                    <input type="checkbox" id={id} checked={crit.ticked.has(c.id)} disabled={!canSave || complete} onChange={(e) => crit.toggle(c.id, e.target.checked)} />
                    <label htmlFor={id}>{first?.type === "paragraph" ? <Inlines nodes={first.children} /> : c.id}</label>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        <SaveStatus message={crit.message} />
        {criteria.after.length ? (
          <div className="gl-prose gl-prose--compact">
            <Blocks blocks={criteria.after} />
          </div>
        ) : null}
      </section>

      <section className="ob-card ob-card--outlined gl-complete" aria-labelledby="complete-heading">
        <h2 id="complete-heading" className="ob-h t-section-heading">
          Mark lesson complete
        </h2>
        {complete ? (
          <div className="gl-complete__done" role="status">
            <p className="ob-p gl-inline-status">
              <ProgressBadge status="complete" />
              <span>You marked this lesson complete.</span>
            </p>
            <p className="ob-p ob-secondary">Completing a lesson is separate from your supervisor&apos;s review, which you record in My work.</p>
            {props.next ? (
              <p className="ob-p">
                <Link className="ob-btn ob-btn--primary" href={`/lesson/${props.next.slug}`}>
                  Start Lesson {props.next.id}
                </Link>
              </p>
            ) : null}
          </div>
        ) : (
          <>
            <p className="ob-p">You can mark the lesson complete when all four are done. Your supervisor&apos;s review is not one of them.</p>
            <ul className="gl-conditions">
              <Condition ok={conditions.steps} label="Task steps" detail={`${stepsDone} of ${task.steps.length} ticked.`} />
              <Condition ok={conditions.evidence} label="Evidence" detail={submitted ? "Submitted." : "Nothing submitted yet."} href={`/lesson/${slug}/submit`} linkText="Submit evidence" />
              <Condition ok={conditions.criteria} label="Self-check" detail={one ? (chosen ? "Statement chosen." : "No statement chosen.") : `${chosen} of ${criteria.items.length} ticked.`} />
              <Condition
                ok={conditions.check}
                label="Knowledge check"
                detail={check === "passed" ? "Passed." : check === "unavailable" ? "Not yet available for this lesson, so it is skipped." : "Answer all five questions correctly."}
                href={`/lesson/${slug}/check`}
                linkText="Go to the knowledge check"
              />
            </ul>
            <div className="ob-card__actions">
              <button type="button" className="ob-btn ob-btn--primary ob-btn--large" disabled={!ready || !canSave || busy} aria-busy={busy || undefined} aria-describedby={ready ? undefined : "complete-why"} onClick={onComplete}>
                {busy ? "Saving…" : "Mark lesson complete"}
              </button>
            </div>
            {!ready ? (
              <p id="complete-why" className="ob-p ob-secondary">
                To finish, {missing.length > 1 ? `${missing.slice(0, -1).join(", ")} and ${missing[missing.length - 1]}` : missing[0]}.
              </p>
            ) : null}
            {error ? (
              <p className="ob-p ob-error-text" role="alert">
                <span className="ob-glyph" aria-hidden="true">!</span>
                {error}
              </p>
            ) : null}
          </>
        )}
      </section>

      <p className="ob-p">
        <Link className="ob-btn ob-btn--tertiary" href={`/lesson/${slug}#section-${props.lastSection}`}>
          Back to the lesson
        </Link>
      </p>
    </div>
  );
}
