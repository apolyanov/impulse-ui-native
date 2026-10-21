# @impulse-ui-native/switch

## 11.1.0

### Patch Changes

- Updated dependencies [de8bfb9]
  - @impulse-ui-native/primitives@11.1.0
  - @impulse-ui-native/core@11.1.0
  - @impulse-ui-native/theme@11.1.0

## 11.0.1

### Patch Changes

- @impulse-ui-native/core@11.0.1
- @impulse-ui-native/primitives@11.0.1
- @impulse-ui-native/theme@11.0.1

## 11.0.0

### Patch Changes

- 91a8f78: Remove ignored native animation dependency arrays to avoid Reanimated warnings.
- Updated dependencies [4aa2862]
- Updated dependencies [75fabf6]
  - @impulse-ui-native/theme@11.0.0
  - @impulse-ui-native/primitives@11.0.0
  - @impulse-ui-native/core@11.0.0

## 10.0.0

### Patch Changes

- ffa7afb: Add shared Control.Field, Control.Trigger, and Control.Icon composition and
  shared overlay timing. Reuse picker draft handling, preserve calendar clipping,
  and remove redundant wrappers, memoization, style flattening, and icon variant
  map construction. Correct style-prop caching and retain compatible date-guard
  aliases. Remove legacy text, variant, action, isEmpty, and error props from EmptyView
  and ErrorView. These standalone containers now accept only View props, children,
  and contentContainerStyle; use DataView for state selection and configured
  details.
- Updated dependencies
- Updated dependencies [a80ff6d]
- Updated dependencies [ffa7afb]
  - @impulse-ui-native/primitives@10.0.0
  - @impulse-ui-native/theme@10.0.0
  - @impulse-ui-native/core@10.0.0

## 9.1.2

### Patch Changes

- 0f2d6de: Publish compiled React Native entry points while preserving source exports for instant workspace development in Storybook and the playground.
- Updated dependencies [0f2d6de]
  - @impulse-ui-native/core@9.1.2
  - @impulse-ui-native/primitives@9.1.2
  - @impulse-ui-native/theme@9.1.2

## 9.1.1

### Patch Changes

- Updated dependencies [29ca8cf]
  - @impulse-ui-native/theme@9.1.1
  - @impulse-ui-native/primitives@9.1.1
  - @impulse-ui-native/core@9.1.1

## 9.1.0

### Patch Changes

- Updated dependencies [bffa719]
  - @impulse-ui-native/theme@9.1.0
  - @impulse-ui-native/primitives@9.1.0
  - @impulse-ui-native/core@9.1.0

## 9.0.0

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

### Patch Changes

- Updated dependencies [8873b55]
  - @impulse-ui-native/theme@3.0.0
  - @impulse-ui-native/primitives@3.0.0
  - @impulse-ui-native/core@3.0.0

## 2.9.0

### Patch Changes

- Updated dependencies [3b7df07]
  - @impulse-ui-native/primitives@2.9.0
  - @impulse-ui-native/theme@2.9.0
  - @impulse-ui-native/core@2.9.0

## 2.8.0

### Patch Changes

- e899f0a: Add an accessible compound Accordion with single and multiple expansion, animated height, keyboard navigation, and nested content support. Forward refs through the shared Pressable primitive, use it consistently across package implementations, and stabilize render-created callbacks, styles, derived structures, and hook result objects across the affected controls.
- c6fb200: Add a token-aware Spinner primitive and use it across button, field, and switch loading states.
- Updated dependencies [385bd4f]
- Updated dependencies [6a63019]
- Updated dependencies [e899f0a]
- Updated dependencies [1256f76]
- Updated dependencies [598ea3d]
- Updated dependencies [c6fb200]
  - @impulse-ui-native/primitives@2.8.0
  - @impulse-ui-native/theme@2.8.0
  - @impulse-ui-native/core@2.8.0

## 2.7.0

### Minor Changes

- 6a3c644: Add an accessible, token-aware Switch component with controlled and uncontrolled state, loading and disabled behavior, RTL support, and reduced-motion-aware Reanimated transitions.

### Patch Changes

- Updated dependencies [3c5cb51]
- Updated dependencies [6a3c644]
- Updated dependencies [683305b]
  - @impulse-ui-native/theme@2.7.0
  - @impulse-ui-native/primitives@2.7.0
  - @impulse-ui-native/core@2.7.0

This package has not been released.
