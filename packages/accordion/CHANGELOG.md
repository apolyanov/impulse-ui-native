# @impulse-ui-native/accordion

## 8.1.0

### Patch Changes

- Updated dependencies [be262a8]
  - @impulse-ui-native/theme@8.1.0
  - @impulse-ui-native/icon@8.1.0
  - @impulse-ui-native/primitives@8.1.0
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

- Updated dependencies [f67c73d]
  - @impulse-ui-native/primitives@8.0.0
  - @impulse-ui-native/core@8.0.0
  - @impulse-ui-native/icon@8.0.0
  - @impulse-ui-native/theme@8.0.0

## 7.0.1

### Patch Changes

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

## 4.0.0

### Patch Changes

- Updated dependencies [cfd0e78]
  - @impulse-ui-native/primitives@4.0.0
  - @impulse-ui-native/theme@4.0.0
  - @impulse-ui-native/icon@4.0.0
  - @impulse-ui-native/core@4.0.0

## 3.0.0

### Patch Changes

- Updated dependencies [8873b55]
  - @impulse-ui-native/theme@3.0.0
  - @impulse-ui-native/icon@3.0.0
  - @impulse-ui-native/primitives@3.0.0
  - @impulse-ui-native/core@3.0.0

## 2.9.0

### Patch Changes

- 3b7df07: Add a Badge primitive with semantic tones, control-style variants, Input-style prefix and suffix addons, theme tokens, and Storybook documentation. Standardize token-dependent React Native styles on `useThemedStyles` across affected components.
- Updated dependencies [3b7df07]
  - @impulse-ui-native/primitives@2.9.0
  - @impulse-ui-native/theme@2.9.0
  - @impulse-ui-native/icon@2.9.0
  - @impulse-ui-native/core@2.9.0

## 2.8.0

### Minor Changes

- e899f0a: Add an accessible compound Accordion with single and multiple expansion, animated height, keyboard navigation, and nested content support. Forward refs through the shared Pressable primitive, use it consistently across package implementations, and stabilize render-created callbacks, styles, derived structures, and hook result objects across the affected controls.

### Patch Changes

- Updated dependencies [385bd4f]
- Updated dependencies [6a63019]
- Updated dependencies [e899f0a]
- Updated dependencies [1256f76]
- Updated dependencies [598ea3d]
- Updated dependencies [c6fb200]
  - @impulse-ui-native/primitives@2.8.0
  - @impulse-ui-native/theme@2.8.0
  - @impulse-ui-native/core@2.8.0
  - @impulse-ui-native/icon@2.8.0
