import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    watch: false,
    coverage: {
      provider: "v8",
      enabled: true,
      all: true,
      thresholds: {
        100: true,
      },
      include: ["src/**"],
      exclude: ["src/__tests__/**"],
    },
  },
});
