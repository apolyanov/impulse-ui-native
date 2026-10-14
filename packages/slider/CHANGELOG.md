# @impulse-ui-native/slider

## 9.1.0

### Patch Changes

- Updated dependencies [bffa719]
  - @impulse-ui-native/theme@9.1.0
  - @impulse-ui-native/primitives@9.1.0
  - @impulse-ui-native/core@9.1.0

## 9.0.0

### Major Changes

- cf6e434: Move slider, range-slider, and color-spectrum drag visuals onto the UI thread.
  Skip repeated snapped values, cache mark labels and alpha gradients, and limit
  spectrum React updates while preserving the final selection. Fix consecutive
  controllable-state updates that arrive before a render. Standalone slider installs
  now require Gesture Handler, Reanimated, and Worklets native setup, including a
  GestureHandlerRootView ancestor. This is a breaking setup change for standalone
  slider consumers; toolkit consumers already declare these runtime peers.

  Consolidate slider mark layout and spectrum coordinate conversion, separate
  internal styling and state types from public props, and remove unused track math.
  Preserve scientific-notation steps and fractional upper limits, and enforce
  range gaps when bounds do not align with the step grid.

  Initialize numeric worklet helpers before the worklets that capture them to
  prevent an undefined-function crash when rendering Slider or ColorPicker through
  the native Expo Babel pipeline.

  Separate continuous thumb and fill positions from stepped values so dragging
  remains smooth between steps, including ColorPicker hue and alpha controls.
  Range visuals retain their minimum gap, and release reconciles to the normalized
  selection.

  Drive ColorPicker preview and gradient visuals from shared UI-thread color state.
  Add Slider.onValueChangeWorklet for linking continuous drag values to Reanimated
  visuals before normalizing JavaScript value callbacks.

  Keep ColorPicker context and text fields stable during native drags while
  preserving live value notifications. Compute UI RGBA once per color update and
  pass unprocessed color strings to Reanimated so RGB and alpha survive native
  color processing. Add a native Storybook frame-time probe to compare the
  isolated spectrum and full picker.

  Keep off-grid slider maxima reachable and preserve controlled color change
  notifications when dragging back to an unchanged owner value.

### Minor Changes

- 91eba29: Add a modular native ColorPicker with saturation/brightness spectrum, hue and alpha sliders, hex/RGB/opacity entry, theme presets, controlled/uncontrolled selection, and staged Apply/Cancel behavior. Add component tokens and toolkit exports. Slider now accepts custom track content and uses a tokenized minimum interaction height.

  Render gradient transparency with explicit stop opacity. Activate spectrum drags on touch-down with Gesture Handler on the UI thread so parent native scrolling cannot interrupt color selection. The color picker requires Gesture Handler, Reanimated, Worklets, and GestureHandlerRootView.

  Allow customizing the preset palette heading through presetsLabel, defaulting to "Theme colors", and hiding the entire preset section with showPresets={false}.

  Expose dedicated color-picker tokens for internal spacing, field proportions, surface radii, swatch rings and checkmark sizes, and spectrum indicator borders and shadows. Preserve the default appearance while allowing independent customization.

### Patch Changes

- 91eba29: Remove unsupported right-to-left mirroring from color selection, sliders, switches, progress indicators, pagination arrows, and initial scroll reveal calculations. Use left-to-right behavior consistently and remove RTL support claims from current documentation.

  Remove the typography writingDirection style prop.

- Updated dependencies [91eba29]
- Updated dependencies [91eba29]
- Updated dependencies [cf6e434]
  - @impulse-ui-native/theme@9.0.0
  - @impulse-ui-native/primitives@9.0.0
  - @impulse-ui-native/core@9.0.0

## 8.3.0

### Patch Changes

- Updated dependencies [a4b32bf]
  - @impulse-ui-native/theme@8.3.0
  - @impulse-ui-native/primitives@8.3.0
  - @impulse-ui-native/core@8.3.0

## 8.2.0

### Patch Changes

- 0cd457e: Expose shared shadows, the code font, chart palette and geometry, Slider detail
  dimensions, overlay animation timing, and Toast action weight through the active
  theme. Preserve explicit visual prop overrides and existing runtime defaults.
  Keep chart stroke layout aligned with its themed rendering width, preserve arrays
  when merging theme palettes, and theme shared Storybook preview styling.
- Updated dependencies [0cd457e]
  - @impulse-ui-native/theme@8.2.0
  - @impulse-ui-native/primitives@8.2.0
  - @impulse-ui-native/core@8.2.0

## 8.1.0

### Patch Changes

- Updated dependencies [be262a8]
  - @impulse-ui-native/theme@8.1.0
  - @impulse-ui-native/primitives@8.1.0
  - @impulse-ui-native/core@8.1.0

## 8.0.0

### Patch Changes

- Updated dependencies [f67c73d]
  - @impulse-ui-native/primitives@8.0.0
  - @impulse-ui-native/core@8.0.0
  - @impulse-ui-native/theme@8.0.0

## 7.0.1

### Patch Changes

- @impulse-ui-native/core@7.0.1
- @impulse-ui-native/primitives@7.0.1
- @impulse-ui-native/theme@7.0.1

## 7.0.0

### Patch Changes

- Updated dependencies [7d5a077]
- Updated dependencies [d20d471]
- Updated dependencies [9398849]
- Updated dependencies [2a7db15]
  - @impulse-ui-native/theme@7.0.0
  - @impulse-ui-native/primitives@7.0.0
  - @impulse-ui-native/core@7.0.0

## 6.3.1

### Patch Changes

- Updated dependencies [09c3cf2]
  - @impulse-ui-native/theme@6.3.1
  - @impulse-ui-native/primitives@6.3.1
  - @impulse-ui-native/core@6.3.1

## 6.3.0

### Patch Changes

- Updated dependencies [9f7f2a2]
  - @impulse-ui-native/theme@6.3.0
  - @impulse-ui-native/primitives@6.3.0
  - @impulse-ui-native/core@6.3.0

## 6.2.0

### Patch Changes

- Updated dependencies [5552924]
- Updated dependencies [5552924]
- Updated dependencies [5552924]
  - @impulse-ui-native/theme@6.2.0
  - @impulse-ui-native/core@6.2.0
  - @impulse-ui-native/primitives@6.2.0

## 6.1.0

### Patch Changes

- Updated dependencies [3940c3f]
  - @impulse-ui-native/theme@6.1.0
  - @impulse-ui-native/primitives@6.1.0
  - @impulse-ui-native/core@6.1.0

## 6.0.0

### Patch Changes

- Updated dependencies [ce02232]
- Updated dependencies [e4de9ad]
  - @impulse-ui-native/theme@6.0.0
  - @impulse-ui-native/primitives@6.0.0
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

### Patch Changes

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
  - @impulse-ui-native/core@5.0.0

## 4.0.0

### Major Changes

- cfd0e78: Replace the shared component variant contract with action, display, field, and
  selection variant families, and remove variants that are not meaningful for
  each family. Organize interactive component appearance tokens into explicit
  variant and visual-state lookup tables with shared state resolvers.

### Patch Changes

- Updated dependencies [cfd0e78]
  - @impulse-ui-native/primitives@4.0.0
  - @impulse-ui-native/theme@4.0.0
  - @impulse-ui-native/core@4.0.0

## 3.0.0

### Minor Changes

- 8873b55: Add token-driven Slider and RangeSlider controls with shared sizes, filled, outlined, and soft variants, steps, marks, value labels, pointer gestures, keyboard input, and adjustable accessibility semantics.

  Rename the public theme constant `shadowScale` to `ShadowScale` to follow the PascalCase constants convention.

### Patch Changes

- Updated dependencies [8873b55]
  - @impulse-ui-native/theme@3.0.0
  - @impulse-ui-native/primitives@3.0.0
  - @impulse-ui-native/core@3.0.0

This package has not been released.
