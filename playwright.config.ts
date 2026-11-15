import { defineConfig, devices } from "@playwright/test";

const PORT = 3100;

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
  webServer: {
    // Tests run against a production build. Build first with `npm run build`.
    command: `npx next start -p ${PORT}`,
    url: `http://localhost:${PORT}/home`,
    reuseExistingServer: false,
    timeout: 60_000,
  },
});
