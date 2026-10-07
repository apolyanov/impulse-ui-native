# @impulse-ui-native/toast

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
