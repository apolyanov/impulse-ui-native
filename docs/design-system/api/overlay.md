# @impulse-ui-native/overlay

Local package version: 11.0.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/overlay

Typed, app-wide overlay registration and rendering for Impulse UI Native.

## Main exports

- `OverlayStore` registers, opens, closes, and removes overlay entries.
- `OverlayProvider` makes a store available to the component tree.
- `OverlayHost` renders the active overlay stack.
- `useOverlayContext` provides access to the current store.
- `useOverlayLifecycle` tracks component lifecycle status without requiring a provider.
- `useOverlayTiming({ enterDuration, exitDuration })` supplies a shared
  Reanimated progress value and lifecycle handlers for timed entry/exit.
- `useOverlayStatus(id)` observes the reported status of a hosted overlay.
- `useOverlayLayer(id, Component?, order?)` returns the entry's opening-order index among entries with the same registered component. Omit `Component` to infer it from the ID. The default `OverlayOrder.OldestFirst` order gives newer entries higher indices; `OverlayOrder.NewestFirst` gives the newest entry index zero. A missing ID returns `-1`. Closing entries remain counted until removed.

## Usage

Install `react-native-reanimated` and `react-native-worklets` alongside this
package and complete their host-application setup. The shared timing helper
requires Reanimated 4 or newer and Worklets 0.5 or newer.

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

## Shared component lifecycle

`useOverlayLifecycle(props, options?)` tracks `closed`, `opening`, `open`, and
`closing` independently of OverlayProvider. `open` is the requested state; the
returned `status` is the current lifecycle state. Opening includes preparation
such as Flyout's initial layout measurement.

The hook returns status, mounted, interactive, close, and completeTransition.
`mounted` stays true through exit; `interactive` is true while opening or open
and ready. Each accepted transition emits onStatusChange(id, status) and the
corresponding existing lifecycle callback. Initially closed components do not
emit open or close callbacks.

Supply `onEnter(transitionId, complete)` and `onExit(transitionId, complete)` in
the options. The component owns animation values and configuration. After a
successful animation, call `complete(transitionId)` on the React Native thread.
The hook rejects obsolete or repeated completions, including after unmount.
Without an animation handler, that transition completes immediately.

For Reanimated components, completion is typically bridged with Worklets:

```tsx
const enter = useCallback<OverlayTransitionHandler>(
  (transitionId, complete) => {
    progress.set(
      withTiming(1, { duration: 180 }, (finished) => {
        if (finished) {
          scheduleOnRN(complete, transitionId);
        }
      }),
    );
  },
  [progress],
);

const options = useMemo(
  () => ({ onEnter: enter, onExit: exit }),
  [enter, exit],
);
const lifecycle = useOverlayLifecycle(props, options);
```

The component must cancel its animations on unmount. Use `ready: false` to keep
an opening component mounted while waiting for layout; entry starts when ready
becomes true. Exit handlers must also handle dismissal before readiness, usually
by completing immediately when nothing has appeared. Reopening during exit starts
a fresh transition and prevents the old completion from closing the new one.

Modal, Flyout, and Toast use this shared hook. Modal and Toast share timed
transitions through `useOverlayTiming`; the helper cancels its progress animation
on unmount and bridges successful completion to the React Native thread. Supply
its `options` to `useOverlayLifecycle` and use its `progress` in animated styles.
Custom animation, gestures, and Toast's duration timer remain component-owned.
Flyout enables drag gestures once entry completes so gestures cannot interrupt the entry completion notification.

## Observing hosted status

OverlayHost forwards component status reports into OverlayStore. The store
observes those reports; changing open does not invent an animation status.
`useOverlayStatus(id)` subscribes to the host store and returns the reported
status, or closed for a missing or not-yet-reported entry. This observer requires
OverlayProvider; the shared lifecycle hook itself does not.

Registered components must forward onStatusChange to the shared lifecycle hook
or report it themselves. Registrations may supply their own onStatusChange
callback alongside the host's tracking. Store entries expose their latest optional
status; host removal still happens through onCloseFinished.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/overlay/src/components/index.ts

```tsx
export * from "./overlay-host";
```

### packages/overlay/src/components/overlay-host.tsx

```tsx
import { memo } from "react";

import { useOverlays } from "../hooks";
import { OverlayHostEntry } from "./overlay-host-entry";

export const OverlayHost = memo(function OverlayHost() {
  const overlays = useOverlays();

  return overlays.map((entry, layer) => (
    <OverlayHostEntry key={entry.id} entry={entry} layer={layer} />
  ));
});
```

### packages/overlay/src/contexts/index.ts

```tsx
export * from "./overlay.context";
```

### packages/overlay/src/contexts/overlay.context.ts

```tsx
import { createContext } from "react";

import type { OverlayProviderValue } from "../types";

export const OverlayContext = createContext<OverlayProviderValue | undefined>(
  undefined,
);
```

### packages/overlay/src/hooks/index.ts

```tsx
export * from "./use-overlay-context.hook";
export * from "./use-overlay-layer.hook";
export * from "./use-overlays.hook";
export * from "./use-overlay-lifecycle.hook";
export * from "./use-overlay-status.hook";
export * from "./use-overlay-timing.hook";
```

### packages/overlay/src/hooks/use-overlay-context.hook.ts

```tsx
import { useContext } from "react";

import { OverlayContext } from "../contexts";

export function useOverlayContext() {
  const context = useContext(OverlayContext);

  if (!context) {
    throw new Error("useOverlayContext must be used within OverlayProvider");
  }

  return context;
}
```

### packages/overlay/src/hooks/use-overlay-layer.hook.ts

```tsx
import type { ComponentType } from "react";
import { useMemo } from "react";

import type { OverlayComponentProps, OverlayID } from "../types";
import { OverlayOrder } from "../types";
import { useOverlays } from "./use-overlays.hook";

/** Index within the registered component type; -1 if absent. */
export function useOverlayLayer(
  id: OverlayID,
  Component?: ComponentType<OverlayComponentProps>,
  order: OverlayOrder = OverlayOrder.OldestFirst,
) {
  const overlays = useOverlays();

  return useMemo(() => {
    const component =
      Component ?? overlays.find((entry) => entry.id === id)?.Component;

    const entries = overlays.filter((entry) => entry.Component === component);
    const index = entries.findIndex((entry) => entry.id === id);

    if (index < 0) {
      return -1;
    }

    return order === OverlayOrder.NewestFirst
      ? entries.length - index - 1
      : index;
  }, [overlays, id, Component, order]);
}
```

### packages/overlay/src/hooks/use-overlay-lifecycle.hook.ts

```tsx
import { useEffect, useMemo, useRef, useState } from "react";

import { useEventCallback } from "@impulse-ui-native/core";

import type {
  OverlayLifecycle,
  OverlayLifecycleOptions,
  OverlayLifecycleProps,
  OverlayLifecycleStatus,
} from "../types";

export function useOverlayLifecycle(
  {
    id,
    open = false,
    onOpen,
    onOpenFinished,
    onClose,
    onCloseFinished,
    onStatusChange,
  }: OverlayLifecycleProps,
  { ready = true, onEnter, onExit }: OverlayLifecycleOptions = {},
): OverlayLifecycle {
  const [status, setStatus] = useState<OverlayLifecycleStatus>(
    open ? "opening" : "closed",
  );

  const currentStatus = useRef<OverlayLifecycleStatus>("closed");
  const transitionId = useRef(0);
  const animationStarted = useRef(false);

  const completeTransition = useEventCallback(
    (completedTransitionId: number) => {
      if (transitionId.current !== completedTransitionId) {
        return;
      }

      const previousStatus = currentStatus.current;

      if (previousStatus !== "opening" && previousStatus !== "closing") {
        return;
      }

      const nextStatus = previousStatus === "opening" ? "open" : "closed";
      transitionId.current += 1;
      animationStarted.current = false;
      currentStatus.current = nextStatus;
      setStatus(nextStatus);

      try {
        onStatusChange?.(id, nextStatus);
      } finally {
        if (nextStatus === "open") {
          onOpenFinished?.(id);
        } else {
          onCloseFinished?.(id);
        }
      }
    },
  );

  const startAnimation = useEventCallback(() => {
    const phase = currentStatus.current;

    if (
      animationStarted.current ||
      (phase !== "opening" && phase !== "closing")
    ) {
      return;
    }

    if (phase === "opening" && !ready) {
      return;
    }

    animationStarted.current = true;
    const handler = phase === "opening" ? onEnter : onExit;
    const activeTransitionId = transitionId.current;

    if (handler) {
      handler(activeTransitionId, completeTransition);
    } else {
      completeTransition(activeTransitionId);
    }
  });

  const show = useEventCallback(() => {
    if (currentStatus.current === "open") {
      return;
    }

    if (currentStatus.current === "opening") {
      startAnimation();

      return;
    }

    transitionId.current += 1;
    animationStarted.current = false;
    currentStatus.current = "opening";
    setStatus("opening");

    try {
      try {
        onStatusChange?.(id, "opening");
      } finally {
        onOpen?.(id);
      }
    } finally {
      startAnimation();
    }
  });

  const close = useEventCallback(() => {
    if (currentStatus.current === "closed") {
      return;
    }

    if (currentStatus.current === "closing") {
      startAnimation();

      return;
    }

    transitionId.current += 1;
    animationStarted.current = false;
    currentStatus.current = "closing";
    setStatus("closing");

    try {
      try {
        onStatusChange?.(id, "closing");
      } finally {
        onClose?.(id);
      }
    } finally {
      startAnimation();
    }
  });

  useEffect(() => {
    if (open) {
      show();
    } else {
      close();
    }
  }, [open, show, close]);

  useEffect(() => {
    startAnimation();
  }, [ready, startAnimation]);

  useEffect(() => {
    return () => {
      transitionId.current += 1;
      animationStarted.current = false;
    };
  }, []);

  return useMemo(
    () => ({
      status,
      mounted: status !== "closed",
      interactive: ready && (status === "opening" || status === "open"),
      close,
      completeTransition,
    }),
    [status, ready, close, completeTransition],
  );
}
```

### packages/overlay/src/hooks/use-overlay-status.hook.ts

```tsx
import type { OverlayID, OverlayLifecycleStatus } from "../types";
import { useOverlays } from "./use-overlays.hook";

export function useOverlayStatus(id: OverlayID): OverlayLifecycleStatus {
  const entries = useOverlays();

  return entries.find((entry) => entry.id === id)?.status ?? "closed";
}
```

### packages/overlay/src/hooks/use-overlay-timing.hook.ts

```tsx
import { useEffect, useMemo } from "react";
import {
  cancelAnimation,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import { useEventCallback } from "@impulse-ui-native/core";

import type { OverlayTimingOptions, OverlayTransitionHandler } from "../types";

export function useOverlayTiming({
  enterDuration,
  exitDuration,
}: OverlayTimingOptions) {
  const progress = useSharedValue(0);

  const enter = useEventCallback<OverlayTransitionHandler>(
    (transitionId, complete) => {
      progress.set(
        withTiming(1, { duration: enterDuration }, (finished) => {
          if (finished) {
            scheduleOnRN(complete, transitionId);
          }
        }),
      );
    },
  );
  const exit = useEventCallback<OverlayTransitionHandler>(
    (transitionId, complete) => {
      progress.set(
        withTiming(0, { duration: exitDuration }, (finished) => {
          if (finished) {
            scheduleOnRN(complete, transitionId);
          }
        }),
      );
    },
  );
  const options = useMemo(
    () => ({ onEnter: enter, onExit: exit }),
    [enter, exit],
  );

  useEffect(() => () => cancelAnimation(progress), [progress]);

  return useMemo(() => ({ options, progress }), [options, progress]);
}
```

### packages/overlay/src/hooks/use-overlays.hook.ts

```tsx
import { useMemo, useSyncExternalStore } from "react";

import { useOverlayContext } from "./use-overlay-context.hook";

export function useOverlays() {
  const { store } = useOverlayContext();

  const subscribe = useMemo(() => store.subscribeOverlays(), [store]);

  const getSnapshot = useMemo(() => store.getOverlaysSnapshot(), [store]);

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
```

### packages/overlay/src/index.ts

```tsx
export * from "./components";
export * from "./contexts";
export * from "./hooks";
export * from "./providers";
export * from "./stores";
export * from "./types";
```

### packages/overlay/src/providers/index.ts

```tsx
export * from "./overlay.provider";
```

### packages/overlay/src/providers/overlay.provider.tsx

```tsx
import type { PropsWithChildren } from "react";
import { memo, useMemo } from "react";

import type { OverlayProviderProps } from "../types";
import { OverlayContext } from "../contexts";

export const OverlayProvider = memo(function OverlayProvider(
  props: PropsWithChildren<OverlayProviderProps>,
) {
  const { children, store } = props;

  const value = useMemo(
    () => ({
      store,
    }),
    [store],
  );

  return (
    <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>
  );
});
```

### packages/overlay/src/stores/index.ts

```tsx
export * from "./overlay.store";
```

### packages/overlay/src/stores/overlay.store.ts

```tsx
import type {
  OverlayController,
  OverlayEntry,
  OverlayID,
  OverlayLifecycleStatus,
  OverlayListener,
  OverlayOpenArguments,
  OverlayRegistrationProps,
} from "../types";

export class OverlayStore {
  private readonly listeners = new Set<OverlayListener>();
  private readonly entries = new Map<OverlayID, OverlayEntry>();
  private snapshot: readonly OverlayEntry[] = [];
  private registrationCount = 0;

  subscribeOverlays() {
    return (listener: OverlayListener) => {
      this.listeners.add(listener);

      return () => {
        this.listeners.delete(listener);
      };
    };
  }

  getOverlaysSnapshot() {
    return () => this.snapshot;
  }

  open(entry: OverlayEntry) {
    if (this.entries.has(entry.id)) {
      return;
    }

    this.entries.set(entry.id, entry);
    this.emitChange();
  }

  close(id: OverlayID) {
    const entry = this.entries.get(id);

    if (!entry?.open) {
      return;
    }

    this.entries.set(id, {
      ...entry,
      open: false,
    });

    this.emitChange();
  }

  setStatus(id: OverlayID, status: OverlayLifecycleStatus) {
    const entry = this.entries.get(id);

    if (!entry || entry.status === status) {
      return;
    }

    this.entries.set(id, { ...entry, status });

    this.emitChange();
  }

  remove(id: OverlayID) {
    if (!this.entries.delete(id)) {
      return;
    }

    this.emitChange();
  }

  register<Props extends object = never>(
    registration: OverlayRegistrationProps<Props>,
  ): OverlayController<Props> {
    const id = this.resolveRegistrationID(registration.id, registration.unique);

    return this.createController(id, registration);
  }

  private emitChange() {
    this.snapshot = Array.from(this.entries.values());

    this.listeners.forEach((listener) => listener());
  }

  private resolveRegistrationID(id: OverlayID, unique?: boolean) {
    if (unique) {
      return id;
    }

    return `${id}-${++this.registrationCount}`;
  }

  private createController<Props extends object>(
    id: OverlayID,
    registration: OverlayRegistrationProps<Props>,
  ): OverlayController<Props> {
    const open = (...args: OverlayOpenArguments<Props>) => {
      this.open(this.createEntry(id, registration, args));

      return id;
    };

    return {
      open,
      close: () => {
        this.close(id);
      },
    };
  }

  private createEntry<Props extends object>(
    id: OverlayID,
    registration: OverlayRegistrationProps<Props>,
    args: OverlayOpenArguments<Props>,
  ): OverlayEntry {
    return {
      id,
      open: true,
      Component: registration.Component,
      Content: registration.Content,
      contentProps: args[0],
      title: this.resolveTitle(registration.title, args),
      onOpen: registration.onOpen,
      onOpenFinished: registration.onOpenFinished,
      onClose: registration.onClose,
      onCloseFinished: registration.onCloseFinished,
      onStatusChange: registration.onStatusChange,
    };
  }

  private resolveTitle<Props extends object>(
    title: OverlayRegistrationProps<Props>["title"],
    args: OverlayOpenArguments<Props>,
  ) {
    return typeof title === "function" ? title(...args) : title;
  }
}
```

### packages/overlay/src/types/index.ts

```tsx
export * from "./overlay.types";
export * from "./overlay-lifecycle.types";
```

### packages/overlay/src/types/overlay-lifecycle.types.ts

```tsx
import type { OverlayComponentProps } from "./overlay.types";

export type OverlayLifecycleStatus = "closed" | "opening" | "open" | "closing";

export type OverlayStatusCallback = (
  id: string,
  status: OverlayLifecycleStatus,
) => void;

export type OverlayLifecycleProps = Pick<
  OverlayComponentProps,
  | "id"
  | "open"
  | "onOpen"
  | "onOpenFinished"
  | "onClose"
  | "onCloseFinished"
  | "onStatusChange"
>;

export type OverlayTransitionCompletion = (transitionId: number) => void;

export type OverlayTransitionHandler = (
  transitionId: number,
  complete: OverlayTransitionCompletion,
) => void;

export interface OverlayLifecycleOptions {
  /** Entry waits for readiness; the overlay remains mounted while preparing. */
  ready?: boolean;

  onEnter?: OverlayTransitionHandler;
  onExit?: OverlayTransitionHandler;
}

export interface OverlayTimingOptions {
  enterDuration: number;
  exitDuration: number;
}

export interface OverlayLifecycle {
  status: OverlayLifecycleStatus;
  mounted: boolean;
  interactive: boolean;

  close: () => void;
  completeTransition: OverlayTransitionCompletion;
}
```

### packages/overlay/src/types/overlay.types.ts

```tsx
import type { ComponentType, ElementType, ReactNode } from "react";

import type { OverlayStore } from "../stores";
import type {
  OverlayLifecycleStatus,
  OverlayStatusCallback,
} from "./overlay-lifecycle.types";

export type OverlayID = string;

export enum OverlayOrder {
  OldestFirst = "oldest-first",
  NewestFirst = "newest-first",
}

export type OverlayLifecycleCallback = (id: OverlayID) => void;

export type OverlayListener = () => void;

export interface OverlayProviderProps {
  store: OverlayStore;
}

export interface OverlayProviderValue {
  store: OverlayStore;
}

/**
 * Props shared by every component that can be rendered by an OverlayHost.
 */
export interface OverlayComponentProps {
  id: OverlayID;
  children?: ReactNode;
  open?: boolean;
  layer?: number;
  title?: string;
  onOpen?: OverlayLifecycleCallback;
  onOpenFinished?: OverlayLifecycleCallback;
  onClose?: OverlayLifecycleCallback;
  onCloseFinished?: OverlayLifecycleCallback;
  onStatusChange?: OverlayStatusCallback;
}

export type OverlayOpenArguments<Props extends object> = [Props] extends [never]
  ? []
  : keyof Props extends never
    ? []
    : [props: Props];

export type OverlayTitle<Props extends object> =
  string | ((...args: OverlayOpenArguments<Props>) => string | undefined);

export interface OverlayRegistrationProps<Props extends object = never> {
  id: OverlayID;
  unique?: boolean;
  Component: ComponentType<OverlayComponentProps>;
  Content: ComponentType<Props>;
  title?: OverlayTitle<Props>;
  onOpen?: OverlayLifecycleCallback;
  onOpenFinished?: OverlayLifecycleCallback;
  onClose?: OverlayLifecycleCallback;
  onCloseFinished?: OverlayLifecycleCallback;
  onStatusChange?: OverlayStatusCallback;
}

export type OpenOverlay<Props extends object> = (
  ...args: OverlayOpenArguments<Props>
) => OverlayID;

export interface OverlayController<Props extends object> {
  open: OpenOverlay<Props>;
  close: () => void;
}

export interface OverlayEntry {
  id: OverlayID;
  open: boolean;
  status?: OverlayLifecycleStatus;
  Component: ComponentType<OverlayComponentProps>;
  Content: ElementType;
  contentProps?: object;
  title?: string;
  onOpen?: OverlayLifecycleCallback;
  onOpenFinished?: OverlayLifecycleCallback;
  onClose?: OverlayLifecycleCallback;
  onCloseFinished?: OverlayLifecycleCallback;
  onStatusChange?: OverlayStatusCallback;
}
```
