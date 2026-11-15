/**
 * Sign-in sits behind this interface. Version 1 has no sign-in page; the hosting and
 * sign-in provider are not chosen yet, so only the local development adapter exists.
 */
export type Intern = {
  id: string;
  /** The intern's name, or null when it has not been set. Never invented. */
  name: string | null;
};

export interface AuthProvider {
  /** The signed-in intern, or null when nobody is signed in. */
  getCurrentIntern(): Promise<Intern | null>;
}

/**
 * Local development only. Active when GENIE_LAB_DEV=1. The name comes from
 * GENIE_LAB_DEV_NAME and stays null when that is unset.
 */
export class DevAuthProvider implements AuthProvider {
  async getCurrentIntern(): Promise<Intern | null> {
    if (process.env.GENIE_LAB_DEV !== "1") return null;
    const name = process.env.GENIE_LAB_DEV_NAME?.trim();
    return { id: "dev-intern", name: name ? name : null };
  }
}

export const auth: AuthProvider = new DevAuthProvider();

/** "Ada Lovelace" becomes "AL"; one word gives one letter; no name gives null. */
export function initials(name: string | null): string | null {
  if (!name) return null;
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return null;
  const first = parts[0]!.charAt(0);
  const last = parts.length > 1 ? parts[parts.length - 1]!.charAt(0) : "";
  return (first + last).toLocaleUpperCase("en-GB");
}
