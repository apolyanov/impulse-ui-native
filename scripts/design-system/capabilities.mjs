import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const nativeInputs = new Set([
  "children",
  "style",
  "value",
  "defaultValue",
  "onChange",
  "onChangeText",
  "onPress",
  "onLongPress",
  "onLayout",
  "placeholder",
  "secureTextEntry",
  "keyboardType",
  "maxLength",
  "multiline",
  "editable",
  "numberOfLines",
  "source",
  "data",
  "renderItem",
  "horizontal",
  "contentContainerStyle",
  "ref",
  "testID",
]);
const reactStatics = new Set([
  "type",
  "displayName",
  "$$typeof",
  "propTypes",
  "defaultProps",
  "compare",
]);

export function exportCapabilities({
  root,
  packageNames,
  read,
  write,
  guidance,
}) {
  const paths = Object.fromEntries(
    packageNames.map((name) => [
      `@impulse-ui-native/${name}`,
      [`packages/${name}/src/index.ts`],
    ]),
  );
  paths["@impulse-ui-native/icon/icons/*"] = ["packages/icon/src/icons/*"];
  const recipeNames = fs
    .readdirSync(path.join(root, "docs/design-system/recipes"))
    .filter((name) => /\.tsx?$/.test(name))
    .sort();
  const options = {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    jsx: ts.JsxEmit.ReactJSX,
    strict: true,
    noUncheckedIndexedAccess: true,
    skipLibCheck: true,
    esModuleInterop: true,
    noEmit: true,
    baseUrl: root,
    paths,
    ignoreDeprecations: "6.0",
  };
  const packageEntries = packageNames.map((name) =>
    path.join(root, `packages/${name}/src/index.ts`),
  );
  function assertTypes(program) {
    const diagnostics = ts.getPreEmitDiagnostics(program);
    assert.equal(
      diagnostics.length,
      0,
      ts.formatDiagnosticsWithColorAndContext(diagnostics, {
        getCanonicalFileName: (file) => file,
        getCurrentDirectory: () => root,
        getNewLine: () => "\n",
      }),
    );
  }
  function validateExamples() {
    // Keep application module augmentations out of the catalog's library API facts.
    const validation = ts.createProgram(
      [
        ...packageEntries,
        path.join(
          root,
          "packages/storybook/src/stories/design-system/recipes.stories.tsx",
        ),
        path.join(root, "apps/impulse-ui-native/app/design-system.tsx"),
        ...recipeNames.map((name) =>
          path.join(root, "docs/design-system/recipes", name),
        ),
      ],
      options,
    );
    assertTypes(validation);
    for (const file of validation.getSourceFiles()) {
      const name = path.relative(root, file.fileName).replaceAll("\\", "/");
      if (
        !name.includes("node_modules/") &&
        (name.startsWith("packages/") ||
          name.startsWith("docs/design-system/recipes/") ||
          name.startsWith("apps/impulse-ui-native/"))
      )
        read(name);
    }
  }
  validateExamples();
  const program = ts.createProgram(packageEntries, options);
  assertTypes(program);
  const checker = program.getTypeChecker();
  const relative = (file) => path.relative(root, file).replaceAll("\\", "/");
  const location = (node) => {
    if (!node) return undefined;
    const filename = node.getSourceFile().fileName.replaceAll("\\", "/");
    const external = filename.includes("/node_modules/");
    return {
      file: external
        ? `node_modules/${filename.split("/node_modules/").at(-1)}`
        : relative(filename),
      line:
        node.getSourceFile().getLineAndCharacterOfPosition(node.getStart())
          .line + 1,
      ...(external ? { external: true } : {}),
    };
  };
  const unalias = (symbol) =>
    symbol.flags & ts.SymbolFlags.Alias
      ? checker.getAliasedSymbol(symbol)
      : symbol;
  const moduleExports = (name) => {
    const file = program.getSourceFile(
      path.join(root, `packages/${name}/src/index.ts`),
    );
    return checker.getExportsOfModule(checker.getSymbolAtLocation(file));
  };
  const styleSymbol = moduleExports("theme").find(
    (symbol) => symbol.name === "StyleProps",
  );
  const styleKeys = new Set(
    checker
      .getDeclaredTypeOfSymbol(unalias(styleSymbol))
      .getProperties()
      .map((symbol) => symbol.name),
  );

  function implementation(node, visited = new Set()) {
    if (!node || visited.has(node)) return undefined;
    visited.add(node);
    if (
      ts.isFunctionExpression(node) ||
      ts.isArrowFunction(node) ||
      ts.isFunctionDeclaration(node)
    )
      return node;
    if (ts.isVariableDeclaration(node) || ts.isPropertyAssignment(node))
      return implementation(node.initializer, visited);
    if (
      ts.isPropertySignature(node) &&
      node.type &&
      ts.isTypeQueryNode(node.type)
    ) {
      return implementation(node.type.exprName, visited);
    }

    if (
      ts.isAsExpression(node) ||
      ts.isParenthesizedExpression(node) ||
      ts.isSatisfiesExpression(node)
    )
      return implementation(node.expression, visited);
    if (ts.isIdentifier(node)) {
      const symbol = checker.getSymbolAtLocation(node);
      return symbol
        ? implementation(unalias(symbol).valueDeclaration, visited)
        : undefined;
    }
    if (
      ts.isCallExpression(node) &&
      /(^|\.)(memo|forwardRef|assign)$/.test(node.expression.getText())
    )
      return implementation(node.arguments[0], visited);
    return undefined;
  }
  function defaults(fn) {
    if (!fn) return { values: {}, resolution: "not-statically-resolved" };
    const values = {};
    const readPattern = (pattern) => {
      if (!pattern || !ts.isObjectBindingPattern(pattern)) return;
      for (const binding of pattern.elements) {
        if (!binding.initializer || binding.dotDotDotToken) continue;
        const key = (binding.propertyName ?? binding.name).getText();
        const expression = binding.initializer.getText();
        const type = checker.getTypeAtLocation(binding.initializer);
        const literal =
          type.flags & ts.TypeFlags.StringLiteral
            ? type.value
            : type.flags & ts.TypeFlags.NumberLiteral
              ? type.value
              : expression === "true"
                ? true
                : expression === "false"
                  ? false
                  : expression === "null"
                    ? null
                    : undefined;
        values[key] = {
          expression,
          ...(literal !== undefined || expression === "null"
            ? { value: literal }
            : {}),
          source: location(binding),
        };
      }
    };
    for (const param of fn.parameters) readPattern(param.name);
    const props = fn.parameters
      .filter((param) => ts.isIdentifier(param.name))
      .map((param) => param.name.text);
    if (fn.body && ts.isBlock(fn.body))
      for (const statement of fn.body.statements) {
        if (!ts.isVariableStatement(statement)) continue;
        for (const declaration of statement.declarationList.declarations) {
          if (
            declaration.initializer &&
            props.includes(declaration.initializer.getText())
          )
            readPattern(declaration.name);
        }
      }
    return { values, resolution: "direct-source-only" };
  }
  function propInfo(symbol, enclosing) {
    const declaration =
      symbol.valueDeclaration ?? symbol.declarations?.[0] ?? enclosing;
    const type = checker.getTypeOfSymbolAtLocation(symbol, declaration);
    const members = type.isUnion() ? type.types : [type];
    const choices = members
      .filter((member) => member.flags & ts.TypeFlags.StringLiteral)
      .map((member) => member.value);
    const openChoices = members.some(
      (member) =>
        !(
          member.flags &
          (ts.TypeFlags.StringLiteral |
            ts.TypeFlags.Undefined |
            ts.TypeFlags.Null |
            ts.TypeFlags.Never)
        ),
    );
    const text = checker.typeToString(
      type,
      declaration,
      ts.TypeFormatFlags.NoTruncation |
        ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope,
    );
    return {
      name: symbol.name,
      required: !(symbol.flags & ts.SymbolFlags.Optional),
      type: text.length <= 1200 ? text : `${text.slice(0, 1200)}…`,
      ...(text.length > 1200 ? { typeAbbreviated: true } : {}),
      ...(choices.length
        ? {
            choices: [...new Set(choices)].sort(),
            ...(openChoices ? { openChoices: true } : {}),
          }
        : {}),
      source: location(declaration),
    };
  }
  function components(symbol, name, output, depth = 0) {
    symbol = unalias(symbol);
    const declaration = symbol.valueDeclaration ?? symbol.declarations?.[0];
    if (!declaration) return;
    const type = checker.getTypeOfSymbolAtLocation(symbol, declaration);
    const signatures = type.getCallSignatures();
    const signature =
      signatures.find((item) =>
        /(^|[.\W])(Element|ReactNode|ReactElement)([<\W]|$)/.test(
          checker.typeToString(item.getReturnType()),
        ),
      ) ??
      type
        .getConstructSignatures()
        .find((item) => item.getReturnType().getProperty("render"));
    if (signature && /^[A-Z]/.test(name.split(".").at(-1))) {
      const parameter = signature.getParameters()[0];
      const propsType =
        parameter &&
        checker.getNonNullableType(
          checker.getTypeOfSymbolAtLocation(
            parameter,
            parameter.valueDeclaration ?? declaration,
          ),
        );
      const properties = propsType?.getProperties() ?? [];
      const fn = implementation(declaration);
      const direct = defaults(fn);
      const rule = guidance.components[name] ?? {};
      const shared = properties
        .filter((prop) => styleKeys.has(prop.name))
        .map((prop) => prop.name)
        .sort();
      const props = properties
        .filter((prop) => {
          if (styleKeys.has(prop.name)) return false;
          const source = prop.valueDeclaration ?? prop.declarations?.[0];
          return (
            nativeInputs.has(prop.name) ||
            (source &&
              relative(source.getSourceFile().fileName).startsWith("packages/"))
          );
        })
        .map((prop) => propInfo(prop, declaration))
        .sort((a, b) => a.name.localeCompare(b.name));
      output.push({
        name,
        ...(signature.typeParameters?.length
          ? {
              typeParameters: signature.typeParameters.map((parameter) => ({
                name: parameter.symbol.name,
                constraint: checker.getBaseConstraintOfType(parameter)
                  ? checker.typeToString(
                      checker.getBaseConstraintOfType(parameter),
                    )
                  : "unknown",
              })),
            }
          : {}),
        ...(propsType?.isUnion()
          ? {
              propAlternatives: propsType.types.map((alternative) => ({
                required: alternative
                  .getProperties()
                  .filter(
                    (property) => !(property.flags & ts.SymbolFlags.Optional),
                  )
                  .map((property) => property.name),
                valueProps: alternative
                  .getProperties()
                  .filter((property) =>
                    [
                      "type",
                      "value",
                      "defaultValue",
                      "open",
                      "defaultOpen",
                      "checked",
                      "defaultChecked",
                    ].includes(property.name),
                  )
                  .map((property) => propInfo(property, declaration)),
              })),
            }
          : {}),
        source: location(fn ?? declaration),
        props,
        styleProps: shared,
        inheritedNativePropCount:
          properties.length - props.length - shared.length,
        defaults: direct.values,
        defaultResolution: direct.resolution,
        ...(Object.keys(rule).length ? { guidance: rule } : {}),
      });
    }
    if (depth >= 2) return;
    for (const part of type.getProperties()) {
      if (reactStatics.has(part.name) || !/^[A-Z][A-Za-z0-9]*$/.test(part.name))
        continue;
      components(part, `${name}.${part.name}`, output, depth + 1);
    }
  }
  const packages = [];
  for (const name of packageNames) {
    assert(guidance.packages[name], `Missing authored guidance for ${name}`);
    const manifest = JSON.parse(read(`packages/${name}/package.json`));
    const exports = moduleExports(name);
    const records = [];
    if (name !== "toolkit")
      for (const symbol of exports) components(symbol, symbol.name, records);
    const entry = {
      name: manifest.name,
      slug: name,
      version: manifest.version,
      guidance: guidance.packages[name],
      components: records.sort((a, b) => a.name.localeCompare(b.name)),
      exports: exports
        .map((item) => {
          const symbol = unalias(item);
          const declaration =
            symbol.valueDeclaration ?? symbol.declarations?.[0];
          const kind =
            symbol.flags & ts.SymbolFlags.Class
              ? "class"
              : symbol.flags & ts.SymbolFlags.Value
                ? /^use[A-Z]/.test(item.name)
                  ? "hook"
                  : "value"
                : "type";
          const type =
            declaration &&
            checker.getTypeOfSymbolAtLocation(symbol, declaration);
          const signatures =
            type?.getCallSignatures().map((signature) => {
              const text = checker.signatureToString(
                signature,
                declaration,
                ts.TypeFormatFlags.NoTruncation,
              );
              return {
                text: text.slice(0, 2400),
                abbreviated: text.length > 2400,
              };
            }) ?? [];
          const instanceType =
            kind === "class"
              ? type?.getConstructSignatures()[0]?.getReturnType()
              : item.name === "EchoInstance"
                ? type
                : undefined;
          const members = (instanceType?.getProperties() ?? [])
            .filter((member) => {
              const declaration =
                member.valueDeclaration ?? member.declarations?.[0];
              return (
                declaration &&
                !declaration.modifiers?.some(
                  (modifier) =>
                    modifier.kind === ts.SyntaxKind.PrivateKeyword ||
                    modifier.kind === ts.SyntaxKind.ProtectedKeyword,
                ) &&
                checker
                  .getTypeOfSymbolAtLocation(member, declaration)
                  .getCallSignatures().length
              );
            })
            .map((member) => {
              const declaration =
                member.valueDeclaration ?? member.declarations[0];
              return {
                name: member.name,
                source: location(declaration),
                signatures: checker
                  .getTypeOfSymbolAtLocation(member, declaration)
                  .getCallSignatures()
                  .map((signature) => {
                    const text = checker.signatureToString(
                      signature,
                      declaration,
                      ts.TypeFormatFlags.NoTruncation,
                    );
                    return {
                      text: text.slice(0, 2400),
                      abbreviated: text.length > 2400,
                    };
                  }),
              };
            });
          return {
            name: item.name,
            kind,
            source: location(declaration),
            ...(signatures.length ? { signatures } : {}),
            ...(members.length ? { members } : {}),
          };
        })
        .sort((a, b) => a.name.localeCompare(b.name)),
      dependencies: manifest.dependencies ?? {},
      peerDependencies: manifest.peerDependencies ?? {},
      peerDependenciesMeta: manifest.peerDependenciesMeta ?? {},
      reference: `api/${name}.md`,
      capabilityReference: `capabilities/${name}.md`,
    };
    packages.push(entry);
  }
  assert.deepEqual(Object.keys(guidance.packages).sort(), packageNames);
  for (const [name, rule] of Object.entries(guidance.components)) {
    const matches = packages.flatMap((pkg) =>
      pkg.components.filter((component) => component.name === name),
    );
    assert(matches.length, `Guidance references missing component ${name}`);
    for (const component of matches) {
      for (const prop of rule.requiredProps ?? [])
        assert(
          component.props.some((item) => item.name === prop) ||
            component.styleProps.includes(prop),
          `${name}: missing documented prop ${prop}`,
        );
      for (const [key, value] of Object.entries(rule.expectedDefaults ?? {}))
        assert.equal(
          component.defaults[key]?.value,
          value,
          `${name}.${key} default changed; review authored guidance`,
        );
      if (rule.delegatedDefaults) {
        const file = program.getSourceFile(
          path.join(root, rule.delegatedDefaults.source),
        );
        const target = file?.statements.find(
          (statement) =>
            ts.isFunctionDeclaration(statement) &&
            statement.name?.text === rule.delegatedDefaults.function,
        );
        assert(target, `${name}: missing defaults delegate`);
        const resolved = defaults(target);
        for (const [key, value] of Object.entries(
          rule.delegatedDefaults.expected,
        ))
          assert.equal(
            resolved.values[key]?.value,
            value,
            `${name}: delegated ${key} default changed`,
          );
      }
      if (rule.inheritedDefaults) {
        const parent = packages
          .flatMap((pkg) => pkg.components)
          .find((item) => item.name === rule.inheritedDefaults.from);
        assert(parent, `Missing inherited-default parent for ${name}`);
        for (const [key, value] of Object.entries(rule.inheritedDefaults))
          if (key !== "from")
            assert.equal(
              parent.defaults[key]?.value,
              value,
              `${name} inherits changed ${key} default`,
            );
      }
    }
  }
  // Hash the actual source graph, including imported implementations and recipes.
  for (const file of program.getSourceFiles()) {
    const name = relative(file.fileName);
    if (
      (name.startsWith("packages/") ||
        name.startsWith("docs/design-system/recipes/") ||
        name.startsWith("apps/impulse-ui-native/")) &&
      !name.includes("node_modules/")
    )
      read(name);
  }
  const catalog = {
    schemaVersion: 1,
    platform: ["ios", "android"],
    interpretation:
      "Generated props, finite choices, direct defaults and exports are source facts. Behavioral guidance is authored. Missing defaults are unresolved or inherited, never inferred as unsupported. Native props and external generic types remain in exact API references. Toolkit re-exports owners rather than duplicating their records.",
    packages,
  };
  write("capabilities.json", JSON.stringify(catalog, null, 2));
  for (const pkg of packages) {
    write(`capabilities/${pkg.slug}.json`, JSON.stringify(pkg, null, 2));
    const guide = pkg.guidance;
    const lines = [
      `# ${pkg.name}: capability guide`,
      "",
      guide.chooseWhen,
      "",
      "## Setup",
      "",
      ...guide.setup.map((text) => `- ${text}`),
      "",
      "## Capabilities",
      "",
      ...guide.features.map((text) => `- ${text}`),
      "",
      "## Boundaries and composition",
      "",
      ...guide.constraints.map((text) => `- ${text}`),
      "",
      `Exact contracts: [API reference](../${pkg.reference}). Machine facts: [package JSON](${pkg.slug}.json) or [full catalog](../capabilities.json).`,
      "",
      "## Recipes",
      "",
      ...guide.recipes.map((id) => `- [${id}](../recipes.md#${id})`),
      "",
      "## Public components",
      "",
    ];
    lines.push(
      "## Manifest peer requirements",
      "",
      "Optional refers to the package manifest; individual features may still require that peer at runtime.",
      "",
      "| Peer | Range | Optional |",
      "| --- | --- | --- |",
      ...Object.entries(pkg.peerDependencies).map(
        ([name, range]) =>
          `| \`${name}\` | \`${range}\` | ${pkg.peerDependenciesMeta[name]?.optional ? "Yes" : "No"} |`,
      ),
      "",
    );
    if (!pkg.components.length)
      lines.push(
        "This package has no directly owned visual components in its public root; use its exports below. Toolkit re-exports the owning packages.",
      );
    for (const component of pkg.components) {
      lines.push(
        `### ${component.name}`,
        "",
        `Source: \`${component.source.file}:${component.source.line}\`. Direct defaults: ${
          Object.entries(component.defaults)
            .map(([key, value]) => `\`${key}=${value.expression}\``)
            .join(", ") ||
          "not statically resolved here; consult the owning implementation or inherited defaults"
        }.`,
        "",
      );
      if (component.guidance)
        lines.push(
          ...Object.entries(component.guidance)
            .filter(
              ([key]) => !["requiredProps", "expectedDefaults"].includes(key),
            )
            .map(
              ([key, value]) =>
                `- **${key}**: ${typeof value === "string" ? value : JSON.stringify(value)}`,
            ),
          "",
        );
      if (component.typeParameters)
        lines.push(
          `Generic parameters: ${component.typeParameters.map((parameter) => `\`${parameter.name} extends ${parameter.constraint}\``).join(", ")}.`,
          "",
        );
      if (component.propAlternatives)
        lines.push(
          "Discriminated/value alternatives (do not mix incompatible modes):",
          "",
          ...component.propAlternatives.map(
            (alternative) =>
              `- Required: ${alternative.required.map((name) => `\`${name}\``).join(", ") || "none"}; ${alternative.valueProps.map((prop) => `\`${prop.name}: ${prop.type}\``).join("; ")}.`,
          ),
          "",
        );
      lines.push(
        "| Prop | Required | Type / choices |",
        "| --- | --- | --- |",
        ...component.props.map(
          (prop) =>
            `| \`${prop.name}\` | ${prop.required ? "Yes" : "No"} | \`${(!prop.openChoices && prop.choices?.length ? prop.choices.join(" / ") : prop.type).replaceAll("|", "\\|").replaceAll("\n", " ").replaceAll("`", "'")}\` |`,
        ),
        "",
        `Style props: ${component.styleProps.map((key) => `\`${key}\``).join(", ") || "none detected"}. Additional inherited native props: ${component.inheritedNativePropCount}. See exact API types for these inherited contracts.`,
        "",
      );
    }
    lines.push(
      "## Public exports",
      "",
      ...pkg.exports.flatMap((item) => [
        `- \`${item.name}\` (${item.kind})`,
        ...(item.signatures ?? []).map(
          (signature) =>
            `  - \`${signature.text.replaceAll("|", "\\|").replaceAll("`", "\'")}\`${signature.abbreviated ? " (abbreviated; see API reference)" : ""}`,
        ),
      ]),
    );
    for (const exported of pkg.exports.filter((item) => item.members?.length)) {
      lines.push(
        "",
        `### ${exported.name} methods`,
        "",
        ...exported.members.flatMap((member) => [
          `- \`${member.name}\``,
          ...member.signatures.map(
            (signature) =>
              `  - \`${signature.text.replaceAll("|", "\\|").replaceAll("`", "'")}\`${signature.abbreviated ? " (abbreviated; see exact API)" : ""}`,
          ),
        ]),
      );
    }
    write(pkg.capabilityReference, lines.join("\n"));
  }
  write(
    "component-chooser.md",
    [
      "# Choose a library package",
      "",
      "Read this index first; open only the relevant capability guide and recipe. All entries describe repository source, not a published-version guarantee.",
      "",
      "| Need | Package | Setup |",
      "| --- | --- | --- |",
      ...packages.map(
        (pkg) =>
          `| ${pkg.guidance.chooseWhen} | [${pkg.slug}](${pkg.capabilityReference}) | ${pkg.guidance.setup.join(" ")} |`,
      ),
    ].join("\n"),
  );
  return catalog;
}
