# Repository architecture

Snapshot reviewed: 2026-09-17.

## Workspace shape

This is a pnpm 10 and Turborepo monorepo. The root workspace includes
`apps/*`, `packages/*`, and `tooling/*`.

```text
apps/
  impulse-ui-native/  Expo host for native and web Storybook
  playground/         Expo Router integration playground
  site/               Next.js marketing and discovery site
packages/              Publishable @impulse-ui-native packages
tooling/               Shared ESLint, Prettier, TypeScript, and GitHub tooling
docs/                  Repository process and component-roadmap documents
scripts/               Shared build and publishing helpers
```

The dependency catalog in `pnpm-workspace.yaml` is the source of shared
third-party versions. At this snapshot, the primary stack is React 19.2, React
Native 0.86, Expo 57, TypeScript 6, Next.js 16, Reanimated 4, Storybook 10, and
pnpm 10. Treat those values as volatile and inspect the catalog before making
compatibility decisions.

## Package layers

### Foundation

- `core`: shared React hooks and utilities, including event callbacks,
  controllable state, open state, deep merge, memo helpers, and UUID helpers.
- `theme`: primitive and semantic tokens, light/dark themes, component-token
  factories, `ThemeProvider`, and styling hooks.
- `icon`: SVG renderer and a large set of icons with six weights. Consumers use
  per-icon subpaths such as `@impulse-ui-native/icon/icons/heart` for bundling.
- `primitives`: token-aware `View`, `SafeAreaView`, `Typography`, `Pressable`,
  `Button`, `IconButton`, `Tag`, and the compound `Control` foundation.

### Infrastructure

- `portal`: external-store portal registry, provider, portals, and hosts.
- `overlay`: typed registration and lifecycle store plus `OverlayHost`.
- `echo`: typed event singleton and React emitter/listener hooks.
- `endpoint`: Axios and TanStack Query factories for query, infinite-query,
  mutation, and imperative request use.

### Components

- `input`: themed native text input built from compound `Control` parts.
- `select`: single and multi-select controls rendered through Flyout; uses
  FlashList for options.
- `datetime`: date, date-range, datetime, datetime-range, and time pickers.
- `flyout`: top/bottom gesture-enabled sheet using overlay lifecycle,
  Reanimated, Gesture Handler, and safe-area context.
- `skeleton`: compound animated loading placeholders.
- `data-state`: loading, empty, error, and coordinated `DataView` states.
- `stepper`: controlled step flow and tabs navigation.
- `charts`: Skia-rendered line, multi-line, bar, multi-bar, pie, and multi-pie
  charts with D3 scale/shape helpers.

### Aggregation and authoring

- `toolkit`: re-exports most public packages for one-install consumption. It
  contains no component implementation.
- `storybook`: shared story helpers plus all component stories and
  documentation screens. Story source is excluded from its public build.

The toolkit does not re-export the icon package. Icons are intentionally
imported from the icon package's explicit subpaths.

## Dependency direction

Prefer this direction:

```text
core
  -> theme
  -> icon / primitives
  -> portal / overlay
  -> input / flyout / skeleton / stepper / charts / data-state
  -> select
  -> datetime
  -> toolkit
```

This is conceptual rather than a strict linear graph. Check the relevant
`package.json` before adding an import. Avoid cycles, and never import from the
toolkit inside a publishable implementation package.

## Public package contract

Most packages follow this contract:

- source entry at `src/index.ts`;
- ESM output under `dist` built without bundling by shared tsup config;
- declarations and source maps emitted;
- the `react-native` export condition points at source for most packages;
- `import` and `types` point at built output;
- `sideEffects: false`;
- public files include `dist`, `README.md`, and `LICENSE`;
- package-local build, typecheck, lint, and format scripts;
- workspace dependencies use `workspace:*` and shared externals use the pnpm
  catalog.

The icon package is exceptional: it exposes only `./components/icon`,
`./icons/*`, and `./types`, all from built output, to support per-icon imports.

## Application responsibilities

### Storybook host

`apps/impulse-ui-native` contains both Storybook modes:

- `.storybook/` uses React Native Web with Vite and discovers package stories;
- `.rnstorybook/` uses on-device React Native Storybook;
- the Expo root installs Gesture Handler, safe-area, theme, overlay, and portal
  providers/hosts required by complex components.

### Playground

`apps/playground` is an Expo Router app used for realistic integration and
manual exercising of package APIs. It currently emphasizes chart examples and
loads the full Montserrat family expected by theme typography.

### Site

`apps/site` is a Next.js and Tailwind marketing site. It derives the displayed
package version from `packages/toolkit/package.json` and owns SEO, structured
data, social images, robots, sitemap, manifest, and LLM-readable routes. It is
not the component documentation implementation; Storybook is.

Read `apps/site/AGENTS.md` and the installed versioned Next.js documentation
before editing site code. Read `apps/playground/AGENTS.md` before editing the
playground.

## Sources of truth

- Public exports: package `src/index.ts` files and `package.json` exports.
- Dependencies and supported installed versions: package manifests and
  `pnpm-workspace.yaml`.
- Visual tokens: `packages/theme/src/theme/tokens.theme.ts` and component token
  factories.
- Component status and proposed work: `docs/component-roadmap.md`.
- Public usage: package README files and Storybook documentation.
- Release policy: `.changeset/config.json` and `docs/versioning.mdx`.
