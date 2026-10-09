# @impulse-ui-native/modal

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
