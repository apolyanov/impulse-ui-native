# @impulse-ui-native/overlay

## 7.0.1

### Patch Changes

- @impulse-ui-native/core@7.0.1

## 7.0.0

### Minor Changes

- 51a7e4d: Add a provider-independent useOverlayLifecycle hook with lifecycle status,
  readiness, guarded transition completion, and lifecycle notifications. Track
  hosted status through onStatusChange and expose useOverlayStatus for observers.

### Patch Changes

- @impulse-ui-native/core@7.0.0

## 6.3.1

## 6.3.0

## 6.2.0

### Minor Changes

- 48403d8: Export OverlayOrder and use its enum members for overlay layer ordering instead of string literals. Update Toast to use OverlayOrder.NewestFirst.

## 6.1.0

### Minor Changes

- 3940c3f: Expose useOverlayLayer to look up an overlay's index by ID and registered component type, in oldest-first or newest-first order. Animate older toasts downward and shrink them behind the newest at both placements with five visual levels; additional toasts share the deepest scale and offset. Add theme tokens for the stack limit and scale step.

## 6.0.0

## 5.0.0

## 4.0.0

## 3.0.0

## 2.9.0

## 2.8.0

## 2.7.0

## 2.6.0

## 2.5.0

### Minor Changes

- Theme tokens cleanup

## 2.4.0

### Minor Changes

- fe0bf8e: Replace the layers registry with a typed overlay store, provider, and host API.
