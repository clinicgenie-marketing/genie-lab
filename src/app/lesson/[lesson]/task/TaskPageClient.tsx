"use client";

import Link from "next/link";
import { useCallback } from "react";
import type { TaskPart } from "@/lib/content/model";
import { saveStep } from "@/lib/actions/progress";
import { TaskPanel } from "@/components/lesson/TaskPanel";
import { useTicks } from "@/components/lesson/useTicks";

export function TaskPageClient({ lessonId, slug, task, tickedSteps, canSave, lastSection }: { lessonId: string; slug: string; task: TaskPart; tickedSteps: string[]; canSave: boolean; lastSection: number }) {
  const ticks = useTicks(tickedSteps, useCallback((id: string, checked: boolean) => saveStep(lessonId, id, checked), [lessonId]));
  return (
    <div className="gl-taskpage">
      <TaskPanel task={task} slug={slug} ticked={ticks.ticked} onToggle={ticks.toggle} message={ticks.message} canSave={canSave} headingLevel={1} headingId="task-heading" />
      <p className="ob-p">
        <Link className="ob-btn ob-btn--tertiary" href={`/lesson/${slug}#section-${lastSection}`}>
          Back to the lesson
        </Link>
      </p>
    </div>
  );
}
