# Package color audit

Scanned `packages` on 2026-10-01 for hex, RGB/HSL, named color literals,
fixed light-theme imports, and uses of absolute white/black tokens.

## Theme implementation

`DarkTheme` now uses the exported `DarkColors` palette. Its surfaces, text,
borders, brand colors, feedback pairs, and overlay have dark defaults.
Both palettes share the unchanged `NeutralColorTokens` scale. Component factories use semantic surface, border, and text tokens for adaptive fills, tracks, skeletons, and muted foregrounds instead of relying on fixed neutral steps.
`white` and `black` remain absolute colors for shadows and image overlays.

The neutral badge uses `text.secondary` for its fill, `text.inverse` for its foreground, and `surface.primary` for its soft background.

## Remaining literals outside theme tokens

Paths below are relative to `packages/storybook/src/stories/`.

| File                             | Finding                                                         |
| -------------------------------- | --------------------------------------------------------------- |
| `divider/divider.examples.tsx`   | Explicit purple custom-color demonstration.                     |
| `spinner/spinner.examples.tsx`   | Explicit purple custom-color demonstration.                     |
| `progress/progress.examples.tsx` | Explicit purple indicator and track custom-color demonstration. |
| `icon/icon.examples.tsx`         | Explicit purple icon color examples.                            |

Typography presets define their color using theme tokens: subtitles, BodySmall,
Caption, Helper, Overline, and Eyebrow use `text.secondary`; headings and main
content use `text.primary`. The shared `createPreset` factory accepts a color in
its configuration and falls back to `text.primary` when omitted. Storybook page
and example descriptions explicitly use `text.secondary`. Colors update when
the theme changes and preserve explicit prop and style overrides. Tertiary
counters and ellipses, disabled states, inverse text, and component-specific
foreground colors retain their existing semantic roles.
The Pressable label uses `text.inverse` with `surface.inverse`. View,
Pressable, and Portal preview backgrounds and borders now use semantic theme
tokens so bright dark-mode text is readable on their surfaces. The Carousel dark
example uses the default dark theme rather than a manual palette override.

README snippets in `theme`, `toolkit`, `icon`, and `charts` also contain
explicit colors for customization or chart examples.

No hex/RGB/HSL literals or fixed named foreground/background colors were found
in runtime component packages outside the central theme palette.
`transparent` values are intentional for unfilled surfaces and borders.
Theme shadow and Flyout tokens use absolute black; the Carousel image title
uses absolute white. Those uses are intentional rather than light-theme defaults.

Verification: typechecks passed across all 27 packages; primitives and Storybook
builds passed. Changed source files passed ESLint using the repository's shared
configuration. A mocked-hook execution check covered all 22 Typography presets
switching light/dark/light and preserving explicit color and style overrides.
Native visual rendering was not checked.

## Dark border visibility

The original dark `border.subtle` and `surface.elevated` both resolved to
`#343a40`, hiding Card and List borders, Accordion borders and separators, and
subtle Dividers inside elevated surfaces. Dark border values now use neutral
steps 7, 6, and 5 (`#868e96`, `#adb5bd`, `#ced4da`) for subtle, default, and
strong respectively. The subtle tone has at least 3:1 calculated contrast
against each standard dark surface; the other tones are progressively stronger.

Disabled Button, IconButton, Tag, Checkbox, Radio, and SegmentedControl fills
now use `surface.primary` rather than border values. Neutral Progress tracks
also use `surface.primary`. This keeps their foregrounds distinct when border
tokens are brightened. Light border values and surface palettes remain unchanged.

Border verification: all 27 package typechecks and the theme build passed.
Changed theme files passed ESLint with three existing type-import warnings.
Execution checks verified all nine dark border/surface combinations above 3:1,
border propagation into Divider, Card, Accordion, and List, positive divider
thickness, and 24 disabled fill states per palette. Native rendering remains
unverified.

The subsequent complete package audit and additional fixes are documented in
[the visual token audit](./visual-token-audit.md).
