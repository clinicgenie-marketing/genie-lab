"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import type { PublicQuestion } from "@/lib/knowledge-checks";
import { checkAnswer } from "@/lib/actions/check";

type Result = { correct: boolean; explanation: string } | null;

/**
 * Five multiple-choice questions, one at a time, marked on the server as soon as the
 * intern selects Check answer. Wrong answers can be tried again. Passed when all five are correct.
 */
export function CheckRunner({ lessonId, slug, questions, correctSoFar, canSave }: { lessonId: string; slug: string; questions: PublicQuestion[]; correctSoFar: string[]; canSave: boolean }) {
  const [correct, setCorrect] = useState<Set<string>>(() => new Set(correctSoFar));
  const firstOpen = questions.findIndex((q) => !correct.has(q.id));
  const [index, setIndex] = useState(firstOpen === -1 ? questions.length : firstOpen);
  const [choice, setChoice] = useState<string>("");
  const [result, setResult] = useState<Result>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const legendRef = useRef<HTMLLegendElement>(null);
  const groupId = useId();

  const passed = correct.size === questions.length;
  const q = questions[index];

  async function check() {
    if (!q) return;
    if (!choice) return setError("Choose an answer, then select Check answer.");
    setBusy(true);
    setError(null);
    const r = await checkAnswer(lessonId, q.id, choice).catch(() => ({ ok: false as const, error: "We couldn't save your answer. Check your connection, then try again." }));
    setBusy(false);
    if (!r.ok) return setError(r.error);
    setResult({ correct: r.correct, explanation: r.explanation });
    if (r.correct) setCorrect((s) => new Set(s).add(q.id));
  }

  function next() {
    const following = questions.findIndex((x, i) => i > index && !correct.has(x.id));
    const anyOpen = questions.findIndex((x) => !correct.has(x.id));
    setIndex(following !== -1 ? following : anyOpen !== -1 ? anyOpen : questions.length);
    setChoice("");
    setResult(null);
    requestAnimationFrame(() => legendRef.current?.focus());
  }

  if (passed && index >= questions.length) {
    return (
      <div className="ob-alert ob-alert--success gl-alert" role="status">
        <span className="ob-glyph" aria-hidden="true">✓</span>
        <div>
          <p className="ob-alert__title">Knowledge check passed</p>
          <p className="ob-p">You answered all {questions.length} questions correctly. This does not mean your supervisor has accepted your work; that is recorded separately.</p>
          <p className="ob-p">
            <Link className="ob-btn ob-btn--primary" href={`/lesson/${slug}/task`}>
              Back to your task
            </Link>
          </p>
        </div>
      </div>
    );
  }
  if (!q) return null;

  return (
    <div className="gl-check">
      <p className="ob-p t-label-meta ob-secondary">
        {correct.size} of {questions.length} answered correctly
      </p>
      <div className="ob-card ob-card--outlined gl-question">
        <span className="ob-qhead">
          Question {index + 1} of {questions.length}
        </span>
        <fieldset className="ob-fieldset" aria-describedby={error ? `${groupId}-error` : undefined} disabled={busy || (result?.correct ?? false)}>
          <legend ref={legendRef} tabIndex={-1}>
            {q.prompt}
          </legend>
          {q.options.map((o) => (
            <label key={o.id} className="ob-option">
              <input
                type="radio"
                name={`${groupId}-${q.id}`}
                value={o.id}
                checked={choice === o.id}
                onChange={() => {
                  setChoice(o.id);
                  if (result && !result.correct) setResult(null);
                  setError(null);
                }}
              />
              {o.text}
            </label>
          ))}
        </fieldset>
        <div role="status" className="gl-check__result">
          {result ? (
            <div className={`ob-callout ${result.correct ? "ob-callout--checked" : "ob-callout--dependency"}`}>
              <p className="ob-callout__label ob-p">{result.correct ? "Correct" : "Not quite. Try again."}</p>
              <p className="ob-p">{result.explanation}</p>
            </div>
          ) : null}
        </div>
        {error ? (
          <p id={`${groupId}-error`} className="ob-error-text" role="alert">
            <span className="ob-glyph" aria-hidden="true">!</span>
            {error}
          </p>
        ) : null}
        <div className="ob-card__actions">
          {result?.correct ? (
            <button type="button" className="ob-btn ob-btn--primary" onClick={next}>
              {correct.size === questions.length ? "Finish" : "Next question"}
            </button>
          ) : (
            <button type="button" className="ob-btn ob-btn--primary" disabled={!canSave || busy} aria-busy={busy || undefined} onClick={check}>
              {busy ? "Checking…" : "Check answer"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
