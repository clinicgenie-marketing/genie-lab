import { PageHeader } from "@/components/PageHeader";
import { NotBuilt } from "@/components/NotBuilt";

export const metadata = { title: "Home" };

export default function HomePage() {
  return (
    <>
      <PageHeader title="Home" />
      <NotBuilt what="Needs your attention, the Today card, your 10 days and Waiting on your supervisor are added in Phase 5." />
    </>
  );
}
