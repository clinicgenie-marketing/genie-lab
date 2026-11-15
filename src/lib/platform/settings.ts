/**
 * Intern settings, behind an interface. Only the local development adapter exists.
 */
import { join } from "node:path";
import { z } from "zod";
import { dataDir, jsonFile, SAFE_ID } from "./json-file";

export const TEXT_SIZES = ["default", "large", "larger"] as const;
export type TextSize = (typeof TEXT_SIZES)[number];

export const SettingsSchema = z.object({
  /** The intern's name as they want it shown. Null means not set; never invented. */
  name: z.string().trim().min(1).max(80).nullable(),
  textSize: z.enum(TEXT_SIZES),
  /** On: animations off. Off: follow the device setting, which is always honoured. */
  reducedMotion: z.boolean(),
  /** When the intern finished or skipped the Welcome tour. Separate from lesson progress. */
  welcomeCompletedAt: z.string().nullable(),
});
export type Settings = z.infer<typeof SettingsSchema>;

export const defaultSettings = (): Settings => ({ name: null, textSize: "default", reducedMotion: false, welcomeCompletedAt: null });

export interface SettingsStore {
  get(internId: string): Promise<Settings>;
  update(internId: string, change: (s: Settings) => Settings): Promise<Settings>;
}

export class LocalJsonSettingsStore implements SettingsStore {
  constructor(private readonly dir = join(dataDir(), "settings")) {}
  private file(internId: string) {
    if (!SAFE_ID.test(internId)) throw new Error("Invalid intern ID");
    return jsonFile(join(this.dir, `${internId}.json`), SettingsSchema, defaultSettings);
  }
  get(internId: string) {
    return this.file(internId).read();
  }
  update(internId: string, change: (s: Settings) => Settings) {
    return this.file(internId).update((s) => {
      const next = change(s);
      return { next, result: next };
    });
  }
}

