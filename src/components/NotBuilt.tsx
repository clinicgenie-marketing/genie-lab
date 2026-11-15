/** Development placeholder for a route whose content arrives in a later build phase. */
export function NotBuilt({ what }: { what: string }) {
  return (
    <section className="ob-card ob-card--outlined gl-notbuilt" aria-label="Not built yet">
      <p className="ob-p">
        <strong>Not built yet.</strong> {what}
      </p>
    </section>
  );
}
