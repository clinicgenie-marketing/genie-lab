import type { ReactNode } from "react";

/**
 * The design system's AppShell: `outer` backdrop, black `shell` frame holding the bar,
 * and the `canvas` interior. Content stays in normal page flow.
 */
export function AppFrame({ bar, children }: { bar: ReactNode; children: ReactNode }) {
  return (
    <div className="ob-outer gl-outer">
      <div className="ob-frame gl-frame">
        {bar}
        <main id="main" tabIndex={-1} className="ob-canvas gl-canvas">
          <div className="gl-content">{children}</div>
        </main>
      </div>
    </div>
  );
}
