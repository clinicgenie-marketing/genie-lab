import { UserRound } from "lucide-react";

/** Learner identity: initials on `lavender`, or a neutral icon while no name is set. */
export function Avatar({ initials, name }: { initials: string | null; name: string | null }) {
  return (
    <span className="gl-identity">
      <span className="ob-avatar" aria-hidden="true">
        {initials ?? <UserRound size={20} aria-hidden="true" focusable="false" />}
      </span>
      <span className="sr-only">{name ? `Signed in as ${name}` : "Your name is not set"}</span>
    </span>
  );
}
