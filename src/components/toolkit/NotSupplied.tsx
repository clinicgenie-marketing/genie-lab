/** An honest empty state for content that has not been written or supplied yet. */
export function NotSupplied({ what, file }: { what: string; file: string }) {
  return (
    <section className="ob-soon" aria-label={`${what} not yet supplied`}>
      <span className="ob-badge ob-badge--soon">Not yet supplied</span>
      <p className="ob-p">{what} has not been supplied yet. It will appear here once it is added.</p>
      <p className="ob-p ob-secondary t-label-meta">
        For the platform team: it will live in <code className="gl-inline-code">{file}</code>.
      </p>
    </section>
  );
}
