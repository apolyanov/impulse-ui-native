import { spawnSync } from "node:child_process";

const pnpmOnlyConfigKeys = new Set([
  "_jsr-registry",
  "catalog",
  "catalogs",
  "ignored-built-dependencies",
  "link-workspace-packages",
  "manage-package-manager-versions",
  "node-linker",
  "npm-globalconfig",
  "only-built-dependencies",
  "overrides",
  "public-hoist-pattern",
  "verify-deps-before-run",
]);

const env = { ...process.env };

for (const key of Object.keys(env)) {
  const normalizedKey = key.toLowerCase();

  if (!normalizedKey.startsWith("npm_config_")) {
    continue;
  }

  const configKey = normalizedKey
    .slice("npm_config_".length)
    .replaceAll("_", "-");

  if (pnpmOnlyConfigKeys.has(configKey)) {
    delete env[key];
  }
}

const result = spawnSync("changeset", ["publish"], {
  env,
  shell: process.platform === "win32",
  stdio: "inherit",
});

process.exit(result.status ?? 1);
