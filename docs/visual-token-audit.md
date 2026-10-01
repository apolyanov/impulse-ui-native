# Visual token audit

Source audit completed on 2026-10-01 across all 27 packages: 11,241 source files,
including 10,592 generated SVG and icon wrapper files. Literal scanning covered
all sources; semantic review focused on the shared renderer, token factories,
and component consumers rather than individual SVG path geometry.

## Changes

- Switch disabled tracks used the same color as their thumbs in dark mode.
  Tracks now use `surface.primary`; unchecked thumbs use `text.secondary`.
  The loading indicator uses `text.primary` against the disabled thumb palette.
- Secondary outlined Badge and Tag foregrounds used the secondary background
  tint. They now use `secondary.contrast`, as does the secondary Spinner.
  Secondary soft Tags now consistently use the secondary fill/foreground pair.
- Flyout handles now use `text.tertiary` rather than a nearly identical surface.
- Slider active marks now contrast with active tracks; inactive marks use
  `text.primary`. Disabled active and inactive tracks remain distinct. Soft thumb
  highlights use `accent.contrast`, and value bubbles retain paired foregrounds.
- Secondary Progress tracks use `surface.primary` so the bright dark border
  palette does not weaken the indicator/track distinction.
- Disabled Carousel selected indicators use `text.secondary`, distinguishing
  them from unselected indicators using `text.disabled`.
- Normal Input placeholders now use `text.tertiary` rather than the disabled
  color; disabled placeholders retain `text.disabled`. Avatar offline indicators
  use the adaptive disabled text token rather than a fixed neutral step.
- The shared Icon renderer defaults to `text.primary` and passes the resolved
  color through both SVG `color` and `fill`. Explicit color and fill remain
  supported. Raw named/weight SVG components still take caller-supplied colors;
  use the shared renderer for automatic theme defaults.
- Typography now honors configured and explicit font families and variants.
  Code retains monospace; numeric typography uses tabular numbers. Style
  overrides retain final precedence.
- Light primary and secondary foregrounds use `#c92a3b`; warning uses
  `#a65300`; success uses `#526b00`. These deeper shades fix weak small-text
  pairs while retaining their color families. The light accent foreground uses
  the dark primary text neutral. Dark brand and feedback pairs remain unchanged.

The earlier primary/secondary Typography hierarchy, dark border visibility,
and disabled fill fixes remain in place.

## Package coverage

| Package           | Result                                                                                                                                                           |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accordion         | Checked border, separator, trigger, expanded, and disabled tokens; shared border fix retained.                                                                   |
| carousel          | Fixed disabled selected indicator distinction; checked counter and navigation colors.                                                                            |
| charts            | Checked axes, grid, labels, and series defaults; semantic UI colors retained. Series colors remain the intentional data palette.                                 |
| checkbox          | Checked selected/indeterminate glyphs, outlines, and disabled fills. Unchecked glyph colors are unused.                                                          |
| core              | No visual component tokens.                                                                                                                                      |
| data-state        | Checked loading, empty/error details, and action composition.                                                                                                    |
| datetime          | Checked calendar selection/ranges, outside-month text, time columns, and Flyout actions. Shared palette and Flyout fixes apply.                                  |
| echo              | No visual component tokens.                                                                                                                                      |
| endpoint          | No visual component tokens.                                                                                                                                      |
| flyout            | Fixed handle visibility; checked surfaces and overlay. Absolute black overlay is intentional.                                                                    |
| form-field        | Checked secondary, error, and disabled descriptions.                                                                                                             |
| icon              | Fixed shared color/fill default and override handling; scanned generated SVG sources.                                                                            |
| input             | Checked field, placeholder, validation, and counter tokens through Control.                                                                                      |
| overlay           | Lifecycle infrastructure; no independent visual colors.                                                                                                          |
| pagination        | Checked current, ordinary, disabled, and compact states; border fix retained.                                                                                    |
| portal            | Infrastructure; Storybook preview surfaces use semantic tokens.                                                                                                  |
| primitives        | Fixed Code/font variants, secondary Badge/Tag/Spinner, and Progress. Checked Avatar, Button, IconButton, Card, List, Divider, Control, and typography consumers. |
| radio             | Checked selected indicators and disabled fills. Unchecked indicators are not rendered.                                                                           |
| segmented-control | Checked root and selected/unselected/disabled variants.                                                                                                          |
| select            | Checked option/checkmark, field, multivalue, and Flyout composition.                                                                                             |
| skeleton          | Checked theme-derived bones and animation opacity; hidden text opacity is intentional.                                                                           |
| slider            | Fixed track/mark distinctions and thumb highlight pairing; checked labels and value bubbles.                                                                     |
| stepper           | Checked navigation token and selected/inactive opacity.                                                                                                          |
| storybook         | Semantic preview surfaces and descriptions retained; four explicit custom-color demonstrations remain intentional. Image captions use absolute white.            |
| switch            | Fixed unchecked and disabled thumbs, tracks, and loading color.                                                                                                  |
| theme             | Executed every factory in both schemes; checked text pairs, surfaces, borders, and component states.                                                             |
| toolkit           | Aggregation only; no independent visual implementation.                                                                                                          |

## Verification

Run `node scripts/check-theme-visuals.mjs` from the repository root. It executes
66 token factories across both schemes and checks 304 enabled text pairs,
palette foreground/background pairs, Switch states/loading, Slider marks and
value bubbles, Progress, Flyout handles, and dark border ordering. Mocked-hook
checks verify all 22 Typography presets, font/color override precedence, and
Icon defaults through light/dark/light switching.

Disabled indicators have separate lower contrast checks; hidden unchecked
glyphs are excluded. These are regression checks for the default tokens, not a
claim about custom palettes or opacity-composited native rendering.

All package typechecks and affected package builds were run. Native device
rendering, SVG geometry, font availability on host devices, and platform layout
are not verified by this source audit.
