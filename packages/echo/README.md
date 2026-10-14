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

## Usage

Add application events to `EchoEvents` with TypeScript module augmentation. Keep
the declaration in a file included by your application's `tsconfig.json`.

```tsx
import { EchoInstance, useEchoListener } from "@impulse-ui-native/echo";

declare module "@impulse-ui-native/echo" {
  interface EchoEvents {
    "profile.updated": { userId: string; displayName: string };
  }
}

function ProfileObserver() {
  useEchoListener("profile.updated", (data) => {
    // Both fields are inferred as strings from EchoEvents.
    console.log("Profile updated", data.userId, data.displayName);
  });

  return null;
}

// Emit after a successful profile save, including from non-component code.
EchoInstance.emit("profile.updated", {
  userId: "user-123",
  displayName: "Alex",
});
```

The event name determines the payload type for both emitting and subscribing.
TypeScript rejects unknown event names and payloads that do not match the event
map.

For non-component code, call `EchoInstance.emit` or `EchoInstance.subscribe` directly. `subscribe` returns its cleanup function.
