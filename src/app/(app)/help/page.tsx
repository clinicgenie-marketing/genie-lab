import { PageHeader } from "@/components/PageHeader";
import { NotBuilt } from "@/components/NotBuilt";

export const metadata = { title: "Help" };

export default function HelpPage() {
  return (
    <>
      <PageHeader title="Help" />
      <NotBuilt what="Help, and the Help drawer on every page, are added in Phase 5." />
    </>
  );
}
