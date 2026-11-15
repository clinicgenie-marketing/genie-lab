import type { ReactNode } from "react";
import { platform } from "@/lib/content/curriculum";
import { auth, initials } from "@/lib/platform/auth";
import { AppFrame } from "@/components/AppFrame";
import { TopBar } from "@/components/TopBar";

export default async function MainLayout({ children }: { children: ReactNode }) {
  const intern = await auth.getCurrentIntern();
  const name = intern?.name ?? null;
  return <AppFrame bar={<TopBar brand={platform.name} name={name} initials={initials(name)} />}>{children}</AppFrame>;
}
