/** Who is signed in, and how they want things shown. Server-side only. */
import { auth, initials, type Intern } from "./platform/auth";
import { defaultSettings, settingsStore, type Settings } from "./platform/settings";

export type Identity = { intern: Intern | null; settings: Settings; name: string | null; initials: string | null };

export async function getIdentity(): Promise<Identity> {
  const intern = await auth.getCurrentIntern();
  const settings = intern ? await settingsStore.get(intern.id) : defaultSettings();
  // A name set in Settings wins; otherwise whatever sign-in provides; otherwise none.
  const name = settings.name ?? intern?.name ?? null;
  return { intern, settings, name, initials: initials(name) };
}
