# @impulse-ui-native/core

Framework-level hooks and small utilities shared across Impulse UI Native.

## Installation

```sh
pnpm add @impulse-ui-native/core
```

## Main exports

- `useControllableState` supports controlled and uncontrolled component state.
- `useEventCallback` returns a stable callback that uses the latest handler.
- `useTimer` runs the latest callback once after a duration, with cancellation and optional native background pausing.
- `useBackHandler` subscribes to Android hardware Back with the latest callback and automatic cleanup.
- `useIsOpen` manages common open/close state.
- `useWhyDidYouUpdate` helps inspect prop changes during development.
- `merge` recursively applies a `DeepPartial` value to a target object.
- `uuid` creates unique identifiers.
- `resolverStateSetter` resolves React value-or-updater state arguments.
- `DeepPartial` is the recursive partial type used by theme overrides.

## Example

```tsx
import { useControllableState } from "@impulse-ui-native/core";

function Disclosure({ open, onOpenChange }) {
  const [isOpen, setIsOpen] = useControllableState({
    prop: open,
    defaultProp: false,
    onChange: onOpenChange,
  });

  // Render using isOpen and setIsOpen.
}
```

This is a low-level package. Install `@impulse-ui-native/toolkit` when you want the complete UI system from one entry point.

## Hardware Back

```tsx
useBackHandler(() => {
  dismiss();

  return true;
}, open);
```

Return `true` to consume the press or `false` to let other handlers and the native default continue. The optional `enabled` argument defaults to true. Disabling or unmounting removes the listener; callback changes use the latest handler without resubscribing.

## Timer

```tsx
useTimer({
  duration: 3000,
  callback: dismiss,
  enabled: open,
  pauseOnBackground: true,
});
```

`enabled` defaults to true and `pauseOnBackground` defaults to false. Non-positive or non-finite durations disable the timer. Changing the callback preserves the countdown and executes the latest handler. Disabling or unmounting cancels it; re-enabling or changing the duration/background policy starts a fresh countdown. With background pausing enabled, time spent inactive does not count toward the duration. A completed timer remains finished until restarted by one of those changes.
