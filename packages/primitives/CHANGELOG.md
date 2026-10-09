# @impulse-ui-native/primitives

## 8.1.0

### Patch Changes

- Updated dependencies [be262a8]
  - @impulse-ui-native/theme@8.1.0
  - @impulse-ui-native/icon@8.1.0
  - @impulse-ui-native/core@8.1.0

## 8.0.0

### Major Changes

- f67c73d: Make Control.Addon, Control.Error, and Accordion.Trigger render supplied content.
  Direct Control consumers must replace Addon's icon/Content props with children
  and explicitly supply Error's text. Direct Accordion consumers must replace
  Trigger's indicator/hideIndicator props with an optional Accordion.Indicator
  containing their chosen icon or custom content. Indicator preserves expanded-state
  rotation without generating a default chevron.

  Update ready-made fields to assemble addon icons, loading content, and errors
  explicitly while preserving their convenience props and appearance. Separate
  context consumer hooks, context/theme/prop types, and static styles into focused
  files, stabilize Control.Provider's context value, and clean up accordion
  animations when their parts unmount.

### Patch Changes

- @impulse-ui-native/core@8.0.0
- @impulse-ui-native/icon@8.0.0
- @impulse-ui-native/theme@8.0.0

## 7.0.1

### Patch Changes

- @impulse-ui-native/core@7.0.1
- @impulse-ui-native/icon@7.0.1
- @impulse-ui-native/theme@7.0.1

## 7.0.0

### Patch Changes

- Updated dependencies [7d5a077]
- Updated dependencies [d20d471]
- Updated dependencies [9398849]
- Updated dependencies [2a7db15]
  - @impulse-ui-native/theme@7.0.0
  - @impulse-ui-native/icon@7.0.0
  - @impulse-ui-native/core@7.0.0

## 6.3.1

### Patch Changes

- Updated dependencies [09c3cf2]
  - @impulse-ui-native/theme@6.3.1
  - @impulse-ui-native/icon@6.3.1
  - @impulse-ui-native/core@6.3.1

## 6.3.0

### Patch Changes

- Updated dependencies [9f7f2a2]
- Updated dependencies [9f7f2a2]
  - @impulse-ui-native/theme@6.3.0
  - @impulse-ui-native/icon@6.3.0
  - @impulse-ui-native/core@6.3.0

## 6.2.0

### Patch Changes

- Updated dependencies [5552924]
- Updated dependencies [5552924]
- Updated dependencies [5552924]
  - @impulse-ui-native/theme@6.2.0
  - @impulse-ui-native/core@6.2.0
  - @impulse-ui-native/icon@6.2.0

## 6.1.0

### Patch Changes

- Updated dependencies [3940c3f]
  - @impulse-ui-native/theme@6.1.0
  - @impulse-ui-native/icon@6.1.0
  - @impulse-ui-native/core@6.1.0

## 6.0.0

### Major Changes

- e4de9ad: Move Card, List, Progress, and their prop types out of primitives into dedicated packages. Import them from their owning packages or the toolkit. Add ready-made Card and List components assembled from their child-only namespaced parts, and use Reanimated for indeterminate Progress.

### Patch Changes

- Updated dependencies [ce02232]
  - @impulse-ui-native/theme@6.0.0
  - @impulse-ui-native/icon@6.0.0
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

- f618637: Add presentation-focused compound List parts and theme tokens. Reuse Divider for explicit separators and shared Pressable behavior for optional row actions.

### Patch Changes

- 0fcbabd: Use the theme primary text color for headings and main content and secondary
  for supporting typography presets so both stay readable in dark mode. Allow
  color in custom preset configurations, preserving explicit prop and style overrides.
  Replace fixed Storybook text colors and paired preview surfaces with theme tokens
  and use the default dark carousel palette.
- 0fcbabd: Fix Switch thumb/track and loading visibility, secondary Badge/Tag/Spinner
  foregrounds, Flyout handles, Slider marks/highlights, Progress tracks, and
  disabled Carousel indicator distinction. Improve normal Input placeholder
  foregrounds and use adaptive offline Avatar colors. Improve light primary and feedback
  foreground/background pairs. Default the shared Icon renderer to theme text
  while preserving explicit SVG colors, and honor Typography font-family and
  font-variant configuration and overrides.
- Updated dependencies [0fcbabd]
- Updated dependencies [0fcbabd]
- Updated dependencies [e1a8def]
- Updated dependencies [0b4016a]
- Updated dependencies [f618637]
- Updated dependencies [58a5c7e]
- Updated dependencies [b5a7c24]
- Updated dependencies [0fcbabd]
  - @impulse-ui-native/theme@5.0.0
  - @impulse-ui-native/icon@5.0.0
  - @impulse-ui-native/core@5.0.0

## 4.0.0

### Major Changes

- cfd0e78: Replace the shared component variant contract with action, display, field, and
  selection variant families, and remove variants that are not meaningful for
  each family. Organize interactive component appearance tokens into explicit
  variant and visual-state lookup tables with shared state resolvers.

### Patch Changes

- Updated dependencies [cfd0e78]
  - @impulse-ui-native/theme@4.0.0
  - @impulse-ui-native/icon@4.0.0
  - @impulse-ui-native/core@4.0.0

## 3.0.0

### Patch Changes

- Updated dependencies [8873b55]
  - @impulse-ui-native/theme@3.0.0
  - @impulse-ui-native/icon@3.0.0
  - @impulse-ui-native/core@3.0.0

## 2.9.0

### Minor Changes

- 3b7df07: Add a Badge primitive with semantic tones, control-style variants, Input-style prefix and suffix addons, theme tokens, and Storybook documentation. Standardize token-dependent React Native styles on `useThemedStyles` across affected components.

### Patch Changes

- Updated dependencies [3b7df07]
  - @impulse-ui-native/theme@2.9.0
  - @impulse-ui-native/icon@2.9.0
  - @impulse-ui-native/core@2.9.0

## 2.8.0

### Minor Changes

- 385bd4f: Add accessible linear and circular progress indicators with determinate and reduced-motion-aware indeterminate states.
- 6a63019: Add a token-aware compound Card with static, media, section, and pressable composition APIs.
- 1256f76: Add a token-aware Avatar with shared visual variants, image, initials, custom fallback, sizes, and semantic presence status.
- 598ea3d: Add a token-aware Divider with horizontal and vertical orientations, logical insets, and semantic colors.
- c6fb200: Add a token-aware Spinner primitive and use it across button, field, and switch loading states.

### Patch Changes

- e899f0a: Add an accessible compound Accordion with single and multiple expansion, animated height, keyboard navigation, and nested content support. Forward refs through the shared Pressable primitive, use it consistently across package implementations, and stabilize render-created callbacks, styles, derived structures, and hook result objects across the affected controls.
- Updated dependencies [385bd4f]
- Updated dependencies [6a63019]
- Updated dependencies [e899f0a]
- Updated dependencies [1256f76]
- Updated dependencies [598ea3d]
- Updated dependencies [c6fb200]
  - @impulse-ui-native/theme@2.8.0
  - @impulse-ui-native/core@2.8.0
  - @impulse-ui-native/icon@2.8.0

## 2.7.0

### Patch Changes

- 683305b: Add a functional loading state to IconButton and make loading Button controls block interaction and expose their busy accessibility state.
- Updated dependencies [3c5cb51]
- Updated dependencies [6a3c644]
  - @impulse-ui-native/theme@2.7.0
  - @impulse-ui-native/icon@2.7.0
  - @impulse-ui-native/core@2.7.0

## 2.6.0

### Patch Changes

- Updated dependencies [f5dec23]
- Updated dependencies [6f49e9f]
- Updated dependencies [e34f2c3]
  - @impulse-ui-native/theme@2.6.0
  - @impulse-ui-native/icon@2.6.0
  - @impulse-ui-native/core@2.6.0

## 2.5.0

### Minor Changes

- Theme tokens cleanup

### Patch Changes

- Updated dependencies
  - @impulse-ui-native/core@2.5.0
  - @impulse-ui-native/icon@2.5.0
  - @impulse-ui-native/theme@2.5.0

## 2.4.0

### Patch Changes

- @impulse-ui-native/core@2.4.0
- @impulse-ui-native/icon@2.4.0
- @impulse-ui-native/theme@2.4.0

## 2.3.5

### Patch Changes

- Adding missing props in the package.json
- Updated dependencies
  - @impulse-ui-native/core@2.3.5
  - @impulse-ui-native/icon@2.3.5
  - @impulse-ui-native/theme@2.3.5

## 2.3.4

### Patch Changes

- Adding licenses to packages
- Updated dependencies
  - @impulse-ui-native/core@2.3.4
  - @impulse-ui-native/icon@2.3.4
  - @impulse-ui-native/theme@2.3.4

## 2.1.6

### Patch Changes

- f169c09: Fixing wrong tag flex prop
- Updated dependencies [f169c09]
  - @impulse-ui-native/core@2.1.6
  - @impulse-ui-native/icon@2.1.6
  - @impulse-ui-native/theme@2.1.6

## 2.1.5

### Patch Changes

- fd608af: Show the Tag close action only when `closable` is enabled and allow labels to fill the available width.
  - @impulse-ui-native/core@2.1.5
  - @impulse-ui-native/icon@2.1.5
  - @impulse-ui-native/theme@2.1.5

## 2.1.4

### Patch Changes

- 13ae4f4: Updating README docs
- Updated dependencies [13ae4f4]
  - @impulse-ui-native/core@2.1.4
  - @impulse-ui-native/icon@2.1.4
  - @impulse-ui-native/theme@2.1.4

## 2.1.3

### Patch Changes

- @impulse-ui-native/core@2.1.3
- @impulse-ui-native/icon@2.1.3
- @impulse-ui-native/theme@2.1.3

## 2.1.2

### Patch Changes

- @impulse-ui-native/core@2.1.2
- @impulse-ui-native/icon@2.1.2
- @impulse-ui-native/theme@2.1.2

## 2.1.1

### Patch Changes

- Updated dependencies [f5d8cc1]
  - @impulse-ui-native/core@2.1.1
  - @impulse-ui-native/theme@2.1.1
  - @impulse-ui-native/icon@2.1.1

## 2.1.0

### Patch Changes

- Updated dependencies [69e91a4]
  - @impulse-ui-native/core@2.1.0
  - @impulse-ui-native/theme@2.1.0
  - @impulse-ui-native/icon@2.1.0

## 2.0.1

### Patch Changes

- Updating READMEs
- Updated dependencies
  - @impulse-ui-native/core@2.0.1
  - @impulse-ui-native/icon@2.0.1
  - @impulse-ui-native/theme@2.0.1

## 2.0.0

### Major Changes

- Initial major public release

### Patch Changes

- Updated dependencies
  - @impulse-ui-native/core@2.0.0
  - @impulse-ui-native/icon@2.0.0
  - @impulse-ui-native/theme@2.0.0
