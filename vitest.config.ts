import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  resolve: {
    alias: { "@/": r("./src/"), "@content/": r("./content/"), "@config/": r("./config/") },
  },
  test: { include: ["tests/unit/**/*.test.ts"], environment: "node" },
});
