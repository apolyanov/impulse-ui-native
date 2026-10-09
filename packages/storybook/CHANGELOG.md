# @impulse-ui-native/storybook

## 7.0.0

### Patch Changes

- cea3a04: Expose Flyout.Root, Header, Title, Content, and Handle parts. Build the convenience
  Flyout from those parts while preserving its lifecycle, gestures, placement,
  safe-area handling, and existing title-based API.
- 8e6ef63: Add Modal.Provider above Root to own the lifecycle and share context with Close.
  Modal.Close renders supplied children and dismisses automatically while preserving
  consumer press callbacks. The convenience component uses plain JSX composition
  with a default neutral X and hideClose, without a children callback.

  For compound usage, move id, open, layer, and lifecycle callbacks from Root to
  Provider. Keep Provider and Root inside the local Portal.

- 7d5a077: Add Modal's OverlayComponentProps lifecycle for local Portal usage and global
  OverlayHost registration. Root handles safe-area positioning, backdrop and Android
  back dismissal, layered rendering, and cancelable entry/exit animations. Preserve
  independent presentation parts and non-scrollable content, and add hosted title
  composition and interactive documentation.
- d20d471: Add presentation-only Modal parts with a styled Root, Header, Content, Footer,
  Title, and Description. Include a convenience composition and token-driven
  small/medium/large sizes. Dialog behavior remains deferred.
- 9398849: Align Flyout with the elevated overlay surface, 16-point exposed
  corners and padding, and 20/28 title typography used by Modal. Add theme tokens
  for the title typography. The sheet remains borderless.

  Use an 18-point tertiary close icon in Toast, matching Modal and Popover, with
  dedicated closeIconSize and closeColor tokens independent of semantic icons.

  Allow Popover titles to wrap beside the close control, with a compact long-title
  Storybook example.

- bf78005: Compose Popover's convenience API with title, custom header, footer, and a default
  neutral close icon with hideClose. Add child-only Header and Footer parts.
- 2a7db15: Remove Popover's surface prop, exported PopoverSurface type, and surface context
  logic. Use a single flat secondary panel without a default shadow. Title and
  Description consume their own theme colors without context.

  Flatten components.popover.surfaces.elevated into the panel tokens, using
  backgroundColor for the former value field. Move inverse hint styling into
  components.popover.tooltip, with color for its text. Tooltip retains its compact
  inverse presentation and sizes naturally through its own content styles.

- Updated dependencies [7d5a077]
- Updated dependencies [d20d471]
- Updated dependencies [9398849]
- Updated dependencies [2a7db15]
  - @impulse-ui-native/theme@7.0.0
  - @impulse-ui-native/card@7.0.0
  - @impulse-ui-native/icon@7.0.0
  - @impulse-ui-native/list@7.0.0
  - @impulse-ui-native/primitives@7.0.0
  - @impulse-ui-native/progress@7.0.0

## 6.3.1

### Patch Changes

- Updated dependencies [09c3cf2]
  - @impulse-ui-native/theme@6.3.1
  - @impulse-ui-native/card@6.3.1
  - @impulse-ui-native/icon@6.3.1
  - @impulse-ui-native/list@6.3.1
  - @impulse-ui-native/primitives@6.3.1
  - @impulse-ui-native/progress@6.3.1

## 6.3.0

### Patch Changes

- Updated dependencies [9f7f2a2]
- Updated dependencies [9f7f2a2]
  - @impulse-ui-native/theme@6.3.0
  - @impulse-ui-native/icon@6.3.0
  - @impulse-ui-native/card@6.3.0
  - @impulse-ui-native/list@6.3.0
  - @impulse-ui-native/primitives@6.3.0
  - @impulse-ui-native/progress@6.3.0

## 6.2.0

### Minor Changes

- 5552924: Add token-driven Tooltip and compound Popover components with Portal rendering, anchor measurement, safe-area collision handling, and native press/long-press triggers.

### Patch Changes

- Updated dependencies [5552924]
  - @impulse-ui-native/theme@6.2.0
  - @impulse-ui-native/card@6.2.0
  - @impulse-ui-native/icon@6.2.0
  - @impulse-ui-native/list@6.2.0
  - @impulse-ui-native/primitives@6.2.0
  - @impulse-ui-native/progress@6.2.0

## 6.1.0

### Patch Changes

- Updated dependencies [3940c3f]
  - @impulse-ui-native/theme@6.1.0
  - @impulse-ui-native/card@6.1.0
  - @impulse-ui-native/icon@6.1.0
  - @impulse-ui-native/list@6.1.0
  - @impulse-ui-native/primitives@6.1.0
  - @impulse-ui-native/progress@6.1.0

## 6.0.0

### Minor Changes

- ce02232: Add token-driven compound Toast notifications using OverlayProvider, with top/bottom placements, timed or persistent dismissal, and actions.

  Provide a ready-made Toast component assembled from child-only composable parts, following Input's composition model.

### Patch Changes

- e4de9ad: Move Card, List, Progress, and their prop types out of primitives into dedicated packages. Import them from their owning packages or the toolkit. Add ready-made Card and List components assembled from their child-only namespaced parts, and use Reanimated for indeterminate Progress.
- Updated dependencies [ce02232]
- Updated dependencies [e4de9ad]
  - @impulse-ui-native/theme@6.0.0
  - @impulse-ui-native/card@6.0.0
  - @impulse-ui-native/list@6.0.0
  - @impulse-ui-native/progress@6.0.0
  - @impulse-ui-native/primitives@6.0.0
  - @impulse-ui-native/icon@6.0.0

## 5.0.0

### Minor Changes

- 0b4016a: Add a native Carousel with edge and center snapping, neighboring-slide previews, controlled or uncontrolled indices, dots/segments/counter pagination, and default filled navigation buttons that honor reduced motion. Pagination and navigation follow the nearest slide during scrolling.

### Patch Changes

- 0fcbabd: Use the theme primary text color for headings and main content and secondary
  for supporting typography presets so both stay readable in dark mode. Allow
  color in custom preset configurations, preserving explicit prop and style overrides.
  Replace fixed Storybook text colors and paired preview surfaces with theme tokens
  and use the default dark carousel palette.
- Updated dependencies [0fcbabd]
- Updated dependencies [0fcbabd]
- Updated dependencies [e1a8def]
- Updated dependencies [0b4016a]
- Updated dependencies [f618637]
- Updated dependencies [58a5c7e]
- Updated dependencies [b5a7c24]
- Updated dependencies [0fcbabd]
- Updated dependencies [0fcbabd]
  - @impulse-ui-native/theme@5.0.0
  - @impulse-ui-native/primitives@5.0.0
  - @impulse-ui-native/icon@5.0.0

## 4.0.0

### Patch Changes

- Updated dependencies [cfd0e78]
  - @impulse-ui-native/primitives@4.0.0
  - @impulse-ui-native/theme@4.0.0
  - @impulse-ui-native/icon@4.0.0

## 3.0.0

### Patch Changes

- 8873b55: Add token-driven Slider and RangeSlider controls with shared sizes, filled, outlined, and soft variants, steps, marks, value labels, pointer gestures, keyboard input, and adjustable accessibility semantics.

  Rename the public theme constant `shadowScale` to `ShadowScale` to follow the PascalCase constants convention.

- Updated dependencies [8873b55]
  - @impulse-ui-native/theme@3.0.0
  - @impulse-ui-native/icon@3.0.0
  - @impulse-ui-native/primitives@3.0.0

## 2.9.0

### Minor Changes

- 3b7df07: Add a Badge primitive with semantic tones, control-style variants, Input-style prefix and suffix addons, theme tokens, and Storybook documentation. Standardize token-dependent React Native styles on `useThemedStyles` across affected components.

### Patch Changes

- Updated dependencies [3b7df07]
  - @impulse-ui-native/primitives@2.9.0
  - @impulse-ui-native/theme@2.9.0
  - @impulse-ui-native/icon@2.9.0

## 2.8.0

### Patch Changes

- Updated dependencies [385bd4f]
- Updated dependencies [6a63019]
- Updated dependencies [e899f0a]
- Updated dependencies [1256f76]
- Updated dependencies [598ea3d]
- Updated dependencies [c6fb200]
  - @impulse-ui-native/primitives@2.8.0
  - @impulse-ui-native/theme@2.8.0
  - @impulse-ui-native/icon@2.8.0

## 2.7.0

### Patch Changes

- 683305b: Add a functional loading state to IconButton and make loading Button controls block interaction and expose their busy accessibility state.
- Updated dependencies [3c5cb51]
- Updated dependencies [6a3c644]
- Updated dependencies [683305b]
  - @impulse-ui-native/theme@2.7.0
  - @impulse-ui-native/primitives@2.7.0
  - @impulse-ui-native/icon@2.7.0

## 2.6.0

### Minor Changes

- f5dec23: Add the accessible, themeable Checkbox component with controlled and uncontrolled checked, unchecked, and indeterminate states.
- e34f2c3: Add the accessible, themeable Radio component with controlled and uncontrolled selection, shared sizes, and shared variants.

### Patch Changes

- Updated dependencies [f5dec23]
- Updated dependencies [6f49e9f]
- Updated dependencies [e34f2c3]
  - @impulse-ui-native/theme@2.6.0
  - @impulse-ui-native/icon@2.6.0
  - @impulse-ui-native/primitives@2.6.0

## 2.5.0

### Minor Changes

- Theme tokens cleanup

### Patch Changes

- Updated dependencies
  - @impulse-ui-native/icon@2.5.0
  - @impulse-ui-native/primitives@2.5.0
  - @impulse-ui-native/theme@2.5.0

## 2.4.0

### Patch Changes

- fe0bf8e: Replace the layers registry with a typed overlay store, provider, and host API.
  - @impulse-ui-native/icon@2.4.0
  - @impulse-ui-native/primitives@2.4.0
  - @impulse-ui-native/theme@2.4.0

## 2.3.5

### Patch Changes

- Adding missing props in the package.json
- Updated dependencies
  - @impulse-ui-native/icon@2.3.5
  - @impulse-ui-native/primitives@2.3.5
  - @impulse-ui-native/theme@2.3.5

## 2.3.4

### Patch Changes

- Adding licenses to packages
- Updated dependencies
  - @impulse-ui-native/icon@2.3.4
  - @impulse-ui-native/primitives@2.3.4
  - @impulse-ui-native/theme@2.3.4

## 2.1.6

### Patch Changes

- f169c09: Fixing wrong tag flex prop
- Updated dependencies [f169c09]
  - @impulse-ui-native/icon@2.1.6
  - @impulse-ui-native/primitives@2.1.6
  - @impulse-ui-native/theme@2.1.6

## 2.1.5

### Patch Changes

- fd608af: Add stories for charts, data states, date and time controls, flyouts, icons, inputs, layers, portals, selection, skeletons, and steppers.
- Updated dependencies [fd608af]
  - @impulse-ui-native/primitives@2.1.5
  - @impulse-ui-native/icon@2.1.5
  - @impulse-ui-native/theme@2.1.5

## 2.1.4

### Patch Changes

- 13ae4f4: Updating README docs
- Updated dependencies [13ae4f4]
  - @impulse-ui-native/icon@2.1.4
  - @impulse-ui-native/primitives@2.1.4
  - @impulse-ui-native/theme@2.1.4

## 2.1.3

### Patch Changes

- @impulse-ui-native/icon@2.1.3
- @impulse-ui-native/primitives@2.1.3
- @impulse-ui-native/theme@2.1.3

## 2.1.2

### Patch Changes

- @impulse-ui-native/icon@2.1.2
- @impulse-ui-native/primitives@2.1.2
- @impulse-ui-native/theme@2.1.2

## 2.1.1

### Patch Changes

- @impulse-ui-native/primitives@2.1.1
- @impulse-ui-native/theme@2.1.1
- @impulse-ui-native/icon@2.1.1

## 2.1.0

### Patch Changes

- Updated dependencies [69e91a4]
  - @impulse-ui-native/theme@2.1.0
  - @impulse-ui-native/primitives@2.1.0
  - @impulse-ui-native/icon@2.1.0

## 2.0.1

### Patch Changes

- Updating READMEs
- Updated dependencies
  - @impulse-ui-native/toolkit@2.0.1

## 2.0.0

### Major Changes

- Initial major public release

### Patch Changes

- Updated dependencies
  - @impulse-ui-native/toolkit@2.0.0
