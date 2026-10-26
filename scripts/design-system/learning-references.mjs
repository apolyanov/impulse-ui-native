import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

function storyExports(source, file) {
  const ast = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const names = [];
  for (const statement of ast.statements) {
    if (
      !statement.modifiers?.some(
        (modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword,
      )
    )
      continue;
    if (ts.isVariableStatement(statement))
      for (const declaration of statement.declarationList.declarations)
        names.push(declaration.name.getText(ast));
  }
  return names;
}
function filesBelow(directory) {
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? filesBelow(path.join(directory, entry.name))
        : [path.join(directory, entry.name)],
    )
    .sort();
}
export function exportLearningReferences({ root, catalog, read, write }) {
  const recipes = JSON.parse(
    read("docs/design-system/source/recipe-index.json"),
  );
  const ids = new Set(recipes.map((recipe) => recipe.id));
  assert.equal(ids.size, recipes.length, "Recipe IDs must be unique");
  const galleryFile =
    "packages/storybook/src/stories/design-system/recipes.stories.tsx";
  const registry = read(
    "apps/impulse-ui-native/constants/design-recipes.constants.ts",
  );
  const registryIds = [...registry.matchAll(/id:\s*"([a-z-]+)"/g)]
    .map((match) => match[1])
    .sort();
  assert.deepEqual(
    registryIds,
    recipes
      .filter((recipe) => recipe.kind === "visual")
      .map((recipe) => recipe.id)
      .sort(),
    "Native recipe route coverage is stale",
  );
  read("apps/impulse-ui-native/components/storybook-theme-frame.tsx");
  read("apps/impulse-ui-native/components/storybook-theme-provider.tsx");
  read("apps/impulse-ui-native/package.json");
  read("apps/impulse-ui-native/app.json");
  read("apps/impulse-ui-native/plugins/with-compatible-scene-delegate.cjs");
  read("apps/impulse-ui-native/constants/recipe-fonts.constants.ts");
  const galleryExports = storyExports(read(galleryFile), galleryFile);
  for (const recipe of recipes) {
    assert(/^[a-z][a-z-]+$/.test(recipe.id), `Invalid recipe ID ${recipe.id}`);
    const source = read(`docs/design-system/${recipe.source}`);
    assert(
      new RegExp(`export (?:function|const) ${recipe.export}\\b`).test(source),
      `Missing recipe export ${recipe.export}`,
    );
    if (recipe.story)
      assert(
        galleryExports.includes(recipe.story),
        `Missing native story ${recipe.story}`,
      );
    for (const name of recipe.packages)
      assert(
        catalog.packages.some((pkg) => pkg.slug === name),
        `Recipe ${recipe.id}: unknown package ${name}`,
      );
    for (const capture of recipe.captures ?? []) {
      assert.equal(capture.platform, "ios");
      assert(["light", "dark"].includes(capture.params.scheme));
      assert.equal(capture.params.recipe, recipe.id);
      const bytes = fs.readFileSync(
        path.join(root, "docs/design-system", capture.file),
      );
      assert.equal(
        createHash("sha256").update(bytes).digest("hex"),
        capture.sha256,
        `Screenshot changed without review: ${capture.file}`,
      );
    }
    if (recipe.screenshot)
      assert(
        fs.existsSync(path.join(root, "docs/design-system", recipe.screenshot)),
        `Missing screenshot for ${recipe.id}`,
      );
  }
  for (const pkg of catalog.packages) {
    assert(
      recipes.some((recipe) => recipe.packages.includes(pkg.slug)),
      `${pkg.name} has no recipe`,
    );
    for (const id of pkg.guidance.recipes) {
      assert(ids.has(id), `Unknown recipe ${id}`);
      assert(
        recipes.find((recipe) => recipe.id === id).packages.includes(pkg.slug),
        `${pkg.slug} is missing from ${id}'s coverage`,
      );
    }
  }
  const recipeLines = [
    "# Composition recipes",
    "",
    "Every library package is covered. The TS/TSX sources below are typechecked against local public source entrypoints during export. Visual recipes run in native Storybook under **Design system/Recipes**; they need the app-shell providers and configured fonts. These checks do not certify native rendering or interaction.",
    "",
    "| Recipe | Packages | Native preview |",
    "| --- | --- | --- |",
    ...recipes.map(
      (recipe) =>
        `| [${recipe.title}](#${recipe.id}) | ${recipe.packages.map((name) => `\`${name}\``).join(", ")} | ${recipe.story ? `Design system/Recipes → ${recipe.story}` : recipe.kind} |`,
    ),
  ];
  for (const recipe of recipes) {
    recipeLines.push(
      "",
      `<a id="${recipe.id}"></a>`,
      `## ${recipe.title}`,
      "",
      `Source: [${recipe.source}](${recipe.source}).`,
      "",
      ...recipe.steps.map((step) => `- ${step}`),
      "",
    );
    recipeLines.push(`Verification: ${recipe.verification}.`, "");
    if (recipe.captures?.length) {
      recipeLines.push(
        "| Native frame | Scheme | Appearance | State |",
        "| --- | --- | --- | --- |",
      );
      for (const capture of recipe.captures) {
        const { scheme, variant, tone, state } = capture.params;
        recipeLines.push(
          `| [${capture.device}, ${capture.os}](${capture.file}) | ${scheme} | ${variant} / ${tone} | ${state} |`,
        );
      }
      recipeLines.push("");
    } else
      recipeLines.push(
        "Native screenshot: not captured. Do not treat this recipe's typecheck or story registration as visual approval.",
        "",
      );
    recipeLines.push(
      "```tsx",
      read(`docs/design-system/${recipe.source}`).trimEnd(),
      "```",
    );
  }
  write("recipes.md", recipeLines.join("\n"));
  write("recipe-index.json", JSON.stringify(recipes, null, 2));

  const storyRoot = path.join(root, "packages/storybook/src/stories");
  const stories = filesBelow(storyRoot)
    .filter((file) => /\.stories\.tsx?$/.test(file))
    .map((file) => {
      const relative = path.relative(root, file).replaceAll("\\", "/");
      const source = read(relative);
      return {
        source: relative,
        title:
          source.match(/title:\s*["']([^"']+)["']/)?.[1] ??
          "See source metadata",
        exports: storyExports(source, relative),
        directory: path.relative(storyRoot, file).split(path.sep)[0],
      };
    });
  const toKebab = (name) =>
    name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  const entries = [];
  for (const pkg of catalog.packages) {
    const ownStories = stories.filter(
      (story) =>
        story.directory === pkg.slug ||
        (pkg.slug === "primitives" &&
          pkg.components.some(
            (component) =>
              toKebab(component.name.split(".")[0]) === story.directory,
          )),
    );
    const relatedRecipes = recipes.filter((recipe) =>
      recipe.packages.includes(pkg.slug),
    );
    const visual =
      !["infrastructure", "aggregate", "authoring", "native-wrapper"].includes(
        pkg.guidance.kind,
      ) && pkg.slug !== "theme";
    const cases = [];
    if (visual)
      for (const component of pkg.components) {
        if (/Provider$/.test(component.name)) continue;
        const axes = ["variant", "tone", "size"].map((name) => ({
          name,
          choices: component.props.find((prop) => prop.name === name)
            ?.choices ?? [undefined],
        }));
        const availability = [{ name: "default", props: {} }];
        for (const flag of ["disabled", "loading"])
          if (component.props.some((prop) => prop.name === flag))
            availability.push({ name: flag, props: { [flag]: true } });
        if (
          component.props.some(
            (prop) => prop.name === "error" && /string/.test(prop.type),
          )
        )
          availability.push({
            name: "error",
            props: { error: "Validation message" },
          });
        const selection = [{ name: "default", props: {} }];
        if (component.props.some((prop) => prop.name === "checked")) {
          selection.push(
            { name: "checked", props: { checked: true } },
            { name: "unchecked", props: { checked: false } },
          );
          if (
            component.props
              .find((prop) => prop.name === "checked")
              .choices?.includes("indeterminate")
          )
            selection.push({
              name: "indeterminate",
              props: { checked: "indeterminate" },
            });
        }
        if (component.props.some((prop) => prop.name === "open"))
          selection.push({ name: "open", props: { open: true } });
        const states = selection.flatMap((selected) =>
          availability.map((available) => ({
            name:
              selected.name === "default"
                ? available.name
                : available.name === "default"
                  ? selected.name
                  : `${selected.name}-${available.name}`,
            props: { ...selected.props, ...available.props },
          })),
        );
        for (const scheme of ["light", "dark"])
          for (const variant of axes[0].choices)
            for (const tone of axes[1].choices)
              for (const size of axes[2].choices)
                for (const state of states) {
                  const props = Object.fromEntries(
                    Object.entries({
                      variant,
                      tone,
                      size,
                      ...state.props,
                    }).filter(([, value]) => value !== undefined),
                  );
                  cases.push({
                    id: [
                      pkg.slug,
                      component.name,
                      scheme,
                      variant,
                      tone,
                      size,
                      state.name,
                    ]
                      .filter(Boolean)
                      .join("/"),
                    component: component.name,
                    scheme,
                    props,
                    state: state.name,
                    captureStatus: "not-captured",
                  });
                }
      }
    entries.push({
      package: pkg.name,
      kind: visual ? "visual" : "setup-or-behavior",
      stories: ownStories,
      recipes: relatedRecipes.map((recipe) => recipe.id),
      recipeCaptures: relatedRecipes.flatMap((recipe) => recipe.captures ?? []),
      cases,
    });
  }
  write(
    "visual-matrix.json",
    JSON.stringify(
      {
        schemaVersion: 1,
        note: "Finite prop combinations are review cases, not automatically renderable snapshots. Required content/data and compound context must come from the owning story or recipe fixture. Selection/value combinations, custom numeric sizes, transitions, keyboard behavior and device layouts also require manual review. Not every case is captured.",
        packages: entries,
      },
      null,
      2,
    ),
  );
  write(
    "visual-reference.md",
    [
      "# Native visual reference and review matrix",
      "",
      "Use the exact Storybook title/export below to inspect the current native implementation. The comparison recipe exposes scheme, field variant, tone, disabled and error controls. Every finite declared variant/tone/size combination and supported disabled/loading/error state has a case in [visual-matrix.json](visual-matrix.json). These cases require valid content/context fixtures; do not render compound parts alone or assume selection states are exhausted by this matrix.",
      "",
      "**Capture status:** 34 inspected iOS recipe frames are linked in [recipes.md](recipes.md). See [native-verification.md](native-verification.md) for scope and limitations. Individual matrix cases remain unverified; contextual recipe images do not certify every component/state. Source/type checks and successful native bundles are not screenshots or device sign-off. Infrastructure packages have setup/behavior examples rather than fabricated visual variants.",
      "",
      "| Package | Review cases | Native stories | Recipes |",
      "| --- | --- | --- | --- |",
      ...entries.map(
        (entry) =>
          `| \`${entry.package}\` | ${entry.cases.length || "setup/behavior"} | ${entry.stories.map((story) => `[${story.title}](https://github.com/apolyanov/impulse-ui-native/blob/main/${story.source}) (${story.exports.join(", ")})`).join("; ") || "See recipe/setup"} | ${entry.recipes.map((id) => `[${id}](recipes.md#${id})`).join(", ")} |`,
      ),
      "",
      "## Capture workflow",
      "",
      "1. Start the native host (`pnpm --dir apps/impulse-ui-native storybook:ios` or `storybook:android`) after installing/configuring peers and fonts.",
      "2. Open Design system/Recipes, or the owning component story. Set scheme, appearance and state explicitly; supply valid data and parent context.",
      "3. Capture the settled native frame and inspect it. Include open flyouts, selected values, disabled/error states, long labels and font scaling in manual review.",
      "4. Store images under `docs/design-system/images/`; update `source/recipe-index.json` only after verifying the image matches that recipe. Record platform/device/state in the capture record; screenshots do not prove interactions.",
      "5. Run the exporter and `pnpm docs:check` to validate references and freshness.",
      "",
      "The native host also exposes `impulseuinative://design-system?recipe=field-appearances&scheme=dark&variant=filled&tone=primary&state=default` for deterministic recipe selection. `recipe` accepts a visual recipe ID from recipe-index.json; state accepts default/disabled/error for the comparison recipe. The route and Storybook share the same recipe sources and host font setup.",
      "",
      "For the local simulator, `xcrun simctl io booted screenshot <path>` captures the current frame. It does not select a story or certify that the right state is visible.",
    ].join("\n"),
  );
  return {
    recipes: recipes.length,
    visualCases: entries.reduce((sum, entry) => sum + entry.cases.length, 0),
  };
}
