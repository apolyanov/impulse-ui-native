import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = fileURLToPath(new URL("../", import.meta.url));
const packageRoot = path.join(root, "packages");
const packages = new Map(
  fs.readdirSync(packageRoot).map((directory) => {
    const manifest = JSON.parse(
      fs.readFileSync(
        path.join(packageRoot, directory, "package.json"),
        "utf8",
      ),
    );

    return [manifest.name, { directory, ...manifest }];
  }),
);

function sourceFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return sourceFiles(filename);
    }

    return /\.[cm]?[jt]sx?$/.test(entry.name) ? [filename] : [];
  });
}

function checkImport(pkg, filename, specifier) {
  if (specifier.startsWith(".") || specifier.startsWith("node:")) {
    return;
  }

  const segments = specifier.split("/");
  const name = specifier.startsWith("@")
    ? segments.slice(0, 2).join("/")
    : segments[0];
  const isStory = filename.includes(`${path.sep}stories${path.sep}`);
  const declared =
    name === pkg.name ||
    pkg.dependencies?.[name] ||
    pkg.peerDependencies?.[name] ||
    (isStory && pkg.devDependencies?.[name]);

  assert(declared, `${path.relative(root, filename)}: undeclared ${name}`);
}

function minimum(range) {
  const match = /^>=(\d+)(?:\.(\d+))?(?:\.(\d+))?$/.exec(range);
  assert(match, `Unsupported minimum range: ${range}`);

  return match.slice(1).map((part) => Number(part ?? 0));
}

function atLeast(range, required) {
  const actual = minimum(range);
  const expected = minimum(required);

  for (let index = 0; index < actual.length; index++) {
    if (actual[index] !== expected[index]) {
      return actual[index] > expected[index];
    }
  }

  return true;
}

function requireMinimum(pkg, peer, required) {
  const range = pkg.peerDependencies?.[peer];
  assert(range, `${pkg.name}: missing peer ${peer}`);
  assert(atLeast(range, required), `${pkg.name}: ${peer} must be ${required}`);
}

const visited = new Set();

function checkPackage(pkg, ancestors = new Set()) {
  assert(!ancestors.has(pkg.name), `Dependency cycle at ${pkg.name}`);

  if (visited.has(pkg.name)) {
    return;
  }

  const next = new Set([...ancestors, pkg.name]);

  for (const name of Object.keys(pkg.dependencies ?? {})) {
    const dependency = packages.get(name);

    if (!dependency) {
      assert(
        !name.startsWith("@impulse-ui-native/"),
        `Unknown package ${name}`,
      );
      continue;
    }

    checkPackage(dependency, next);

    for (const peer of ["react", "react-native"]) {
      requireMinimum(pkg, peer, dependency.peerDependencies[peer]);
    }
  }

  const peers = pkg.peerDependencies ?? {};

  if (peers["react-native-reanimated"] && peers["react-native-worklets"]) {
    requireMinimum(pkg, "react-native-reanimated", ">=4.1.0");
    requireMinimum(pkg, "react-native", ">=0.78");
  }

  if (peers["react-native-gesture-handler"] === ">=3.0.0") {
    requireMinimum(pkg, "react-native", ">=0.82");
  }

  if (peers["react-native-skia"]) {
    requireMinimum(pkg, "react", ">=19");
    requireMinimum(pkg, "react-native", ">=0.79");
    requireMinimum(pkg, "react-native-worklets", ">=0.7");
  }

  for (const filename of sourceFiles(
    path.join(packageRoot, pkg.directory, "src"),
  )) {
    const source = ts.createSourceFile(
      filename,
      fs.readFileSync(filename, "utf8"),
      ts.ScriptTarget.Latest,
      true,
    );

    function visit(node) {
      let specifier;

      if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) {
        specifier = node.moduleSpecifier;
      } else if (
        ts.isImportTypeNode(node) &&
        ts.isLiteralTypeNode(node.argument)
      ) {
        specifier = node.argument.literal;
      } else if (
        ts.isCallExpression(node) &&
        (node.expression.kind === ts.SyntaxKind.ImportKeyword ||
          (ts.isIdentifier(node.expression) &&
            node.expression.text === "require"))
      ) {
        specifier = node.arguments[0];
      }

      if (specifier && ts.isStringLiteral(specifier)) {
        checkImport(pkg, filename, specifier.text);
      }

      ts.forEachChild(node, visit);
    }

    visit(source);
  }

  visited.add(pkg.name);
}

for (const pkg of packages.values()) {
  checkPackage(pkg);
}

console.log(
  `Dependency declarations, cycles and native peer floors checked for ${visited.size} packages.`,
);
