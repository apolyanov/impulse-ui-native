# @impulse-ui-native/toast

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

### Patch Changes

- 4005900: Migrate Flyout and Toast to the shared overlay lifecycle while retaining their
  component-owned animations, measurement, gestures, and duration timers. Flyout
  requires Reanimated 4 and enables dragging after entry completes.
- 9398849: Align Flyout with the elevated overlay surface, 16-point exposed
  corners and padding, and 20/28 title typography used by Modal. Add theme tokens
  for the title typography. The sheet remains borderless.

  Use an 18-point tertiary close icon in Toast, matching Modal and Popover, with
  dedicated closeIconSize and closeColor tokens independent of semantic icons.

  Allow Popover titles to wrap beside the close control, with a compact long-title
  Storybook example.

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

## 6.3.1

### Patch Changes

- Updated dependencies [09c3cf2]
  - @impulse-ui-native/theme@6.3.1
  - @impulse-ui-native/icon@6.3.1
  - @impulse-ui-native/primitives@6.3.1
  - @impulse-ui-native/core@6.3.1
  - @impulse-ui-native/overlay@6.3.1

## 6.3.0

### Patch Changes

- Updated dependencies [9f7f2a2]
- Updated dependencies [9f7f2a2]
  - @impulse-ui-native/theme@6.3.0
  - @impulse-ui-native/icon@6.3.0
  - @impulse-ui-native/primitives@6.3.0
  - @impulse-ui-native/core@6.3.0
  - @impulse-ui-native/overlay@6.3.0

## 6.2.0

### Patch Changes

- 48403d8: Export OverlayOrder and use its enum members for overlay layer ordering instead of string literals. Update Toast to use OverlayOrder.NewestFirst.
- 5552924: Add a shared one-shot useTimer hook with cancellation and optional native background pausing. Reuse it for Toast and Tooltip dismissal, and prevent completed timers from restarting on foregrounding.
- Updated dependencies [5552924]
- Updated dependencies [48403d8]
- Updated dependencies [5552924]
- Updated dependencies [5552924]
  - @impulse-ui-native/theme@6.2.0
  - @impulse-ui-native/overlay@6.2.0
  - @impulse-ui-native/core@6.2.0
  - @impulse-ui-native/icon@6.2.0
  - @impulse-ui-native/primitives@6.2.0

## 6.1.0

### Patch Changes

- 3940c3f: Expose useOverlayLayer to look up an overlay's index by ID and registered component type, in oldest-first or newest-first order. Animate older toasts downward and shrink them behind the newest at both placements with five visual levels; additional toasts share the deepest scale and offset. Add theme tokens for the stack limit and scale step.
- Updated dependencies [3940c3f]
  - @impulse-ui-native/overlay@6.1.0
  - @impulse-ui-native/theme@6.1.0
  - @impulse-ui-native/icon@6.1.0
  - @impulse-ui-native/primitives@6.1.0
  - @impulse-ui-native/core@6.1.0

## 6.0.0

### Minor Changes

- ce02232: Add token-driven compound Toast notifications using OverlayProvider, with top/bottom placements, timed or persistent dismissal, and actions.

  Provide a ready-made Toast component assembled from child-only composable parts, following Input's composition model.

### Patch Changes

- ce02232: Use Reanimated for toast entry and exit animations, with cancellation-safe lifecycle callbacks. Declare the Reanimated and Worklets runtime peers.
- Updated dependencies [ce02232]
- Updated dependencies [e4de9ad]
  - @impulse-ui-native/theme@6.0.0
  - @impulse-ui-native/primitives@6.0.0
  - @impulse-ui-native/icon@6.0.0
  - @impulse-ui-native/core@6.0.0
  - @impulse-ui-native/overlay@6.0.0

## Unreleased

- Add compound toast notifications integrated with OverlayProvider.
