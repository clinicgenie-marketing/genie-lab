import { Check, Circle, CircleCheck, CircleDashed, Clock, Hourglass, Lock, LockOpen, Minus, PenLine, type LucideIcon } from "lucide-react";
import type { DayAccess, LessonProgressStatus } from "@/lib/schedule";

/**
 * Three kinds of status, kept apart (docs/DECISIONS.md, decision 3). Each pairs an icon with
 * a word; colour only supports the word.
 *   Lesson progress  pill (`radius-pill`), round icon
 *   Review decision  tag (`radius-input`)
 *   Day access       outlined day chip
 */

const iconProps = { size: 20, "aria-hidden": true, focusable: false } as const;

function Badge({ className, icon: Icon, label }: { className: string; icon: LucideIcon; label: string }) {
  return (
    <span className={className}>
      <Icon {...iconProps} />
      {label}
    </span>
  );
}

const PROGRESS: Record<LessonProgressStatus, { label: string; icon: LucideIcon; variant: string }> = {
  locked: { label: "Locked", icon: Lock, variant: "" },
  not_started: { label: "Not started", icon: Circle, variant: "" },
  in_progress: { label: "In progress", icon: CircleDashed, variant: "ob-badge--progress" },
  complete: { label: "Complete", icon: CircleCheck, variant: "ob-badge--complete" },
};

export function ProgressBadge({ status }: { status: LessonProgressStatus }) {
  const p = PROGRESS[status];
  return <Badge className={`ob-badge gl-badge ${p.variant}`} icon={p.icon} label={p.label} />;
}

export type ReviewDecision = "not_submitted" | "awaiting_review" | "changes_requested" | "accepted";

const REVIEW: Record<ReviewDecision, { label: string; icon: LucideIcon; variant: string }> = {
  not_submitted: { label: "Not submitted", icon: Minus, variant: "" },
  awaiting_review: { label: "Awaiting review", icon: Hourglass, variant: "ob-badge--awaiting" },
  changes_requested: { label: "Changes requested", icon: PenLine, variant: "ob-badge--changes" },
  accepted: { label: "Accepted", icon: Check, variant: "ob-badge--accepted" },
};

export function ReviewTag({ decision }: { decision: ReviewDecision }) {
  const r = REVIEW[decision];
  return <Badge className={`ob-badge gl-badge gl-tag ${r.variant}`} icon={r.icon} label={r.label} />;
}

const DAY: Record<DayAccess, { label: string; icon: LucideIcon }> = {
  locked: { label: "Locked", icon: Lock },
  open: { label: "Open", icon: LockOpen },
  done: { label: "Done", icon: Check },
};

export function DayChip({ access }: { access: DayAccess }) {
  const d = DAY[access];
  return <Badge className={`ob-badge gl-badge gl-chip gl-chip--${access}`} icon={d.icon} label={d.label} />;
}

/** Availability, a separate dimension: a lesson whose file is missing. Never "Locked". */
export function ComingSoonBadge() {
  return <Badge className="ob-badge gl-badge ob-badge--soon" icon={Clock} label="Coming soon" />;
}
