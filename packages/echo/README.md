# @impulse-ui-native/echo

A small typed event channel used for communication between otherwise disconnected parts of Impulse UI Native.

## Installation

```sh
pnpm add @impulse-ui-native/echo
```

## Main exports

- `EchoInstance` is the shared event emitter singleton.
- `useEchoListener` subscribes for the lifetime of a React component and cleans up on unmount.
- `useEchoEmitter` emits a typed event from a component.
- `EchoEvents`, `EchoEventNames`, and `EchoListenerEntry` describe the event map and listeners.

The built-in event map currently powers the layer system with `addLayer` and `removeLayer` events.

## Usage

```tsx
import { useEchoListener } from "@impulse-ui-native/echo";

function LayerObserver() {
  useEchoListener("removeLayer", ({ id }) => {
    console.log("Layer closed", id);
  });

  return null;
}
```

For non-component code, call `EchoInstance.emit` or `EchoInstance.subscribe` directly. `subscribe` returns its cleanup function.

`EchoEvents` is an exported interface, so applications can add their own strongly typed events with TypeScript module augmentation.
