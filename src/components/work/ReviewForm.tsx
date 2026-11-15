"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { recordReviewOutcome } from "@/lib/actions/work";

/** The intern records the decision their supervisor made outside the platform. */
export function ReviewForm({ lessonId, version, canSave }: { lessonId: string; version: number; canSave: boolean }) {
  const router = useRouter();
  const [decision, setDecision] = useState<"changes_requested" | "accepted" | "">("");
  const [reviewer, setReviewer] = useState("");
  const [notes, setNotes] = useState("");
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<{ decision?: string; reviewer?: string; form?: string }>({});
  const [saved, setSaved] = useState<string | null>(null);

  async function submit() {
    const e: typeof errors = {};
    if (!decision) e.decision = "Choose the decision your supervisor gave.";
    if (!reviewer.trim()) e.reviewer = "Add the reviewer's name.";
    setErrors(e);
    setSaved(null);
    if (e.decision || e.reviewer) return;
    setBusy(true);
    const r = await recordReviewOutcome(lessonId, { decision: decision as "changes_requested" | "accepted", reviewerName: reviewer, notes }).catch(() => ({
      ok: false as const,
      error: "We couldn't save your changes. Check your connection, then try again.",
    }));
    setBusy(false);
    if (r.ok) {
      setSaved("Recorded. The decision now shows on this page and in My work.");
      setDecision("");
      setReviewer("");
      setNotes("");
      router.replace(window.location.pathname, { scroll: false });
    } else setErrors({ form: r.error });
  }

  return (
    <form
      className="gl-reviewform"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        void submit();
      }}
    >
      <fieldset className="ob-fieldset" aria-describedby={errors.decision ? "decision-error" : undefined}>
        <legend>Decision for version {version}</legend>
        <label className="ob-option">
          <input type="radio" name="decision" value="changes_requested" checked={decision === "changes_requested"} onChange={() => setDecision("changes_requested")} />
          Changes requested
        </label>
        <label className="ob-option">
          <input type="radio" name="decision" value="accepted" checked={decision === "accepted"} onChange={() => setDecision("accepted")} />
          Accepted
        </label>
        {errors.decision ? (
          <p id="decision-error" className="ob-error-text">
            <span className="ob-glyph" aria-hidden="true">!</span>
            {errors.decision}
          </p>
        ) : null}
      </fieldset>
      <div className="ob-field gl-field">
        <label className="ob-label" htmlFor="reviewer">
          Reviewer&apos;s name <span className="ob-req">(required)</span>
        </label>
        <input id="reviewer" className="ob-input" autoComplete="off" value={reviewer} aria-invalid={errors.reviewer ? true : undefined} aria-describedby={errors.reviewer ? "reviewer-error" : undefined} onChange={(e) => setReviewer(e.target.value)} />
        {errors.reviewer ? (
          <p id="reviewer-error" className="ob-error-text">
            <span className="ob-glyph" aria-hidden="true">!</span>
            {errors.reviewer}
          </p>
        ) : null}
      </div>
      <div className="ob-field gl-field">
        <label className="ob-label" htmlFor="review-notes">
          Your supervisor&apos;s notes <span className="ob-req">(optional)</span>
        </label>
        <p className="ob-help" id="notes-help">
          Copy or summarise what your supervisor told you.
        </p>
        <textarea id="review-notes" className="ob-input" rows={5} value={notes} aria-describedby="notes-help" onChange={(e) => setNotes(e.target.value)} />
      </div>
      <div className="ob-card__actions">
        <button type="submit" className="ob-btn ob-btn--primary" disabled={!canSave || busy} aria-busy={busy || undefined}>
          {busy ? "Recording…" : "Record review outcome"}
        </button>
      </div>
      <p className="ob-p t-label-meta gl-save" role="status">
        {saved}
      </p>
      <p className="ob-p ob-error-text gl-save--error" role="alert">
        {errors.form}
      </p>
    </form>
  );
}
