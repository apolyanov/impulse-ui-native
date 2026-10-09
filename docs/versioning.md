# Versioning

This repo uses Changesets to manage package versions and changelogs.

The public `@impulse-ui-native/*` packages are versioned as one fixed group.
That keeps the component library easy to reason about: one release means one
version number across the publishable packages.

## Daily Workflow

After making a package change that should be released, run:

```bash
pnpm changeset
```

Pick the package or packages that changed, choose the bump type, and write a
short release note.

Use this guide for bump types:

| Bump    | Use For                                                     |
| ------- | ----------------------------------------------------------- |
| `patch` | Bug fixes, dependency metadata fixes, internal improvements |
| `minor` | New components, new props, new exported APIs                |
| `major` | Breaking changes to public APIs or behavior                 |

Commit the generated `.changeset/*.md` file with your code change.

## Version Packages

When you are ready to prepare a release, run:

```bash
pnpm version-packages
```

This consumes the pending changesets, bumps package versions, updates
changelogs, and updates internal dependency metadata where needed.

Commit the generated version changes:

```text
chore(release): version packages
```

## Publish

After the version commit is ready, publish with:

```bash
pnpm release
```

`pnpm release` builds the monorepo and then runs `changeset publish`.
The publish command uses `scripts/changeset-publish.mjs` to strip pnpm-only
environment config before npm runs, which avoids noisy npm warnings about
settings such as `catalog`, `catalogs`, and `node-linker`.

Before publishing, make sure npm auth is valid:

```bash
npm whoami
```

If that fails, log in again:

```bash
npm login
```

To check package packing without publishing, run a package dry run:

```bash
pnpm --filter @impulse-ui-native/core publish --dry-run --no-git-checks
```

## Common Examples

Dependency metadata fix:

```text
patch
fix(packages): correct dependency metadata
```

New component API:

```text
minor
feat(primitives): add icon button loading state
```

Breaking prop rename:

```text
major
refactor(input): rename errorMessage prop
```

## Notes

- Apps are private and ignored by Changesets.
- Tooling packages are private and ignored by Changesets.
- Use `pnpm changeset status` to preview pending release changes.
