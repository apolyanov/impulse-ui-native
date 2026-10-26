import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const docs = path.join(root, "docs/design-system");
const json = (file) =>
  JSON.parse(fs.readFileSync(path.join(docs, file), "utf8"));
execFileSync(
  process.execPath,
  ["scripts/export-design-system.mjs", "--check"],
  { cwd: root, stdio: "inherit" },
);
execFileSync(process.execPath, ["scripts/check-native-reference-host.mjs"], {
  cwd: root,
  stdio: "inherit",
});
const schema = json("capabilities.schema.json");
// Dependency-free validation of the JSON Schema keywords used by this schema.
// The exported draft-07 schema is also usable by standard external validators.
function validate(value, rule, label = "catalog") {
  if (rule.$ref)
    return validate(
      value,
      rule.$ref
        .slice(2)
        .split("/")
        .reduce((part, key) => part[key], schema),
      label,
    );
  if ("const" in rule)
    assert.deepEqual(value, rule.const, `${label}: invalid constant`);
  if (rule.enum)
    assert(rule.enum.includes(value), `${label}: invalid enum value`);
  if (rule.type) {
    const actual =
      value === null
        ? "null"
        : Array.isArray(value)
          ? "array"
          : Number.isInteger(value)
            ? "integer"
            : typeof value;
    assert.equal(actual, rule.type, `${label}: wrong type`);
  }
  if (rule.minimum !== undefined)
    assert(value >= rule.minimum, `${label}: below minimum`);
  if (Array.isArray(value)) {
    if (rule.minItems)
      assert(value.length >= rule.minItems, `${label}: insufficient items`);
    if (rule.uniqueItems)
      assert.equal(
        new Set(value.map((item) => JSON.stringify(item))).size,
        value.length,
        `${label}: duplicate items`,
      );
    if (rule.items)
      value.forEach((item, index) =>
        validate(item, rule.items, `${label}[${index}]`),
      );
  }
  if (value && typeof value === "object" && !Array.isArray(value)) {
    for (const key of rule.required ?? [])
      assert(key in value, `${label}: missing ${key}`);
    for (const [key, child] of Object.entries(value)) {
      if (rule.properties?.[key])
        validate(child, rule.properties[key], `${label}.${key}`);
      else if (rule.additionalProperties === false)
        assert.fail(`${label}: unexpected ${key}`);
    }
  }
}
const catalog = json("capabilities.json");
validate(catalog, schema);
assert.throws(() => validate({ ...catalog, schemaVersion: 999 }, schema));
const packageNames = fs
  .readdirSync(path.join(root, "packages"))
  .filter((name) =>
    fs.existsSync(path.join(root, `packages/${name}/package.json`)),
  )
  .filter(
    (name) =>
      !JSON.parse(
        fs.readFileSync(path.join(root, `packages/${name}/package.json`)),
      ).private,
  )
  .sort();
assert.deepEqual(
  catalog.packages.map((pkg) => pkg.slug),
  packageNames,
  "Every public package must have a capability record",
);
for (const pkg of catalog.packages) {
  assert.equal(
    new Set(pkg.components.map((component) => component.name)).size,
    pkg.components.length,
  );
  for (const component of pkg.components) {
    assert(
      component.source.external ||
        fs.existsSync(path.join(root, component.source.file)),
      `Missing source for ${component.name}`,
    );
    assert.equal(
      new Set(component.props.map((prop) => prop.name)).size,
      component.props.length,
    );
  }
}
function filesBelow(directory) {
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? filesBelow(path.join(directory, entry.name))
        : [path.join(directory, entry.name)],
    );
}
let links = 0;
for (const file of filesBelow(docs).filter((name) => name.endsWith(".md"))) {
  const text = fs.readFileSync(file, "utf8").replace(/```[\s\S]*?```/g, "");
  for (const match of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const target = match[1].replace(/^<|>$/g, "").split("#")[0];
    if (!target || /^[a-z]+:/i.test(target)) continue;
    assert(
      fs.existsSync(
        path.resolve(path.dirname(file), decodeURIComponent(target)),
      ),
      `Broken link in ${path.relative(root, file)}: ${target}`,
    );
    links++;
  }
}
console.log(
  `Documentation checks passed: ${packageNames.length} packages, schema validation, public-source coverage, typechecked recipes, authored default/prop contracts, freshness, and ${links} local links.`,
);
