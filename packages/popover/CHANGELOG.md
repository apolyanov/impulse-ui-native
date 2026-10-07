# @impulse-ui-native/popover

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
