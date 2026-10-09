# @impulse-ui-native/popover

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
