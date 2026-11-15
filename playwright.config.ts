import { defineConfig, devices } from "@playwright/test";

/** Main server: development dates, so Days 1 to 3 are open (start Mon 16 Nov 2026, today Wed 18 Nov 2026). */
export const PORT = 3100;
/** Second server: the real config/cohort.json, which has no start date yet. */
export const UNSCHEDULED_PORT = 3101;
/**
 * Third server for evidence, review and completion flows: same development dates, its own
 * throwaway data, and the clearly fake knowledge check fixture for Lesson 1.1.
 */
export const WORK_PORT = 3102;
/** Fourth server for Home, Welcome, Help, Toolkit and Settings: fresh data, today Wed 18 Nov 2026 (Day 3). */
export const HOME_PORT = 3103;

export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  reporter: [["list"]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "off",
    ...devices["Desktop Chrome"],
    viewport: { width: 1280, height: 900 },
  },
  // Tests run against a production build. Build first with `npm run build`.
  webServer: [
    {
      // Progress written by the tests goes to a throwaway folder, cleared on every run.
      command: `rm -rf .data/e2e && npx next start -p ${PORT}`,
      url: `http://localhost:${PORT}/home`,
      reuseExistingServer: false,
      timeout: 60_000,
      env: { GENIE_LAB_DEV: "1", GENIE_LAB_DEV_COHORT_START: "2026-11-16", GENIE_LAB_DEV_TODAY: "2026-11-18", GENIE_LAB_DATA_DIR: ".data/e2e" },
    },
    {
      command: `rm -rf .data/e2e-work && npx next start -p ${WORK_PORT}`,
      url: `http://localhost:${WORK_PORT}/home`,
      reuseExistingServer: false,
      timeout: 60_000,
      env: {
        GENIE_LAB_DEV: "1",
        GENIE_LAB_DEV_COHORT_START: "2026-11-16",
        GENIE_LAB_DEV_TODAY: "2026-11-18",
        GENIE_LAB_DATA_DIR: ".data/e2e-work",
        GENIE_LAB_KNOWLEDGE_CHECKS_DIR: "tests/fixtures/knowledge-checks",
      },
    },
    {
      command: `rm -rf .data/e2e-home && npx next start -p ${HOME_PORT}`,
      url: `http://localhost:${HOME_PORT}/home`,
      reuseExistingServer: false,
      timeout: 60_000,
      env: { GENIE_LAB_DEV: "1", GENIE_LAB_DEV_COHORT_START: "2026-11-16", GENIE_LAB_DEV_TODAY: "2026-11-18", GENIE_LAB_DATA_DIR: ".data/e2e-home" },
    },
    {
      command: `npx next start -p ${UNSCHEDULED_PORT}`,
      url: `http://localhost:${UNSCHEDULED_PORT}/home`,
      reuseExistingServer: false,
      timeout: 60_000,
    },
  ],
});
