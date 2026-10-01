# @impulse-ui-native/slider

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
