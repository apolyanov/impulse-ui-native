import { rmSync } from "node:fs";
import type { Options } from "tsup";
import { defineConfig } from "tsup";

const commonOptions = {
  bundle: false,
  dts: true,
  format: ["esm"],
  outExtension: () => ({ js: ".js" }),
  target: "es2020",
} satisfies Options;

rmSync("dist", { force: true, recursive: true });

export default defineConfig([
  {
    ...commonOptions,
    entry: ["src/components/*.ts", "src/components/*.tsx"],
    outDir: "dist/components",
  },
  {
    ...commonOptions,
    entry: ["src/types/*.ts"],
    outDir: "dist/types",
  },
  {
    ...commonOptions,
    entry: ["src/icons/wrappers/*.tsx"],
    outDir: "dist/icons/wrappers",
    bundle: true,
    splitting: false,
    treeshake: true,
  },
]);
