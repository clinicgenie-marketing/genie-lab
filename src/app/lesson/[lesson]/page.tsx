import { lessonMetadata, type LessonRouteProps } from "./lesson-page";
import { loadLesson } from "./load";
import { LessonUnavailable } from "./unavailable";
import { LessonReader } from "@/components/lesson/LessonReader";

export const generateMetadata = lessonMetadata();

export default async function LessonPage({ params }: LessonRouteProps) {
  const data = await loadLesson((await params).lesson);
  if (!("canSave" in data)) return <LessonUnavailable access={data.access} />;
  const { access, canSave, progress, prerequisites } = data;
  return (
    <LessonReader
      // A new key per lesson resets the reader when moving between lessons.
      key={access.lesson.id}
      lesson={access.lesson}
      lastSection={progress?.lastSection ?? null}
      tickedSteps={progress?.tickedSteps ?? []}
      canSave={canSave}
      prerequisites={prerequisites}
    />
  );
}
