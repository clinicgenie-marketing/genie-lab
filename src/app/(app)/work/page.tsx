import { PageHeader } from "@/components/PageHeader";
import { NotBuilt } from "@/components/NotBuilt";

export const metadata = { title: "My work" };

export default function WorkPage() {
  return (
    <>
      <PageHeader title="My work" />
      <NotBuilt what="Your submissions and the review outcomes you record are added in Phase 4." />
    </>
  );
}
