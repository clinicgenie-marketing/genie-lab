import { PageHeader } from "@/components/PageHeader";
import { NotBuilt } from "@/components/NotBuilt";

export const metadata = { title: "Settings" };

export default function SettingsPage() {
  return (
    <>
      <PageHeader title="Settings" />
      <NotBuilt what="Name, text size and reduced motion are added in Phase 5." />
    </>
  );
}
