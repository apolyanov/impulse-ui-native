import { spawnSync } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "tsup";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const temporaryRoot = resolve(tmpdir());
const output = await mkdtemp(join(temporaryRoot, "impulse-charts-tests-"));

try {
  await build({
    config: false,
    entry: { models: join(root, "packages/charts/tests/models.test.ts") },
    outDir: output,
    bundle: true,
    dts: false,
    format: ["esm"],
    outExtension: () => ({ js: ".mjs" }),
    platform: "node",
    removeNodeProtocol: false,
    target: "node22",
    noExternal: [/.*/],
    silent: true,
    esbuildPlugins: [
      {
        name: "pure-theme-entry",
        setup(builder) {
          builder.onResolve({ filter: /^@impulse-ui-native\/theme$/ }, () => ({
            path: join(root, "packages/charts/tests/theme-entry.ts"),
          }));
        },
      },
    ],
  });

  const result = spawnSync(
    process.execPath,
    [
      "--test",
      join(output, "models.mjs"),
      join(root, "scripts/charts-gesture-tests.mjs"),
    ],
    { stdio: "inherit" },
  );

  if (result.error) {
    throw result.error;
  }

  process.exitCode = result.status ?? 1;
} finally {
  if (
    resolve(output).startsWith(temporaryRoot + "/") ||
    resolve(output).startsWith(temporaryRoot + "\\")
  ) {
    await rm(output, { recursive: true, force: true });
  }
}
