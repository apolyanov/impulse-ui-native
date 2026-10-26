import assert from "node:assert/strict";
import fs from "node:fs";

if (process.argv.includes("--help")) {
  console.log(`Usage: node scripts/query-design-system.mjs [options]
  --package <slug|package-name>  Restrict to an owning package
  --component <Public.Name>     Return one exact component contract
  --prop <name>                 Return one prop/default (requires --component)
  --search <text>               Search package purposes, features and exports
  --recipes                     Return recipes for matching packages
Without options, list all packages and their public components.`);
  process.exit(0);
}
const read = (name) =>
  JSON.parse(
    fs.readFileSync(
      new URL(`../docs/design-system/${name}`, import.meta.url),
      "utf8",
    ),
  );
const catalog = read("capabilities.json");
assert.equal(
  catalog.schemaVersion,
  1,
  "Unsupported catalog version; regenerate references",
);
const args = {};
for (let index = 2; index < process.argv.length; index++) {
  const flag = process.argv[index];
  assert(
    ["--package", "--component", "--prop", "--search", "--recipes"].includes(
      flag,
    ),
    `Unknown option ${flag}`,
  );
  if (flag === "--recipes") args.recipes = true;
  else {
    const value = process.argv[++index];
    assert(value && !value.startsWith("--"), `Missing value for ${flag}`);
    args[flag.slice(2)] = value;
  }
}
assert(!args.prop || args.component, "--prop requires --component");
assert(
  !(args.recipes && args.component),
  "Use --package with --recipes; --component selects a component contract",
);
let packages = catalog.packages;
if (args.package)
  packages = packages.filter(
    (pkg) => pkg.slug === args.package || pkg.name === args.package,
  );
if (args.search) {
  const term = args.search.toLowerCase();
  packages = packages.filter((pkg) =>
    JSON.stringify({
      name: pkg.name,
      guidance: pkg.guidance,
      exports: pkg.exports.map((item) => item.name),
    })
      .toLowerCase()
      .includes(term),
  );
}
assert(packages.length, "No matching package");
let result;
if (args.recipes) {
  result = read("recipe-index.json").filter((recipe) =>
    recipe.packages.some((name) => packages.some((pkg) => pkg.slug === name)),
  );
} else if (args.component) {
  result = packages.flatMap((pkg) =>
    pkg.components
      .filter((component) => component.name === args.component)
      .map((component) =>
        args.prop
          ? {
              package: pkg.name,
              component: component.name,
              prop: component.props.find((prop) => prop.name === args.prop),
              supportsStyleProp: component.styleProps.includes(args.prop),
              default: component.defaults[args.prop],
              guidance: component.guidance,
            }
          : { package: pkg.name, ...component },
      ),
  );
  assert(
    result.length,
    "No matching component; use its exact dotted public name",
  );
  if (args.prop)
    assert(
      result.some((item) => item.prop || item.supportsStyleProp),
      "Prop is absent from the compact catalog; consult the inherited native API before assuming support",
    );
} else if (args.package) result = packages;
else
  result = packages.map((pkg) => ({
    package: pkg.name,
    purpose: pkg.guidance.chooseWhen,
    capabilityGuide: pkg.capabilityReference,
    components: pkg.components.map((component) => component.name),
  }));
console.log(JSON.stringify(result, null, 2));
