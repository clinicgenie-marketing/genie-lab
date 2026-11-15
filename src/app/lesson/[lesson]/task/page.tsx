import { lessonMetadata, type LessonRouteProps } from "../lesson-page";
import { loadLesson } from "../load";
import { LessonUnavailable } from "../unavailable";
import { TaskPageClient } from "./TaskPageClient";

export const generateMetadata = lessonMetadata("Your task");

export default async function TaskPage({ params }: LessonRouteProps) {
  const data = await loadLesson((await params).lesson);
  if (!("canSave" in data)) return <LessonUnavailable access={data.access} />;
  const { access, canSave, progress } = data;
  const lesson = access.lesson;
  return (
    <>
      <p className="ob-p t-label-meta gl-eyebrow">
        Day {lesson.day} · Lesson {lesson.id}: {lesson.title}
      </p>
      <TaskPageClient
        lessonId={lesson.id}
        slug={lesson.slug}
        task={lesson.task}
        tickedSteps={progress?.tickedSteps ?? []}
        canSave={canSave}
        lastSection={progress?.lastSection ?? lesson.sections[lesson.sections.length - 1]!.number}
      />
    </>
  );
}
