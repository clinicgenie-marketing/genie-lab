"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { saveSettings } from "@/lib/actions/settings";
import type { Settings, TextSize } from "@/lib/platform/settings";

const SIZES: { value: TextSize; label: string; hint: string }[] = [
  { value: "default", label: "Default", hint: "The standard size" },
  { value: "large", label: "Large", hint: "About an eighth larger" },
  { value: "larger", label: "Larger", hint: "About a quarter larger" },
];

export function SettingsForm({ initial, canSave }: { initial: Settings; canSave: boolean }) {
  const router = useRouter();
  const [name, setName] = useState(initial.name ?? "");
  const [textSize, setTextSize] = useState<TextSize>(initial.textSize);
  const [reducedMotion, setReducedMotion] = useState(initial.reducedMotion);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<{ kind: "ok" | "error"; text: string; field?: "name" } | null>(null);

  async function save() {
    setBusy(true);
    setStatus(null);
    const r = await saveSettings({ name, textSize, reducedMotion }).catch(() => ({ ok: false as const, error: "We couldn't save your changes. Check your connection, then try again." }));
    setBusy(false);
    if (r.ok) {
      // Apply at once; the server applies the same values on every page from now on.
      document.documentElement.dataset.textSize = textSize;
      document.documentElement.dataset.reducedMotion = String(reducedMotion);
      setStatus({ kind: "ok", text: "Saved" });
      router.refresh();
    } else setStatus({ kind: "error", text: r.error, field: "field" in r ? r.field : undefined });
  }

  return (
    <form
      className="gl-settings"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        void save();
      }}
    >
      {!canSave ? <p className="ob-p ob-alert ob-alert--info">Your settings can&apos;t be saved because you&apos;re not signed in.</p> : null}

      <section className="ob-card ob-card--outlined gl-settings__group" aria-labelledby="set-name">
        <h2 id="set-name" className="ob-h t-card-title">
          Your name
        </h2>
        <div className="ob-field">
          <label className="ob-label" htmlFor="name">
            Name <span className="ob-req">(optional)</span>
          </label>
          <p className="ob-help" id="name-help">
            Shown as your initials in the top bar. Leave it blank to show none.
          </p>
          <input id="name" className="ob-input" autoComplete="name" maxLength={80} value={name} aria-describedby="name-help" aria-invalid={status?.field === "name" || undefined} onChange={(e) => setName(e.target.value)} />
        </div>
      </section>

      <section className="ob-card ob-card--outlined gl-settings__group" aria-labelledby="set-text">
        <h2 id="set-text" className="ob-h t-card-title">
          Text size
        </h2>
        <fieldset className="ob-fieldset">
          <legend className="sr-only">Text size</legend>
          {SIZES.map((s) => (
            <label key={s.value} className="ob-option gl-option-two-line">
              <input type="radio" name="textSize" value={s.value} checked={textSize === s.value} onChange={() => setTextSize(s.value)} />
              <span>
                {s.label} <span className="ob-secondary">· {s.hint}</span>
              </span>
            </label>
          ))}
        </fieldset>
      </section>

      <section className="ob-card ob-card--outlined gl-settings__group" aria-labelledby="set-motion">
        <h2 id="set-motion" className="ob-h t-card-title">
          Motion
        </h2>
        <div className="ob-check">
          <input type="checkbox" id="reduced-motion" checked={reducedMotion} aria-describedby="motion-help" onChange={(e) => setReducedMotion(e.target.checked)} />
          <label htmlFor="reduced-motion">Reduce motion</label>
        </div>
        <p className="ob-help" id="motion-help">
          Turns off animations, such as drawers sliding in. If your device is set to reduce motion, Genie Lab already follows it.
        </p>
      </section>

      <div className="ob-card__actions">
        <button type="submit" className="ob-btn ob-btn--primary ob-btn--large" disabled={!canSave || busy} aria-busy={busy || undefined}>
          {busy ? "Saving…" : "Save settings"}
        </button>
      </div>
      <p className="ob-p t-label-meta gl-save" role="status">
        {status?.kind === "ok" ? status.text : null}
      </p>
      <p className="ob-p ob-error-text gl-save--error" role="alert">
        {status?.kind === "error" ? status.text : null}
      </p>
    </form>
  );
}
