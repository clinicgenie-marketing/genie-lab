import type { ReactNode } from "react";
import { platform } from "@/lib/content/curriculum";
import { getIdentity, requireIntern } from "@/lib/identity";
import { getHelpData } from "@/lib/help-data";
import { HelpProvider } from "@/components/help/HelpContext";
import { AppFrame } from "@/components/AppFrame";
import { TopBar } from "@/components/TopBar";

export default async function MainLayout({ children }: { children: ReactNode }) {
  await requireIntern();
  const [{ name, initials }, help] = await Promise.all([getIdentity(), getHelpData()]);
  return (
    <HelpProvider data={help}>
      <AppFrame bar={<TopBar brand={platform.name} name={name} initials={initials} />}>{children}</AppFrame>
    </HelpProvider>
  );
}
