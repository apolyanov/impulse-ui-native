# @impulse-ui-native/theme

## 6.3.1

### Patch Changes

- 09c3cf2: Remove arrows from Popover and Tooltip panels and simplify their positioning geometry. Deprecate the ignored arrowSize theme token while retaining it for compatibility with existing themes.
  - @impulse-ui-native/core@6.3.1

## 6.3.0

### Patch Changes

- 9f7f2a2: Use the default border color for the flyout drag handle so it appears as a light neutral in light mode while preserving its dark-mode shade.

  Use the tertiary text color for the flyout backdrop so it stays dark in light mode and uses a muted gray in dark mode for subtle contrast.
  - @impulse-ui-native/core@6.3.0

## 6.2.0

### Minor Changes

- 5552924: Add token-driven Tooltip and compound Popover components with Portal rendering, anchor measurement, safe-area collision handling, and native press/long-press triggers.

### Patch Changes

- Updated dependencies [5552924]
- Updated dependencies [5552924]
  - @impulse-ui-native/core@6.2.0

## 6.1.0

### Minor Changes

- 3940c3f: Expose useOverlayLayer to look up an overlay's index by ID and registered component type, in oldest-first or newest-first order. Animate older toasts downward and shrink them behind the newest at both placements with five visual levels; additional toasts share the deepest scale and offset. Add theme tokens for the stack limit and scale step.

### Patch Changes

- @impulse-ui-native/core@6.1.0

## 6.0.0

### Minor Changes

- ce02232: Add token-driven compound Toast notifications using OverlayProvider, with top/bottom placements, timed or persistent dismissal, and actions.

  Provide a ready-made Toast component assembled from child-only composable parts, following Input's composition model.

### Patch Changes

- @impulse-ui-native/core@6.0.0

## 5.0.0

### Major Changes

- e1a8def: Remove web-only interaction behavior and built-in accessibility semantics from
  the component packages. Controls now target mobile interaction exclusively;
  web and accessibility support will return together in a future major version.

  Model segmented-control inline and stacked item layouts as theme tokens and
  resolve layout, size, and selection-state tokens through one theme utility.

  Model divider orientation and inset layouts, flyout placement layouts, and
  slider value-bubble spacing as resolved component theme tokens.

### Minor Changes

- 0fcbabd: Export DarkColors and use it in DarkTheme. Provide dark surfaces, borders,
  brand and feedback pairs while keeping the neutral scale identical in both
  schemes. Derive adaptive component defaults from semantic surface, border, and
  text tokens instead of fixed neutral steps.
- 0b4016a: Add a native Carousel with edge and center snapping, neighboring-slide previews, controlled or uncontrolled indices, dots/segments/counter pagination, and default filled navigation buttons that honor reduced motion. Pagination and navigation follow the nearest slide during scrolling.
- f618637: Add presentation-focused compound List parts and theme tokens. Reuse Divider for explicit separators and shared Pressable behavior for optional row actions.
- 58a5c7e: Add native token-driven Pagination with adaptive and compact page-window
  layouts, controlled and uncontrolled state, and shared Pressable feedback.

### Patch Changes

- 0fcbabd: Increase dark semantic border contrast so subtle dividers and Card, Accordion,
  and List borders remain visible on elevated surfaces. Preserve the border tone
  hierarchy and use surface tokens for disabled fills and neutral progress tracks
  so stronger borders do not obscure their foregrounds.
- b5a7c24: Match the primary soft Tag background, border, and foreground to the soft Button
  palette in both light and dark themes.
- 0fcbabd: Fix Switch thumb/track and loading visibility, secondary Badge/Tag/Spinner
  foregrounds, Flyout handles, Slider marks/highlights, Progress tracks, and
  disabled Carousel indicator distinction. Improve normal Input placeholder
  foregrounds and use adaptive offline Avatar colors. Improve light primary and feedback
  foreground/background pairs. Default the shared Icon renderer to theme text
  while preserving explicit SVG colors, and honor Typography font-family and
  font-variant configuration and overrides.
  - @impulse-ui-native/core@5.0.0

## 4.0.0

### Major Changes

- cfd0e78: Replace the shared component variant contract with action, display, field, and
  selection variant families, and remove variants that are not meaningful for
  each family. Organize interactive component appearance tokens into explicit
  variant and visual-state lookup tables with shared state resolvers.

### Patch Changes

- @impulse-ui-native/core@4.0.0

## 3.0.0

### Major Changes

- 8873b55: Add token-driven Slider and RangeSlider controls with shared sizes, filled, outlined, and soft variants, steps, marks, value labels, pointer gestures, keyboard input, and adjustable accessibility semantics.

  Rename the public theme constant `shadowScale` to `ShadowScale` to follow the PascalCase constants convention.

### Patch Changes

- @impulse-ui-native/core@3.0.0

## 2.9.0

### Minor Changes

- 3b7df07: Add a Badge primitive with semantic tones, control-style variants, Input-style prefix and suffix addons, theme tokens, and Storybook documentation. Standardize token-dependent React Native styles on `useThemedStyles` across affected components.

### Patch Changes

- @impulse-ui-native/core@2.9.0

## 2.8.0

### Minor Changes

- 385bd4f: Add accessible linear and circular progress indicators with determinate and reduced-motion-aware indeterminate states.
- 6a63019: Add a token-aware compound Card with static, media, section, and pressable composition APIs.
- e899f0a: Add an accessible compound Accordion with single and multiple expansion, animated height, keyboard navigation, and nested content support. Forward refs through the shared Pressable primitive, use it consistently across package implementations, and stabilize render-created callbacks, styles, derived structures, and hook result objects across the affected controls.
- 1256f76: Add a token-aware Avatar with shared visual variants, image, initials, custom fallback, sizes, and semantic presence status.
- 598ea3d: Add a token-aware Divider with horizontal and vertical orientations, logical insets, and semantic colors.
- c6fb200: Add a token-aware Spinner primitive and use it across button, field, and switch loading states.

### Patch Changes

- Updated dependencies [e899f0a]
  - @impulse-ui-native/core@2.8.0

## 2.7.0

### Minor Changes

- 3c5cb51: Add a themed Textarea control with character counting, validation feedback, accessible disabled and invalid states, and bounded auto-grow behavior.
- 6a3c644: Add an accessible, token-aware Switch component with controlled and uncontrolled state, loading and disabled behavior, RTL support, and reduced-motion-aware Reanimated transitions.

### Patch Changes

- @impulse-ui-native/core@2.7.0

## 2.6.0

### Minor Changes

- f5dec23: Add the accessible, themeable Checkbox component with controlled and uncontrolled checked, unchecked, and indeterminate states.
- e34f2c3: Add the accessible, themeable Radio component with controlled and uncontrolled selection, shared sizes, and shared variants.

### Patch Changes

- 6f49e9f: Apply `ThemeProvider` component-token overrides and declare Skia as a toolkit peer dependency.
  - @impulse-ui-native/core@2.6.0

## 2.5.0

### Minor Changes

- Theme tokens cleanup

### Patch Changes

- Updated dependencies
  - @impulse-ui-native/core@2.5.0

## 2.4.0

### Patch Changes

- @impulse-ui-native/core@2.4.0

## 2.3.5

### Patch Changes

- Adding missing props in the package.json
- Updated dependencies
  - @impulse-ui-native/core@2.3.5

## 2.3.4

### Patch Changes

- Adding licenses to packages
- Updated dependencies
  - @impulse-ui-native/core@2.3.4

## 2.1.6

### Patch Changes

- f169c09: Fixing wrong tag flex prop
- Updated dependencies [f169c09]
  - @impulse-ui-native/core@2.1.6

## 2.1.5

### Patch Changes

- @impulse-ui-native/core@2.1.5

## 2.1.4

### Patch Changes

- 13ae4f4: Updating README docs
- Updated dependencies [13ae4f4]
  - @impulse-ui-native/core@2.1.4

## 2.1.3

### Patch Changes

- @impulse-ui-native/core@2.1.3

## 2.1.2

### Patch Changes

- @impulse-ui-native/core@2.1.2

## 2.1.1

### Patch Changes

- Updated dependencies [f5d8cc1]
  - @impulse-ui-native/core@2.1.1

## 2.1.0

### Minor Changes

- 69e91a4: Add styled line and multi-line charts with shared axes, grids, labels, and theme color support.

### Patch Changes

- Updated dependencies [69e91a4]
  - @impulse-ui-native/core@2.1.0

## 2.0.1

### Patch Changes

- Updating READMEs
- Updated dependencies
  - @impulse-ui-native/core@2.0.1

## 2.0.0

### Major Changes

- Initial major public release

### Patch Changes

- Updated dependencies
  - @impulse-ui-native/core@2.0.0

## 1.0.10

### Patch Changes

- Icons introduced
- Updated dependencies
  - @impulse-ui-native/core@1.0.10

## 1.0.9

### Patch Changes

- Extending SafeAreaView to use @impulse-ui-native/view internally
- Updated dependencies
  - @impulse-ui-native/core@1.0.9

## 1.0.8

### Patch Changes

- Exporting neutral colors
- Updated dependencies
  - @impulse-ui-native/core@1.0.8

## 1.0.7

### Patch Changes

- Fixed Icon peer dependencies
- Updated dependencies
  - @impulse-ui-native/core@1.0.7

## 1.0.6

### Patch Changes

- Exposed new props for Typography, Button and Theme interfaces
- Updated dependencies
  - @impulse-ui-native/core@1.0.6

## 1.0.5

### Patch Changes

- Adding Typography and View pacakges to the toolkit
- Updated dependencies
  - @impulse-ui-native/core@1.0.5

## 1.0.4

### Patch Changes

- Fixing icon component
- Updated dependencies
  - @impulse-ui-native/core@1.0.4

## 1.0.3

### Patch Changes

- Updating icon component
- Updated dependencies
  - @impulse-ui-native/core@1.0.3

## 1.0.2

### Patch Changes

- Publishing layer manager types
- Updated dependencies
  - @impulse-ui-native/core@1.0.2

## 1.0.1

### Patch Changes

- Removing unpublishede package from dependencies
- Updated dependencies
  - @impulse-ui-native/core@1.0.1

## 1.0.0

### Major Changes

- a41a93a: The initial release of the Impulse UI Native workspace

### Patch Changes

- Updated dependencies [a41a93a]
  - @impulse-ui-native/core@1.0.0
