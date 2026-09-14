# @impulse-ui-native/overlay

Typed, app-wide overlay registration and rendering for Impulse UI Native.

## Main exports

- `OverlayStore` registers, opens, closes, and removes overlay entries.
- `OverlayProvider` makes a store available to the component tree.
- `OverlayHost` renders the active overlay stack.
- `useOverlayContext` provides access to the current store.

## Usage

```tsx
import {
  OverlayHost,
  OverlayProvider,
  OverlayStore,
} from "@impulse-ui-native/overlay";

const overlayStore = new OverlayStore();

<OverlayProvider store={overlayStore}>
  <App />
  <OverlayHost />
</OverlayProvider>;
```

Register a component with `overlayStore.register(...)`. The returned controller exposes `open` and `close` methods, while `OverlayHost` owns removal after the close animation finishes.
