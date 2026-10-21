# @impulse-ui-native/popover

## 11.2.0

### Patch Changes

- Updated dependencies [5c30476]
  - @impulse-ui-native/primitives@11.2.0
  - @impulse-ui-native/core@11.2.0
  - @impulse-ui-native/icon@11.2.0
  - @impulse-ui-native/portal@11.2.0
  - @impulse-ui-native/theme@11.2.0

## 11.1.0

### Patch Changes

- Updated dependencies [de8bfb9]
  - @impulse-ui-native/primitives@11.1.0
  - @impulse-ui-native/core@11.1.0
  - @impulse-ui-native/icon@11.1.0
  - @impulse-ui-native/portal@11.1.0
  - @impulse-ui-native/theme@11.1.0

## 11.0.1

### Patch Changes

- @impulse-ui-native/core@11.0.1
- @impulse-ui-native/icon@11.0.1
- @impulse-ui-native/portal@11.0.1
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
  - @impulse-ui-native/portal@11.0.0

## 10.0.0

### Patch Changes

- Support the React Native 0.88 strict TypeScript API and Gesture Handler 3 used by
  Expo SDK 58. Update native ref, style, gesture, and text-input event declarations,
  and normalize an omitted FlatList initial index to undefined.
- Updated dependencies
- Updated dependencies [a80ff6d]
- Updated dependencies [ffa7afb]
  - @impulse-ui-native/primitives@10.0.0
  - @impulse-ui-native/theme@10.0.0
  - @impulse-ui-native/icon@10.0.0
  - @impulse-ui-native/core@10.0.0
  - @impulse-ui-native/portal@10.0.0

## 9.1.2

### Patch Changes

- 0f2d6de: Publish compiled React Native entry points while preserving source exports for instant workspace development in Storybook and the playground.
- Updated dependencies [0f2d6de]
  - @impulse-ui-native/core@9.1.2
  - @impulse-ui-native/portal@9.1.2
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
  - @impulse-ui-native/portal@9.1.1

## 9.1.0

### Patch Changes

- Updated dependencies [bffa719]
  - @impulse-ui-native/theme@9.1.0
  - @impulse-ui-native/icon@9.1.0
  - @impulse-ui-native/primitives@9.1.0
  - @impulse-ui-native/core@9.1.0
  - @impulse-ui-native/portal@9.1.0

## 9.0.0

### Patch Changes

- Updated dependencies [91eba29]
- Updated dependencies [91eba29]
- Updated dependencies [cf6e434]
  - @impulse-ui-native/theme@9.0.0
  - @impulse-ui-native/primitives@9.0.0
  - @impulse-ui-native/core@9.0.0
  - @impulse-ui-native/icon@9.0.0
  - @impulse-ui-native/portal@9.0.0

## 8.3.0

### Patch Changes

- Updated dependencies [a4b32bf]
  - @impulse-ui-native/theme@8.3.0
  - @impulse-ui-native/icon@8.3.0
  - @impulse-ui-native/primitives@8.3.0
  - @impulse-ui-native/core@8.3.0
  - @impulse-ui-native/portal@8.3.0

## 8.2.0

### Patch Changes

- Updated dependencies [0cd457e]
  - @impulse-ui-native/theme@8.2.0
  - @impulse-ui-native/primitives@8.2.0
  - @impulse-ui-native/core@8.2.0
  - @impulse-ui-native/icon@8.2.0
  - @impulse-ui-native/portal@8.2.0

## 8.1.0

### Patch Changes

- Updated dependencies [be262a8]
  - @impulse-ui-native/theme@8.1.0
  - @impulse-ui-native/icon@8.1.0
  - @impulse-ui-native/primitives@8.1.0
  - @impulse-ui-native/core@8.1.0
  - @impulse-ui-native/portal@8.1.0

## 8.0.0

### Patch Changes

- Updated dependencies [f67c73d]
  - @impulse-ui-native/primitives@8.0.0
  - @impulse-ui-native/core@8.0.0
  - @impulse-ui-native/icon@8.0.0
  - @impulse-ui-native/portal@8.0.0
  - @impulse-ui-native/theme@8.0.0

## 7.0.1

### Patch Changes

- @impulse-ui-native/core@7.0.1
- @impulse-ui-native/icon@7.0.1
- @impulse-ui-native/portal@7.0.1
- @impulse-ui-native/primitives@7.0.1
- @impulse-ui-native/theme@7.0.1

## 7.0.0

### Major Changes

- 2a7db15: Remove Popover's surface prop, exported PopoverSurface type, and surface context
  logic. Use a single flat secondary panel without a default shadow. Title and
  Description consume their own theme colors without context.

  Flatten components.popover.surfaces.elevated into the panel tokens, using
  backgroundColor for the former value field. Move inverse hint styling into
  components.popover.tooltip, with color for its text. Tooltip retains its compact
  inverse presentation and sizes naturally through its own content styles.

### Minor Changes

- bf78005: Compose Popover's convenience API with title, custom header, footer, and a default
  neutral close icon with hideClose. Add child-only Header and Footer parts.

### Patch Changes

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
  - @impulse-ui-native/theme@7.0.0
  - @impulse-ui-native/icon@7.0.0
  - @impulse-ui-native/primitives@7.0.0
  - @impulse-ui-native/core@7.0.0
  - @impulse-ui-native/portal@7.0.0

## 6.3.1

### Patch Changes

- 09c3cf2: Remove arrows from Popover and Tooltip panels and simplify their positioning geometry. Deprecate the ignored arrowSize theme token while retaining it for compatibility with existing themes.
- Updated dependencies [09c3cf2]
  - @impulse-ui-native/theme@6.3.1
  - @impulse-ui-native/primitives@6.3.1
  - @impulse-ui-native/core@6.3.1
  - @impulse-ui-native/portal@6.3.1

## 6.3.0

### Patch Changes

- Updated dependencies [9f7f2a2]
  - @impulse-ui-native/theme@6.3.0
  - @impulse-ui-native/primitives@6.3.0
  - @impulse-ui-native/core@6.3.0
  - @impulse-ui-native/portal@6.3.0

## 6.2.0

### Minor Changes

- 5552924: Add token-driven Tooltip and compound Popover components with Portal rendering, anchor measurement, safe-area collision handling, and native press/long-press triggers.

### Patch Changes

- 5552924: Add a shared useBackHandler hook with optional enablement, latest callbacks, and subscription cleanup. Reuse it for Popover's Android Back dismissal.
- 5552924: Add a shared one-shot useTimer hook with cancellation and optional native background pausing. Reuse it for Toast and Tooltip dismissal, and prevent completed timers from restarting on foregrounding.
- Updated dependencies [5552924]
- Updated dependencies [5552924]
- Updated dependencies [5552924]
  - @impulse-ui-native/theme@6.2.0
  - @impulse-ui-native/core@6.2.0
  - @impulse-ui-native/primitives@6.2.0
  - @impulse-ui-native/portal@6.2.0
