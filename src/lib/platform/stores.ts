/**
 * The storage the app uses: Neon (Postgres) when DATABASE_URL is set, local JSON files in
 * development otherwise. Everything that reads or writes intern data imports from here.
 */
import { isDatabaseMode, pool } from "./db";
import { LocalFileStorage, type FileStorage } from "./files";
import { PgFileStorage, PgProgressStore, PgSettingsStore, PgWorkStore } from "./pg-stores";
import { LocalJsonProgressStore, type ProgressStore } from "./progress";
import { LocalJsonSettingsStore, type SettingsStore } from "./settings";
import { LocalJsonWorkStore, type WorkStore } from "./work";

type Stores = { progress: ProgressStore; work: WorkStore; settings: SettingsStore; files: FileStorage };

const g = globalThis as unknown as { __genieStores?: Stores };

function create(): Stores {
  if (isDatabaseMode()) {
    const db = pool();
    return { progress: new PgProgressStore(db), work: new PgWorkStore(db), settings: new PgSettingsStore(db), files: new PgFileStorage(db) };
  }
  return { progress: new LocalJsonProgressStore(), work: new LocalJsonWorkStore(), settings: new LocalJsonSettingsStore(), files: new LocalFileStorage() };
}

const stores = (g.__genieStores ??= create());

export const progressStore = stores.progress;
export const workStore = stores.work;
export const settingsStore = stores.settings;
export const fileStorage = stores.files;
