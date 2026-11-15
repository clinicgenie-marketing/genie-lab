import { connection } from "next/server";
import { getHelpData } from "@/lib/help-data";
import { PageHeader } from "@/components/PageHeader";
import { HelpContent } from "@/components/help/HelpContent";

export const metadata = { title: "Help" };

/** The same help as the drawer, as a page with its own link. */
export default async function HelpPage() {
  await connection();
  return (
    <div className="gl-narrow">
      <PageHeader title="Help" lead="Find a prompt or term, check where you are, or get in touch with your supervisor." />
      <HelpContent data={await getHelpData()} headingLevel={2} />
    </div>
  );
}
