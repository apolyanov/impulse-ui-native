# @impulse-ui-native/core

Framework-level hooks and small utilities shared across Impulse UI Native.

## Installation

```sh
pnpm add @impulse-ui-native/core
```

## Main exports

- `useControllableState` supports controlled and uncontrolled component state.
- `useEventCallback` returns a stable callback that uses the latest handler.
- `useIsOpen` manages common open/close state.
- `useWhyDidYouUpdate` helps inspect prop changes during development.
- `merge` recursively applies a `DeepPartial` value to a target object.
- `uuid` creates identifiers used by the layer registry.
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
