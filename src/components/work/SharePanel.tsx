"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createShareLink, revokeShareLink } from "@/lib/actions/work";
import { Dialog } from "../Dialog";

/** A read-only link for the supervisor: create, copy, or turn off. */
export function SharePanel({ lessonId, token, canSave }: { lessonId: string; token: string | null; canSave: boolean }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);
  const [confirmOff, setConfirmOff] = useState(false);
  const url = token ? `${typeof window === "undefined" ? "" : window.location.origin}/share/${token}` : null;

  async function create() {
    setBusy(true);
    setMessage(null);
    const r = await createShareLink(lessonId).catch(() => ({ ok: false as const, error: "We couldn't create the link. Check your connection, then try again." }));
    setBusy(false);
    if (r.ok) {
      setMessage({ kind: "ok", text: "Share link created." });
      router.replace(window.location.pathname, { scroll: false });
    } else setMessage({ kind: "error", text: r.error });
  }

  async function copy() {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setMessage({ kind: "ok", text: "Copied" });
    } catch {
      setMessage({ kind: "error", text: "Copy didn't work. Select the link and copy it yourself." });
    }
  }

  async function turnOff() {
    setBusy(true);
    const r = await revokeShareLink(lessonId).catch(() => ({ ok: false as const, error: "We couldn't turn off the link. Check your connection, then try again." }));
    setBusy(false);
    setConfirmOff(false);
    if (r.ok) {
      setMessage({ kind: "ok", text: "Share link turned off. The old link no longer opens." });
      router.replace(window.location.pathname, { scroll: false });
    } else setMessage({ kind: "error", text: r.error });
  }

  return (
    <div className="gl-share">
      {url ? (
        <>
          <div className="ob-field gl-field gl-share__field">
            <label className="ob-label" htmlFor="share-url">
              Read-only link
            </label>
            <p className="ob-help" id="share-help">
              Anyone with this link can see this submission, but cannot change it. Send it to your supervisor.
            </p>
            <input id="share-url" className="ob-input" readOnly value={url} aria-describedby="share-help" onFocus={(e) => e.currentTarget.select()} />
          </div>
          <div className="ob-card__actions">
            <button type="button" className="ob-btn ob-btn--secondary" onClick={copy}>
              Copy link
            </button>
            <button type="button" className="ob-btn ob-btn--tertiary" disabled={!canSave || busy} onClick={() => setConfirmOff(true)}>
              Turn off link
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="ob-p">Create a read-only link to this submission to send to your supervisor. You can turn it off at any time.</p>
          <div className="ob-card__actions">
            <button type="button" className="ob-btn ob-btn--secondary" disabled={!canSave || busy} aria-busy={busy || undefined} onClick={create}>
              Create share link
            </button>
          </div>
        </>
      )}
      <p className="ob-p t-label-meta gl-save" role="status">
        {message?.kind === "ok" ? message.text : null}
      </p>
      <p className="ob-p ob-error-text gl-save--error" role="alert">
        {message?.kind === "error" ? message.text : null}
      </p>
      <Dialog open={confirmOff} onClose={() => setConfirmOff(false)} title="Turn off this share link?" busy={busy}>
        <p className="ob-p">Your supervisor won&apos;t be able to open the current link any more. You can create a new link later.</p>
        <div className="ob-card__actions">
          <button type="button" className="ob-btn ob-btn--destructive" disabled={busy} aria-busy={busy || undefined} onClick={turnOff}>
            Turn off link
          </button>
          <button type="button" className="ob-btn ob-btn--secondary" disabled={busy} onClick={() => setConfirmOff(false)}>
            Keep the link
          </button>
        </div>
      </Dialog>
    </div>
  );
}
