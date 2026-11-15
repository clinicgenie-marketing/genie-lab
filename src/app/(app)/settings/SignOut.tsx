"use client";

import { useState } from "react";

export function SignOut() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  return (
    <section className="ob-card ob-card--outlined gl-settings__group" aria-labelledby="set-account">
      <h2 id="set-account" className="ob-h t-card-title">
        Account
      </h2>
      <p className="ob-p ob-secondary">Your progress is saved to your account, so you can sign in again on any computer.</p>
      <div>
        <button
          type="button"
          className="ob-btn ob-btn--secondary"
          disabled={busy}
          aria-busy={busy || undefined}
          onClick={async () => {
            setBusy(true);
            setError(null);
            try {
              const res = await fetch("/api/auth/sign-out", { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}", credentials: "same-origin" });
              if (!res.ok) throw new Error();
              window.location.assign("/sign-in");
            } catch {
              setError("We couldn't sign you out. Check your connection, then try again.");
              setBusy(false);
            }
          }}
        >
          {busy ? "Signing out…" : "Sign out"}
        </button>
      </div>
      <p className="ob-p ob-error-text gl-save--error" role="alert">
        {error}
      </p>
    </section>
  );
}
