import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import prettier from "prettier";
import ts from "typescript";

import { exportCapabilities } from "./design-system/capabilities.mjs";
import { exportLearningReferences } from "./design-system/learning-references.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "docs/design-system");
const cache = new Map();
const sources = new Map();
const reviewDate = "2026-10-26";
const generated = new Map();
const checkOnly = process.argv.includes("--check");
read("scripts/export-design-system.mjs");
read("scripts/design-system/capabilities.mjs");
read("scripts/design-system/learning-references.mjs");

read("pnpm-workspace.yaml");

function read(relativePath) {
  const content = fs.readFileSync(path.join(root, relativePath), "utf8");
  sources.set(relativePath, createHash("sha256").update(content).digest("hex"));

  return content;
}

function resolveSource(base) {
  const candidate = [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    path.join(base, "index.ts"),
  ].find(
    (filename) => fs.existsSync(filename) && fs.statSync(filename).isFile(),
  );
  assert(candidate, `Cannot resolve source: ${base}`);

  return path.relative(root, candidate).replaceAll("\\", "/");
}

// Run only the repository's pure token factories. No native renderer is used.
function loadSource(relativePath) {
  if (cache.has(relativePath)) {
    return cache.get(relativePath).exports;
  }

  const module = { exports: {} };
  cache.set(relativePath, module);
  const { outputText } = ts.transpileModule(read(relativePath), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  });

  vm.runInNewContext(
    outputText,
    {
      exports: module.exports,
      module,
      require(specifier) {
        assert(
          specifier.startsWith("."),
          `Unexpected runtime import: ${specifier}`,
        );

        return loadSource(
          resolveSource(
            path.resolve(root, path.dirname(relativePath), specifier),
          ),
        );
      },
    },
    { filename: relativePath },
  );

  return module.exports;
}

function write(filename, content) {
  generated.set(filename, content.endsWith("\n") ? content : `${content}\n`);
}

function flatten(value, prefix = "", result = new Map()) {
  if (value !== null && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      flatten(child, prefix ? `${prefix}.${key}` : key, result);
    }
  } else {
    result.set(prefix, value);
  }

  return result;
}

function walkExports(relativePath, result = new Map()) {
  if (result.has(relativePath)) {
    return result;
  }

  const content = read(relativePath);
  result.set(relativePath, content);
  const ast = ts.createSourceFile(
    relativePath,
    content,
    ts.ScriptTarget.Latest,
    true,
  );

  for (const statement of ast.statements) {
    if (ts.isExportDeclaration(statement) && statement.moduleSpecifier) {
      const specifier = statement.moduleSpecifier.text;

      if (specifier.startsWith(".")) {
        walkExports(
          resolveSource(
            path.resolve(root, path.dirname(relativePath), specifier),
          ),
          result,
        );
      }
    }
  }

  return result;
}

const toolkit = JSON.parse(read("packages/toolkit/package.json"));
const packageNames = fs
  .readdirSync(path.join(root, "packages"))
  .filter((name) =>
    fs.existsSync(path.join(root, "packages", name, "package.json")),
  )
  .filter((name) => !JSON.parse(read(`packages/${name}/package.json`)).private)
  .sort();
const toolkitExports = read("packages/toolkit/src/index.ts");
const { createComponentsTokens } = loadSource(
  "packages/theme/src/theme/tokens.theme.ts",
);
const themes = {};

for (const scheme of ["light", "dark"]) {
  const exported = loadSource(`packages/theme/src/theme/${scheme}.theme.ts`);
  const primitive = exported[scheme === "light" ? "LightTheme" : "DarkTheme"];
  themes[scheme] = {
    ...primitive,
    components: createComponentsTokens(primitive),
  };
  assert.equal(themes[scheme].components.button.sizes.medium.height, 40);
  assert.equal(themes[scheme].components.card.borderRadius, 16);
  write(`tokens.${scheme}.json`, JSON.stringify(themes[scheme], null, 2));
}

const light = flatten(themes.light);
const dark = flatten(themes.dark);
assert.deepEqual([...light.keys()].sort(), [...dark.keys()].sort());
const table = [
  "# Complete resolved theme tokens",
  "",
  "Generated from the local light/dark primitive themes and component factories. Values are React Native logical units unless a token represents milliseconds, opacity, a ratio, a string, or a spring parameter. Array indices appear as numeric path segments. These are default tokens, before app overrides and explicit component props.",
  "",
  "The JSON files preserve the nested structure; this table is a searchable flattened reference. Typography presets are in the primitives API reference, rather than `components`.",
  "",
  "| Token path | Light | Dark |",
  "| --- | --- | --- |",
  ...[...light].map(
    ([key, value]) =>
      `| \`${key}\` | \`${JSON.stringify(value).replaceAll("|", "\\|")}\` | \`${JSON.stringify(dark.get(key)).replaceAll("|", "\\|")}\` |`,
  ),
];
write("token-reference.md", table.join("\n"));

const inventory = [];

for (const name of packageNames) {
  const manifest = JSON.parse(read(`packages/${name}/package.json`));
  const entry = `packages/${name}/src/index.ts`;
  const graph = walkExports(entry);
  const sections = [
    `# ${manifest.name}`,
    "",
    `Local package version: ${manifest.version}. This is a repository snapshot, not a claim about the latest published package.`,
    "",
    "## Package guide",
    "",
    read(`packages/${name}/README.md`).replace(
      /\]\((\.\.?\/[^)]+)\)/g,
      (_, target) => {
        const resolved = path.posix.normalize(`packages/${name}/${target}`);
        const sibling = resolved.match(/^packages\/([^/]+)\/README\.md$/);

        if (resolved.startsWith("docs/design-system/"))
          return `](../${resolved.slice("docs/design-system/".length)})`;

        return sibling && packageNames.includes(sibling[1])
          ? `](${sibling[1]}.md)`
          : `](https://github.com/apolyanov/impulse-ui-native/blob/main/${resolved})`;
      },
    ),
    "",
    "## Public export and source reference",
    "",
    "The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.",
  ];

  for (const [filename, content] of [...graph].sort(([a], [b]) =>
    a.localeCompare(b),
  )) {
    sections.push(
      "",
      `### ${filename}`,
      "",
      "```tsx",
      content.trimEnd(),
      "```",
    );
  }

  write(`api/${name}.md`, sections.join("\n"));
  inventory.push({
    name: manifest.name,
    version: manifest.version,
    toolkitExport: toolkitExports.includes(`"@impulse-ui-native/${name}"`),
    description: manifest.description,
    peerDependencies: manifest.peerDependencies ?? {},
    peerDependenciesMeta: manifest.peerDependenciesMeta ?? {},
    exports: manifest.exports,
    publicSourceModules: graph.size,
    reference: `api/${name}.md`,
  });
}

// Keep the existing maturity definitions and native-validation caveats intact.
write("component-status.md", read("docs/component-roadmap.md"));
const iconFolder = path.join(root, "packages/icon/src/icons");
assert(fs.existsSync(iconFolder), "Icon catalog folder missing");
const icons = fs
  .readdirSync(iconFolder)
  .filter((name) => /\.tsx?$/.test(name))
  .sort();
write(
  "icon-catalog.md",
  [
    "# Named icon entrypoints",
    "",
    "Generated from local icon filenames. These subpaths are separate from toolkit exports. Consult `api/icon.md` for renderer types and weights. Use the source exports to verify a wrapper identifier; do not infer acronym capitalization from its filename.",
    "",
    ...icons.map(
      (name) =>
        `- \`@impulse-ui-native/icon/icons/${name.replace(/\.tsx?$/, "")}\``,
    ),
  ].join("\n"),
);

write("package-manifest.json", JSON.stringify(inventory, null, 2));
write(
  "package-index.md",
  [
    "# Package reference index",
    "",
    "Every public library package is included, including Storybook authoring helpers, toolkit and the separate icon package. Each reference contains the package README and the root's reachable source export graph. Toolkit exports are cross-package re-exports; follow the owning package reference for implementation.",
    "",
    "| Package | Version | Toolkit re-export | Public modules | Reference |",
    "| --- | --- | --- | --- | --- |",
    ...inventory.map(
      (item) =>
        `| \`${item.name}\` | ${item.version} | ${item.toolkitExport ? "Yes" : "No"} | ${item.publicSourceModules} | [${item.name.split("/")[1]}](${item.reference}) |`,
    ),
  ].join("\n"),
);

const guidance = JSON.parse(
  read("docs/design-system/source/package-guidance.json"),
);
const catalog = exportCapabilities({
  root,
  packageNames,
  read,
  write,
  guidance,
});
const learning = exportLearningReferences({ root, catalog, read, write });

write(
  "snapshot.json",
  JSON.stringify(
    {
      reviewedOn: reviewDate,
      gitCommit: execFileSync("git", ["rev-parse", "HEAD"], {
        cwd: root,
        encoding: "utf8",
      }).trim(),
      note: "Source hashes identify the actual local working-tree inputs. The review date belongs to the authored design guide; review that guide when regenerating on a later date.",
      toolkitVersion: toolkit.version,
      packages: inventory.length,
      componentTokenGroups: Object.keys(themes.light.components),
      tokenLeavesPerScheme: light.size,
      inputs: Object.fromEntries(
        [...sources].sort(([a], [b]) => a.localeCompare(b)),
      ),
    },
    null,
    2,
  ),
);

const formatting = await prettier.resolveConfig(
  path.join(root, "package.json"),
);
const stale = [];
for (const [filename, content] of generated) {
  const target = path.join(output, filename);
  const formatted = await prettier.format(content, {
    ...formatting,
    filepath: target,
  });
  if (checkOnly) {
    let existing = fs.existsSync(target) ? fs.readFileSync(target, "utf8") : "";
    let expected = formatted;
    if (filename === "snapshot.json" && existing) {
      // A commit advances HEAD without changing the source contract.
      const previous = JSON.parse(existing);
      const next = JSON.parse(expected);
      previous.gitCommit = next.gitCommit;
      existing = JSON.stringify(previous);
      expected = JSON.stringify(next);
    }
    if (existing !== expected) stale.push(filename);
  } else {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, formatted);
  }
}
for (const directory of ["api", "capabilities"]) {
  const folder = path.join(output, directory);
  if (!fs.existsSync(folder)) continue;
  for (const filename of fs
    .readdirSync(folder)
    .filter(
      (name) =>
        name.endsWith(".md") ||
        (directory === "capabilities" && name.endsWith(".json")),
    )) {
    const relative = `${directory}/${filename}`;
    if (generated.has(relative)) continue;
    if (checkOnly) stale.push(relative);
    else fs.unlinkSync(path.join(folder, filename));
  }
}
assert.equal(
  stale.length,
  0,
  `Stale generated references: ${stale.join(", ")}. Run node scripts/export-design-system.mjs.`,
);
console.log(
  `${checkOnly ? "Verified" : "Exported"} ${inventory.length} packages, ${catalog.packages.reduce((sum, pkg) => sum + pkg.components.length, 0)} component contracts ${learning.recipes} recipes, ${learning.visualCases} visual review cases and ${light.size} token leaves per scheme.`,
);
