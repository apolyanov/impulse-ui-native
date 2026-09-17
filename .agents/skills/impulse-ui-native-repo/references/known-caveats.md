# Known caveats and verification points

These are observations from the 2026-09-17 repository scan. Re-check the source
before acting because they may be fixed later.

## Theme component overrides

`ThemeProvider` declares a `components` prop and includes it in the `useMemo`
dependencies, but the reviewed implementation builds `components` solely with
`createComponentsTokens(theme)`. It does not apply `props.components` to the
returned theme. Do not document component-token overrides as working until this
path is verified or fixed.

## Toolkit and icons

`@impulse-ui-native/toolkit` does not re-export `@impulse-ui-native/icon`.
Named icons use per-icon package exports such as:

```ts
import { HeartIcon } from "@impulse-ui-native/icon/icons/heart";
```

Preserve this behavior unless a deliberate public API and bundle-size decision
changes it.

## Tests

No `*.test.*` or `*.spec.*` files were found outside dependencies during the
scan. Shared tsup config excludes such files in anticipation of tests, but that
is not evidence of a configured test runner. When adding behavior tests, first
establish and document the runner and native/web scope.

## Documentation surfaces

There are three different documentation-like surfaces:

- package README files for install and API basics;
- Storybook for interactive component documentation;
- the Next.js site for marketing, discovery, metadata, and links.

Avoid updating only the marketing site for a public component change. Keep the
package README and Storybook authoritative, then reflect catalog/status changes
in the site and `docs/component-roadmap.md` when appropriate.

## Storybook providers

The web preview installs the complete provider tree. Native Storybook relies on
the Expo application root for most providers and its own preview for backgrounds
and controls. A provider or decorator change may therefore need coordinated
updates in `.storybook`, `.rnstorybook`, and the Expo root layout.

## Generated and high-volume icon sources

The icon package contains thousands of weight-specific and wrapper files. Avoid
broad mechanical edits or exhaustive reads there unless the task specifically
targets icon generation or export correctness. Verify subpath exports and a
representative generated file instead.
