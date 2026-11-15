import { PageHeader } from "@/components/PageHeader";
import { NotBuilt } from "@/components/NotBuilt";

export const metadata = { title: "Syllabus" };

export default function SyllabusPage() {
  return (
    <>
      <PageHeader title="Syllabus" />
      <NotBuilt what="The ten days and their lessons are added in Phase 2." />
    </>
  );
}
