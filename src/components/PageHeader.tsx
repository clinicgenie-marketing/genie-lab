import type { ReactNode } from "react";

export function PageHeader({ title, eyebrow, lead, titleStyle = "page-heading" }: { title: ReactNode; eyebrow?: ReactNode; lead?: ReactNode; titleStyle?: "page-heading" | "lesson-title" }) {
  return (
    <header className="gl-page-head">
      {eyebrow ? <p className="ob-p t-label-meta gl-eyebrow">{eyebrow}</p> : null}
      <h1 className={`ob-h t-${titleStyle}`}>{title}</h1>
      {lead ? <p className="ob-p ob-secondary t-dashboard-body">{lead}</p> : null}
    </header>
  );
}
