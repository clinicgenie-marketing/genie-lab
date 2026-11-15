import { platform } from "@/lib/content/curriculum";
import { PageHeader } from "@/components/PageHeader";
import { NotBuilt } from "@/components/NotBuilt";

export const metadata = { title: "Welcome" };

export default function WelcomePage() {
  return (
    <>
      <PageHeader eyebrow={platform.description} title={`Welcome to ${platform.name}`} />
      <NotBuilt what="The four-step welcome tour is added in Phase 5." />
    </>
  );
}
