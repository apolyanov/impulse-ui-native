# ImpulseUI Native design and application reference

Reviewed on **2026-10-25**, against the local repository with toolkit version **11.4.0**. This bundle describes the current source; it does not establish which version is published to npm. `snapshot.json` records the commit and input hashes.

## Bring this into another project

Copy this entire folder into the new project's documentation, or extract the accompanying ZIP. Start the design conversation with **[design-context.md](design-context.md)**. It is a self-contained brief for a designer or coding agent and includes the visual foundations, component catalog, styling rules, and constraints.

Load the detailed references as needed rather than placing every implementation appendix into the initial prompt:

| File                                                                          | Purpose                                                                                                   |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [design-context.md](design-context.md)                                        | Initial design context, available components, usage rules, and starter prompt                             |
| [package-index.md](package-index.md)                                          | All 37 application-facing packages and links to their detailed references                                 |
| `api/<package>.md`                                                            | Installation, package usage, exact exported source, prop types, defaults, compound APIs, and public hooks |
| [token-reference.md](token-reference.md)                                      | Every resolved primitive and component token, with light and dark values side by side                     |
| [tokens.light.json](tokens.light.json) / [tokens.dark.json](tokens.dark.json) | Complete nested default `AppTheme` objects for design tooling or programmatic inspection                  |
| [component-status.md](component-status.md)                                    | Existing maturity inventory and implementation/native-validation gaps                                     |
| [icon-catalog.md](icon-catalog.md)                                            | Available per-icon import paths                                                                           |
| [package-manifest.json](package-manifest.json)                                | Package versions, entrypoints, peer dependencies, and optional peer metadata                              |
| [snapshot.json](snapshot.json)                                                | Source provenance, counts, and SHA-256 input hashes                                                       |

The package appendices include source code to make exact contracts reviewable without the original repository. They are documentation, not a replacement for installing the packages. Relative imports in source snippets refer to their original package layout. External dependency type definitions, generated icon SVG bodies, Storybook examples, and unexported internals are not bundled.

## Refresh from the library repository

From the original monorepo root, with dependencies installed:

```sh
node scripts/export-design-system.mjs
pnpm exec prettier --write "docs/design-system/**/*.md" "docs/design-system/**/*.json" scripts/export-design-system.mjs
```

The exporter regenerates the package references, status snapshot, icon catalog, token table, JSON themes, and provenance. It preserves this README and `design-context.md`, which need editorial review when the library changes. Update the exporter's review date after that review. Recreate the ZIP after formatting if distributing an updated bundle.

## Verification and interpretation

The export executes the actual pure theme factories, checks representative values and matching light/dark token paths, and walks relative public re-exports for every toolkit dependency plus the icon package. It does not render components or certify their native behavior. Numeric tokens generally use React Native logical units, not physical device pixels; motion durations are milliseconds and other units follow the owning type.

The 2026-10-25 palette alignment verification passes the independent surface override and chart checks for both schemes. Chart checks follow the current stable series-ID palette selection, verify custom palettes, and preserve source coordinates. `node scripts/check-variant-tone-palettes.mjs` covers 796 palette comparisons across light, dark, and custom themes.

`node scripts/check-theme-visuals.mjs` still fails on the existing light filled Avatar foreground/background pair (**3.15:1**, below its **4.5:1** threshold). This is shared by other primary filled text components using the same brand pair; light primary outlined text also falls below 4.5:1 on standard surfaces. The check stops at the first failure, so Avatar is not the only affected component. Some nested text checks assume a standard surface rather than the inherited field background, and the checker also applies contrast thresholds to disabled marks; its complete diagnostic output requires contextual interpretation. Shared palette alignment preserves configured brand colors and does not certify default color contrast. Native bundle compilation does not replace visual testing on devices.

Some existing package README prose is older than its source. Prefer exact exported types and source for API questions, resolved JSON for token values, and `design-context.md` for the current native design scope. The copied roadmap preserves its original review date and follow-up items; it is a maturity guide, not proof that every documented follow-up has been exercised on devices.
