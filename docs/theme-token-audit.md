# Package theme-token audit

Date: 2026-10-11

## Scope and method

Scanned the contents of all 11,598 non-ignored files returned by `rg --files
packages`, across 34 packages. This includes source, generated icon artwork,
Storybook, types, token factories, documentation, changelogs, manifests, licenses,
and build configuration. Ignored dependencies and build output are outside this
inventory.

The scan searched numeric literals, colors, style properties, font families and
weights, animation settings, and imports of static token scales. Potential visual
and motion findings were then reviewed in their consuming code and compared with
the theme types and provider. This is a full automated content scan with contextual
review of candidates, not a claim that every line was manually read.

The initial audit was read-only. The recommended runtime changes and Storybook
cleanup below have now been implemented. Optional customization decisions remain
as recorded; explicit prop demonstrations, content dimensions, and artwork remain
intentional. Storybook preview radii now use the existing theme scale instead of
custom 10/12-point literals.

## Recommended runtime changes

| Area                      | Evidence                                                                                                                                                                                                               | Recommendation                                                                                                                                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shared shadows            | `packages/theme/src/constants/style.constants.ts:92` defines `ShadowScale`; `packages/theme/src/utils/style.utils.ts:46` reads it directly. Radius, opacity, and Android elevation are outside `PrimitiveThemeTokens`. | Add a theme shadow scale and resolve semantic shadow props against the active theme. Keep the exported default scale for compatibility if necessary. This affects every component using semantic shadows. |
| Chart palette             | `packages/charts/src/constants/{line,bar,pie}.constants.ts` import static `ChartColorTokens`. The palette is exported from theme but is absent from `AppTheme`.                                                        | Expose a runtime chart palette and resolve defaults from the active theme. Preserve explicit chart/series color overrides.                                                                                |
| Chart layout              | `packages/charts/src/constants/chart-layout.constants.ts:4` uses 32 on every side. Cartesian chart bodies pass these defaults into layout.                                                                             | Add chart inset tokens, seeded from `theme.space.md` where appropriate. Preserve per-chart inset props.                                                                                                   |
| Chart strokes and spacing | `axis.constants.ts:1` uses width 1, tick length 4, label gap 4; `grid.constants.ts:1` uses width 1; `line.constants.ts:7` uses width 2; `pie.constants.ts:13` uses ring padding 2.                                     | Add chart axis, grid, line, and ring-spacing defaults to component tokens. Reuse primitive border/spacing scales in the factories where meaningful.                                                       |
| Chart bar spacing         | `packages/charts/src/constants/bar-chart.constants.ts:1` uses category padding 0.2 and series padding 0.1.                                                                                                             | Put default visual spacing ratios in chart tokens while preserving explicit options. These values control visual density rather than mathematical conversion.                                             |
| Slider mark labels        | `packages/slider/src/components/slider-labels.tsx:90` uses width 48 and marginStart -24.                                                                                                                               | Add `markLabelWidth`; derive the centering offset as negative half the width.                                                                                                                             |
| Slider thumb and bubble   | `packages/slider/src/components/slider-thumb.tsx:86` uses highlight width/height 4; line 94 uses bubble minWidth 40.                                                                                                   | Add `thumbHighlightSize` (potentially size-specific) and `valueBubbleMinWidth`.                                                                                                                           |
| Toast action typography   | `packages/toast/src/components/toast-action.tsx:76` uses fontWeight `"600"`.                                                                                                                                           | Resolve through theme typography; either retain the `Typography.Label` weight or expose `toast.actionFontWeight` derived from the semantic font-weight scale.                                             |
| Typography code font      | `packages/primitives/src/components/atoms/typography.tsx:197` uses `"monospace"`.                                                                                                                                      | Expose a code/monospace font-family token so a host can configure its code font globally. Preserve the existing per-instance font-family override.                                                        |
| Typography fallback       | `packages/primitives/src/hocs/create-preset.hoc.tsx:40` falls back to 400.                                                                                                                                             | Use `theme.fontWeight.regular`. Existing built-in presets normally provide weights, so this is a lower-impact fallback cleanup.                                                                           |
| Modal motion              | `packages/modal/src/constants/modal.constants.ts:1` uses enter 180 ms and exit 150 ms.                                                                                                                                 | Add modal motion tokens and consume them in the lifecycle hook.                                                                                                                                           |
| Toast motion              | `packages/toast/src/constants/toast.constants.ts:2` uses enter 180 ms, exit 150 ms, stack 220 ms.                                                                                                                      | Add toast motion tokens. The separate 4000 ms auto-dismiss duration is behavioral and can remain a prop/default.                                                                                          |
| Flyout motion             | `packages/flyout/src/constants/flyout.constants.ts:4` uses damping 50, stiffness 300, mass 1, and exit duration 150 ms.                                                                                                | Add flyout spring/exit tokens. Similar component motion is already tokenized for Accordion, Switch, Skeleton, Progress, and DataState.                                                                    |

Suggested implementation order: shared shadows and chart theme support, Slider,
typography, then motion. Adding theme fields requires corresponding type,
factory/provider, consumer, and documentation updates. Chart geometry helpers
also need the resolved defaults passed through; changing only rendering would
leave stroke insets inconsistent.

## Optional customization decisions

These are fixed choices, but turning them into tokens depends on the intended
customization surface.

| Area                        | Evidence                                                                                                                 | Assessment                                                                                                                                                                                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Circular indeterminate arc  | `packages/progress/src/components/circular-indeterminate-indicator.tsx:26` uses 0.25 painted / 0.75 empty circumference. | Candidate `indeterminateCircularArcRatio`, analogous to the existing linear width token. Rotation by 360 degrees is geometry and should stay in code.                                                                                       |
| Duotone icon opacity        | Generated files under `packages/icon/src/icons/duotone` repeatedly use opacity 0.2.                                      | Candidate global duotone opacity if icon appearance is meant to be theme-configurable. Implement through the icon generation/variant pipeline, rather than manually editing thousands of SVG files. SVG paths and viewBoxes remain artwork. |
| Tooltip border              | `packages/popover/src/components/tooltip.tsx:75` forces borderWidth 0. Tooltip tokens have no border fields.             | Reasonable intentional borderless default; add tooltip border tokens only if bordered tooltips are supported.                                                                                                                               |
| Component shadow selection  | Slider thumb and Tooltip choose `shadow="sm"`.                                                                           | Already a semantic shadow prop. First make the underlying scale configurable; separate component shadow-level tokens are optional.                                                                                                          |
| Flyout gesture thresholds   | `packages/flyout/src/hooks/use-flyout-lifecycle.hook.ts:128` uses half-height displacement and velocity 1500.            | Interaction configuration rather than visual theme values; keep in behavior constants/props unless gesture tuning is explicitly part of the theme.                                                                                          |
| Tooltip dismissal           | `packages/popover/src/constants/popover.constants.ts:4` uses 3000 ms.                                                    | Behavioral default with a duration prop, similar to Toast auto-dismiss. No mandatory visual token migration.                                                                                                                                |
| Carousel aspect ratio       | `packages/carousel/src/constants/carousel.constants.ts:1` uses 16/9.                                                     | Content-layout default with aspectRatio overrides; not a required theme token.                                                                                                                                                              |
| Chart zero/default geometry | Bar radius 0, pie corner radius 0, pie pad angle 0, pie stroke width 0, and full opacity 1.                              | Can join chart tokens if all chart appearance defaults should be globally customizable. Do not tokenize numeric domains, angle conversions, or tick-count algorithms merely because they contain numbers.                                   |

## Storybook cleanup

Repeated preview styling should use existing theme scales or shared preview
styles. Dedicated library component tokens are unnecessary for story layout.

| Files under `packages/storybook/src/stories/`                                                         | Candidates                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pressable/pressable.examples.tsx`                                                                    | Static base padding 16/12, border 1, radius 12, minHeight 48. Theme the shared preview base; the explicit pressed scale 0.98 is an interaction example.                                                                                           |
| `view/view.examples.tsx`                                                                              | PreviewBox/PreviewItem and repeated wrappers use padding 16/12/8, gaps 8, radii 12/10/16, borders 1. Theme the common wrappers; preserve deliberate numeric style-prop demonstrations. Radii 10/12 do not have exact primitive-scale equivalents. |
| `portal/portal.examples.tsx`                                                                          | Padding 12/8, border 1, radius 10/12, and preview minHeight 64. Prefer shared preview tokens/styles for decoration.                                                                                                                               |
| `overlay/overlay.examples.tsx`, `flyout/flyout-preview.tsx`                                           | Gap 12 and bottom padding 16. Use spacing tokens.                                                                                                                                                                                                 |
| `stepper/stepper.examples.tsx`                                                                        | Repeated gap 12/16. Use spacing tokens.                                                                                                                                                                                                           |
| `toast/toast-preview.tsx`, `modal/registered-modal-preview.tsx`, `modal/registered-modal-content.tsx` | Gaps 8/12. Use spacing tokens.                                                                                                                                                                                                                    |
| `tabs/tabs-panel.example.tsx`                                                                         | Border width 1 while neighboring styles already use the theme. Use `borderSize.sm`.                                                                                                                                                               |
| `data-view/data-view.examples.tsx`, `skeleton/skeleton.examples.tsx`                                  | Repeated gap 8/12/16 and bone height/radius 12/6. Theme the surrounding composition; arbitrary bone sizes are valid example content.                                                                                                              |
| `icon/icon.examples.tsx`                                                                              | Gap 16 and static purple on examples describing the renderer/visual weights. Prefer theme primary color and spacing here; 28px raw icons can remain a demonstration of explicit dimensions.                                                       |
| `popover/popover-preview.tsx`, `popover/tooltip-preview.tsx`, `popover/popover-placement-preview.tsx` | Fixed raw icon sizes and trigger height 40. Prefer semantic icon sizing/control tokens where the intent is standard UI. Fixed preview bounds and placement-test dimensions can remain.                                                            |

Other fixed example dimensions (chart height 240, card/media widths and heights,
pagination width 304, tabs maxWidth 320, segmented-control width 240, and preview
maxWidths) define the demonstration viewport/content. They do not automatically
need library theme tokens.

Progress, Divider, and Spinner custom-color examples deliberately demonstrate
explicit color props. Keep their literal colors. Documentation snippets showing
theme overrides or custom chart colors likewise are intentional.

## Values that already belong where they are

- Primitive palettes/scales and component token-factory defaults are the source
  of token values. Literal heights, sizes, colors, opacity, durations, z-indices,
  and ratios there are already customizable through the provider when exposed
  in the theme contract. The static shadow scale and chart palette above are
  exceptions because they are outside that contract.
- SVG viewBoxes, path coordinates, transforms, and stroke geometry encode icon
  artwork. Shared Icon size/color resolution already uses the active theme.
- Flex values, zero positioning/reset styles, `100%` dimensions, centering
  calculations, range normalization, degree/radian conversions, calendar/time
  boundaries, and tabular-number font-feature settings are structural/domain
  values.
- Virtualized-list batching/window sizes, scroll throttle 16, anchor measurement
  interval 100, and carousel idle delay 150 are runtime/performance settings.
- Documentation, changelog history, dependency versions, compiler/build settings,
  and licenses are not runtime visual styles.

## Package coverage

“No additional finding” means this scan identified no additional theme-token gap,
not that the package contains no literals.

| Package           | Files scanned | Result                                                              |
| ----------------- | ------------: | ------------------------------------------------------------------- |
| accordion         |            31 | No additional finding; motion already tokenized                     |
| card              |            18 | No additional finding                                               |
| carousel          |            23 | Optional aspect ratio; runtime/performance constants retained       |
| charts            |            91 | Palette, insets, strokes, spacing, and optional appearance defaults |
| checkbox          |            12 | No additional finding                                               |
| core              |            22 | Domain/runtime values                                               |
| data-state        |            17 | No additional finding; transition already tokenized                 |
| datetime          |            36 | Calendar/time and virtualization values retained                    |
| echo              |            14 | No visual token finding                                             |
| endpoint          |            21 | No visual token finding                                             |
| flyout            |            20 | Motion; gesture thresholds classified separately                    |
| form-field        |            12 | No additional finding                                               |
| icon              |         10603 | Artwork retained; optional duotone opacity                          |
| input             |            18 | Row defaults/layout normalization retained                          |
| list              |            19 | No additional finding                                               |
| modal             |            26 | Motion                                                              |
| overlay           |            25 | No visual token finding                                             |
| pagination        |            16 | Page/window algorithms retained                                     |
| popover           |            27 | Optional tooltip border; dismissal/measurement defaults retained    |
| portal            |            25 | No visual token finding                                             |
| primitives        |            54 | Code font and typography weight fallback                            |
| progress          |            20 | Optional indeterminate circular arc ratio                           |
| radio             |            12 | No additional finding                                               |
| segmented-control |            19 | No additional finding                                               |
| select            |            22 | Virtualization values retained                                      |
| skeleton          |            31 | Placeholder counts retained; motion already tokenized               |
| slider            |            25 | Mark label, highlight, and bubble dimensions                        |
| stepper           |            14 | No additional finding                                               |
| storybook         |           147 | Shared preview styling cleanup; intentional examples retained       |
| switch            |            16 | No additional finding; motion already tokenized                     |
| tabs              |            13 | No additional finding                                               |
| theme             |           117 | Static shadow scale; chart palette outside runtime theme            |
| toast             |            25 | Action weight and motion                                            |
| toolkit           |             7 | Aggregation/documentation only                                      |

## Implementation verification

The recommended changes are implemented, including a core merge fix that keeps
chart-palette overrides as arrays. Runtime defaults are preserved; shared
Storybook preview corners now use the existing radius scale. Optional candidates
remain unchanged.

- All 34 package typechecks passed.
- Builds passed for core, theme, primitives, charts, slider, modal, toast, flyout,
  storybook, and toolkit.
- `node scripts/check-theme-token-overrides.mjs` passed for light and dark themes.
  It exercises the real provider merge, token factories, chart geometry and
  explicit overrides, with stubs for React hook boundaries and native Platform.
- Slider lint passed. The other nine checked packages have no ESLint flat config,
  so their existing lint commands could not run. No configs were added.
- The existing `check-theme-visuals.mjs` check fails on Light Avatar filled contrast
  (3.15:1 against a 4.5:1 threshold). Running against the theme source from `HEAD`
  reproduced the same failure; it is outside this token-customization change.
- Native iOS/Android rendering was not exercised in this environment.
