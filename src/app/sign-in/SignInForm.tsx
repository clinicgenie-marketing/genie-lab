"use client";

import { useState } from "react";

/**
 * Posts to Better Auth's sign-in endpoint, which sets the session cookie and applies its
 * rate limit. The message never says whether the email exists.
 */
export function SignInForm({ next }: { next: string }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit() {
    if (!email.trim() || !password) return setError("Enter your email and password.");
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/sign-in/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password, rememberMe: true }),
        credentials: "same-origin",
      });
      if (res.ok) {
        // A full load, so every page reads the new session from the start.
        window.location.assign(next);
        return;
      }
      setError(res.status === 429 ? "Too many attempts. Wait a minute, then try again." : "That email and password don't match an account. Check them, or ask your supervisor to reset your password.");
    } catch {
      setError("We couldn't reach Genie Lab. Check your connection, then try again.");
    }
    setBusy(false);
  }

  return (
    <form
      className="gl-signin"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        void submit();
      }}
    >
      <div className="ob-field">
        <label className="ob-label" htmlFor="email">
          Email
        </label>
        <input id="email" className="ob-input" type="email" autoComplete="username" inputMode="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={error ? true : undefined} aria-describedby={error ? "signin-error" : undefined} />
      </div>
      <div className="ob-field">
        <label className="ob-label" htmlFor="password">
          Password
        </label>
        <input id="password" className="ob-input" type={show ? "text" : "password"} autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} aria-invalid={error ? true : undefined} aria-describedby={error ? "signin-error" : undefined} />
        <div className="ob-check">
          <input id="show-password" type="checkbox" checked={show} onChange={(e) => setShow(e.target.checked)} />
          <label htmlFor="show-password">Show password</label>
        </div>
      </div>
      {error ? (
        <p id="signin-error" className="ob-error-text" role="alert">
          <span className="ob-glyph" aria-hidden="true">!</span>
          {error}
        </p>
      ) : null}
      <div className="ob-card__actions">
        <button type="submit" className="ob-btn ob-btn--primary ob-btn--large" disabled={busy} aria-busy={busy || undefined}>
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </div>
    </form>
  );
}
