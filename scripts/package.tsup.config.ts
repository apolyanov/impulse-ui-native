import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "!src/stories/**",
    "!src/**/*.spec.ts",
    "!src/**/*.spec.tsx",
    "!src/**/*.test.ts",
    "!src/**/*.test.tsx",
  ],
  bundle: false,
  clean: true,
  dts: true,
  format: ["esm"],
  outExtension: () => ({ js: ".js" }),
  sourcemap: true,
  target: "es2020",
});
