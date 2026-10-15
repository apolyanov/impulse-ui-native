# @impulse-ui-native/echo

Local package version: 9.1.1. This is a repository snapshot, not a claim about the latest published package.

## Package guide

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


## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/echo/src/hooks/index.ts

```tsx
export { useEchoListener } from "./use-echo-listener.hook";
export { useEchoEmitter } from "./use-echo-emitter.hook";
```

### packages/echo/src/hooks/use-echo-emitter.hook.ts

```tsx
import { useEventCallback } from "@impulse-ui-native/core";

import { EchoInstance } from "../singletons";
import { EchoEventNames, EchoEvents } from "../types";

export function useEchoEmitter<Event extends EchoEventNames>(
  event: Event,
  data: EchoEvents[Event],
) {
  return EchoInstance.emit(event, data);
}
```

### packages/echo/src/hooks/use-echo-listener.hook.ts

```tsx
import { useEffect } from "react";

import { EchoInstance } from "../singletons/echo.singleton";
import { EchoEventNames, EchoEvents } from "../types";

export function useEchoListener<Event extends EchoEventNames>(
  event: Event,
  callback: (data: EchoEvents[Event]) => void,
) {
  useEffect(() => {
    return EchoInstance.subscribe(event, callback);
  }, [callback, event]);
}
```

### packages/echo/src/index.ts

```tsx
export * from "./hooks";
export * from "./singletons";
export * from "./types";
```

### packages/echo/src/singletons/echo.singleton.ts

```tsx
import { EchoEventNames, EchoEvents, EchoListenerEntry } from "../types";

class Echo {
  private subscribers: Map<EchoEventNames, EchoListenerEntry[]>;

  constructor() {
    this.subscribers = new Map();
  }

  emit<Event extends EchoEventNames>(event: Event, data: EchoEvents[Event]) {
    this.subscribers.get(event)?.forEach((subscriber) => {
      subscriber.callback(data);
    });
  }

  subscribe<Event extends EchoEventNames>(
    event: Event,
    callback: (data: EchoEvents[Event]) => void,
  ) {
    const subscriberId = this.generateId();

    if (this.subscribers.has(event)) {
      const listeners = this.subscribers.get(event);

      listeners?.push({ id: subscriberId, callback });
    } else {
      this.subscribers.set(event, [{ id: subscriberId, callback }]);
    }

    return () => {
      this.unsubscribe(event, subscriberId);
    };
  }

  private unsubscribe<Event extends EchoEventNames>(event: Event, id: string) {
    if (this.subscribers.has(event)) {
      this.subscribers.set(
        event,
        this.subscribers.get(event)?.filter((entry) => entry.id !== id) ?? [],
      );
    }
  }

  private generateId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}

export const EchoInstance = new Echo();
```

### packages/echo/src/singletons/index.ts

```tsx
export { EchoInstance } from "./echo.singleton";
```

### packages/echo/src/types/echo.types.ts

```tsx
export interface EchoEvents {
  placeholder: unknown;
}

export type EchoEventNames = keyof EchoEvents;

export interface EchoListenerEntry {
  id: string;
  callback: (data: any) => void;
}
```

### packages/echo/src/types/index.ts

```tsx
export * from "./echo.types";
```
