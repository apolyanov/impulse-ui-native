# @impulse-ui-native/modal

## 11.2.0

### Patch Changes

- Updated dependencies [5c30476]
  - @impulse-ui-native/primitives@11.2.0
  - @impulse-ui-native/core@11.2.0
  - @impulse-ui-native/icon@11.2.0
  - @impulse-ui-native/overlay@11.2.0
  - @impulse-ui-native/theme@11.2.0

## 11.1.0

### Patch Changes

- Updated dependencies [de8bfb9]
  - @impulse-ui-native/primitives@11.1.0
  - @impulse-ui-native/core@11.1.0
  - @impulse-ui-native/icon@11.1.0
  - @impulse-ui-native/overlay@11.1.0
  - @impulse-ui-native/theme@11.1.0

## 11.0.1

### Patch Changes

- @impulse-ui-native/core@11.0.1
- @impulse-ui-native/icon@11.0.1
- @impulse-ui-native/overlay@11.0.1
- @impulse-ui-native/primitives@11.0.1
- @impulse-ui-native/theme@11.0.1

## 11.0.0

### Patch Changes

- Updated dependencies [4aa2862]
- Updated dependencies [75fabf6]
  - @impulse-ui-native/theme@11.0.0
  - @impulse-ui-native/icon@11.0.0
  - @impulse-ui-native/primitives@11.0.0
  - @impulse-ui-native/core@11.0.0
  - @impulse-ui-native/overlay@11.0.0

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
  - @impulse-ui-native/overlay@10.0.0
  - @impulse-ui-native/icon@10.0.0
  - @impulse-ui-native/core@10.0.0

## 9.1.2

### Patch Changes

- 0f2d6de: Publish compiled React Native entry points while preserving source exports for instant workspace development in Storybook and the playground.
- Updated dependencies [0f2d6de]
  - @impulse-ui-native/core@9.1.2
  - @impulse-ui-native/overlay@9.1.2
  - @impulse-ui-native/primitives@9.1.2
  - @impulse-ui-native/theme@9.1.2
  - @impulse-ui-native/icon@9.1.2

## 9.1.1

### Patch Changes

- Updated dependencies [29ca8cf]
  - @impulse-ui-native/theme@9.1.1
  - @impulse-ui-native/icon@9.1.1
  - @impulse-ui-native/primitives@9.1.1
  - @impulse-ui-native/core@9.1.1
  - @impulse-ui-native/overlay@9.1.1

## 9.1.0

### Patch Changes

- Updated dependencies [bffa719]
  - @impulse-ui-native/theme@9.1.0
  - @impulse-ui-native/icon@9.1.0
  - @impulse-ui-native/primitives@9.1.0
  - @impulse-ui-native/core@9.1.0
  - @impulse-ui-native/overlay@9.1.0

## 9.0.0

### Patch Changes

- Updated dependencies [91eba29]
- Updated dependencies [91eba29]
- Updated dependencies [cf6e434]
  - @impulse-ui-native/theme@9.0.0
  - @impulse-ui-native/primitives@9.0.0
  - @impulse-ui-native/core@9.0.0
  - @impulse-ui-native/icon@9.0.0
  - @impulse-ui-native/overlay@9.0.0

## 8.3.0

### Patch Changes

- Updated dependencies [a4b32bf]
  - @impulse-ui-native/theme@8.3.0
  - @impulse-ui-native/icon@8.3.0
  - @impulse-ui-native/primitives@8.3.0
  - @impulse-ui-native/core@8.3.0
  - @impulse-ui-native/overlay@8.3.0

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
  - @impulse-ui-native/icon@8.2.0
  - @impulse-ui-native/overlay@8.2.0

## 8.1.0

### Patch Changes

- Updated dependencies [be262a8]
  - @impulse-ui-native/theme@8.1.0
  - @impulse-ui-native/icon@8.1.0
  - @impulse-ui-native/primitives@8.1.0
  - @impulse-ui-native/core@8.1.0
  - @impulse-ui-native/overlay@8.1.0

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
  - @impulse-ui-native/overlay@8.0.0
  - @impulse-ui-native/theme@8.0.0

## 7.0.1

### Patch Changes

- @impulse-ui-native/core@7.0.1
- @impulse-ui-native/icon@7.0.1
- @impulse-ui-native/overlay@7.0.1
- @impulse-ui-native/primitives@7.0.1
- @impulse-ui-native/theme@7.0.1

## 7.0.0

### Minor Changes

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

### Patch Changes

- Updated dependencies [7d5a077]
- Updated dependencies [d20d471]
- Updated dependencies [9398849]
- Updated dependencies [2a7db15]
- Updated dependencies [51a7e4d]
  - @impulse-ui-native/theme@7.0.0
  - @impulse-ui-native/overlay@7.0.0
  - @impulse-ui-native/icon@7.0.0
  - @impulse-ui-native/primitives@7.0.0
  - @impulse-ui-native/core@7.0.0
