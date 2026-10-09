# @impulse-ui-native/segmented-control

## 8.1.0

### Patch Changes

- Updated dependencies [be262a8]
  - @impulse-ui-native/theme@8.1.0
  - @impulse-ui-native/icon@8.1.0
  - @impulse-ui-native/primitives@8.1.0
  - @impulse-ui-native/core@8.1.0

## 8.0.0

### Patch Changes

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

- Updated dependencies [f67c73d]
  - @impulse-ui-native/primitives@8.0.0
  - @impulse-ui-native/core@8.0.0
  - @impulse-ui-native/icon@8.0.0
  - @impulse-ui-native/theme@8.0.0

## 7.0.1

### Patch Changes

- 7292823: Move the segmented control frame outside the scroll viewport so the last segment remains fully visible at the end of horizontal scrolling.
  - @impulse-ui-native/core@7.0.1
  - @impulse-ui-native/icon@7.0.1
  - @impulse-ui-native/primitives@7.0.1
  - @impulse-ui-native/theme@7.0.1

## 7.0.0

### Patch Changes

- Updated dependencies [7d5a077]
- Updated dependencies [d20d471]
- Updated dependencies [9398849]
- Updated dependencies [2a7db15]
  - @impulse-ui-native/theme@7.0.0
  - @impulse-ui-native/icon@7.0.0
  - @impulse-ui-native/primitives@7.0.0
  - @impulse-ui-native/core@7.0.0

## 6.3.1

### Patch Changes

- Updated dependencies [09c3cf2]
  - @impulse-ui-native/theme@6.3.1
  - @impulse-ui-native/icon@6.3.1
  - @impulse-ui-native/primitives@6.3.1
  - @impulse-ui-native/core@6.3.1

## 6.3.0

### Patch Changes

- Updated dependencies [9f7f2a2]
- Updated dependencies [9f7f2a2]
  - @impulse-ui-native/theme@6.3.0
  - @impulse-ui-native/icon@6.3.0
  - @impulse-ui-native/primitives@6.3.0
  - @impulse-ui-native/core@6.3.0

## 6.2.0

### Patch Changes

- Updated dependencies [5552924]
- Updated dependencies [5552924]
- Updated dependencies [5552924]
  - @impulse-ui-native/theme@6.2.0
  - @impulse-ui-native/core@6.2.0
  - @impulse-ui-native/icon@6.2.0
  - @impulse-ui-native/primitives@6.2.0

## 6.1.0

### Patch Changes

- Updated dependencies [3940c3f]
  - @impulse-ui-native/theme@6.1.0
  - @impulse-ui-native/icon@6.1.0
  - @impulse-ui-native/primitives@6.1.0
  - @impulse-ui-native/core@6.1.0

## 6.0.0

### Patch Changes

- Updated dependencies [ce02232]
- Updated dependencies [e4de9ad]
  - @impulse-ui-native/theme@6.0.0
  - @impulse-ui-native/primitives@6.0.0
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

- 9ab7bb5: Add the token-driven `SegmentedControl.Root` and
  `SegmentedControl.Item` compound API.

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
  - @impulse-ui-native/icon@5.0.0
  - @impulse-ui-native/core@5.0.0

This package has not been released.
