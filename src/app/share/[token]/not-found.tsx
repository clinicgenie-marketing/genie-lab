import { ShareShell } from "./shell";
import { PageHeader } from "@/components/PageHeader";

export const metadata = { title: "Shared submission not available", robots: { index: false, follow: false } };

export default function ShareNotFound() {
  return (
    <ShareShell>
      <PageHeader title="This shared submission is not available" lead="The link may have been turned off, or it may be incomplete. Ask the intern who sent it for a new link." />
    </ShareShell>
  );
}
