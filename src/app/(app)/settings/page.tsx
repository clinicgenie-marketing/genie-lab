import { connection } from "next/server";
import { getIdentity } from "@/lib/identity";
import { PageHeader } from "@/components/PageHeader";
import { SettingsForm } from "./SettingsForm";

export const metadata = { title: "Settings" };

export default async function SettingsPage() {
  await connection();
  const { intern, settings } = await getIdentity();
  return (
    <div className="gl-narrow">
      <PageHeader title="Settings" lead="Your name, text size and motion. They apply on every page." />
      <SettingsForm initial={settings} canSave={Boolean(intern)} />
    </div>
  );
}
