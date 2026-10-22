# @impulse-ui-native/core

Local package version: 11.0.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

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

`merge` preserves array values as arrays when applying deep partial overrides,
including indexed overrides inside nested theme palettes.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/core/src/hooks/index.ts

```tsx
export { useEventCallback } from "./use-event-callback.hook";
export { useWhyDidYouUpdate } from "./use-why-did-you-update.hook";
export { useControllableState } from "./use-controllable-state.hook";
export { useIsOpen } from "./use-is-open.hook";
export { useTimer } from "./use-timer.hook";
export { useBackHandler } from "./use-back-handler.hook";
```

### packages/core/src/hooks/use-back-handler.hook.ts

```tsx
import { useEffect } from "react";
import { BackHandler } from "react-native";

import { useEventCallback } from "./use-event-callback.hook";

export function useBackHandler(callback: () => boolean, enabled = true): void {
  const handleBack = useEventCallback(callback);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const listener = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBack,
    );

    return () => listener.remove();
  }, [enabled, handleBack]);
}
```

### packages/core/src/hooks/use-controllable-state.hook.ts

```tsx
import type { SetStateAction } from "react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

import { resolverStateSetter } from "../utils";

interface UseControllableStateProps<Value> {
  prop?: Value;
  defaultProp?: Value;
  onChange?: (value: Value) => void;
}

export function useControllableState<Value>(props: {
  prop: Value;
  defaultProp?: Value;
  onChange?: (value: Value) => void;
}): [Value, (nextValue: SetStateAction<Value>) => void];

export function useControllableState<Value>(props: {
  prop?: Value;
  defaultProp: Value;
  onChange?: (value: Value) => void;
}): [Value, (nextValue: SetStateAction<Value>) => void];

export function useControllableState<Value>(props: {
  prop?: Value;
  defaultProp?: Value;
  onChange?: (value: Value) => void;
}): [Value | undefined, (nextValue: SetStateAction<Value>) => void];

export function useControllableState<Value>({
  prop,
  defaultProp,
  onChange,
}: UseControllableStateProps<Value>): [
  Value | undefined,
  (nextValue: SetStateAction<Value>) => void,
] {
  const [uncontrolledProp, setUncontrolledProp] = useState<Value | undefined>(
    defaultProp,
  );

  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;

  const valueRef = useRef<Value | undefined>(value);
  const isControlledRef = useRef(isControlled);
  const onChangeRef = useRef(onChange);

  const setValue = useCallback((nextValue: SetStateAction<Value>) => {
    const setter = resolverStateSetter(nextValue);
    const computedValue = setter(valueRef.current as Value);

    if (computedValue !== valueRef.current) {
      // Consecutive updates can arrive before React renders (for example, a drag
      // followed by release). Resolve each update against the latest request.
      valueRef.current = computedValue;

      if (!isControlledRef.current) {
        setUncontrolledProp(computedValue);
      }

      onChangeRef.current?.(computedValue);
    }
  }, []);

  useLayoutEffect(() => {
    valueRef.current = value;
    isControlledRef.current = isControlled;
    onChangeRef.current = onChange;
  });

  return [value, setValue];
}
```

### packages/core/src/hooks/use-event-callback.hook.ts

```tsx
import { useCallback, useRef } from "react";

export function useEventCallback<Handler extends (...args: any[]) => any>(
  handler: Handler,
) {
  const handlerRef = useRef<Handler>(handler);

  handlerRef.current = handler;

  return useCallback((...args: Parameters<Handler>): ReturnType<Handler> => {
    return handlerRef.current(...args);
  }, []);
}
```

### packages/core/src/hooks/use-is-open.hook.ts

```tsx
import { useCallback, useMemo, useState } from "react";

interface UseIsOpenProps {
  default?: boolean;
}

export function useIsOpen(props?: UseIsOpenProps) {
  const [isOpen, setIsOpen] = useState<boolean>(Boolean(props?.default));
  const [isClosed, setIsClosed] = useState<boolean>(!props?.default);

  const open = useCallback(() => {
    setIsClosed(false);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const finishClose = useCallback(() => {
    setIsClosed(true);
  }, []);

  const toggle = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [close, isOpen, open]);

  return useMemo(
    () => ({
      isOpen,
      isClosed,
      open,
      close,
      toggle,
      finishClose,
    }),
    [close, finishClose, isClosed, isOpen, open, toggle],
  );
}
```

### packages/core/src/hooks/use-timer.hook.ts

```tsx
import { useEffect } from "react";
import { AppState } from "react-native";

import type { UseTimerOptions } from "../types";
import { useEventCallback } from "./use-event-callback.hook";

export function useTimer({
  duration,
  callback,
  enabled = true,
  pauseOnBackground = false,
}: UseTimerOptions): void {
  const execute = useEventCallback(callback);

  useEffect(() => {
    if (!enabled || !Number.isFinite(duration) || duration <= 0) {
      return;
    }

    let remaining = duration;
    let startedAt = 0;
    let finished = false;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    const pause = () => {
      if (timeout === undefined) {
        return;
      }

      clearTimeout(timeout);

      timeout = undefined;
      remaining = Math.max(0, remaining - (Date.now() - startedAt));
    };

    const resume = () => {
      if (finished || timeout !== undefined) {
        return;
      }

      startedAt = Date.now();
      timeout = setTimeout(() => {
        if (finished) {
          return;
        }

        finished = true;
        timeout = undefined;

        execute();
      }, remaining);
    };

    const subscription = pauseOnBackground
      ? AppState.addEventListener("change", (state) => {
          if (state === "active") {
            resume();
          } else {
            pause();
          }
        })
      : undefined;

    if (!pauseOnBackground || AppState.currentState === "active") {
      resume();
    }

    return () => {
      finished = true;

      pause();
      subscription?.remove();
    };
  }, [enabled, duration, pauseOnBackground, execute]);
}
```

### packages/core/src/hooks/use-why-did-you-update.hook.ts

```tsx
import { useEffect, useRef } from "react";

type Props = Record<string, any>;

export function useWhyDidYouUpdate(name: string, props: Props) {
  const previousProps = useRef<Props>(null);

  useEffect(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({
        ...previousProps.current,
        ...props,
      });

      const changes: Record<string, { from: any; to: any }> = {};

      allKeys.forEach((key) => {
        if (previousProps.current![key] !== props[key]) {
          changes[key] = {
            from: previousProps.current![key],
            to: props[key],
          };
        }
      });

      if (Object.keys(changes).length) {
        console.log("[why-did-you-update]", name, changes);
      }
    }

    previousProps.current = props;
  });
}
```

### packages/core/src/index.ts

```tsx
export * from "./hooks";
export * from "./utils";
export * from "./types";
```

### packages/core/src/types/index.ts

```tsx
export * from "./utils.types";
export * from "./use-timer.types";
```

### packages/core/src/types/use-timer.types.ts

```tsx
export interface UseTimerOptions {
  /** Milliseconds before execution. Non-positive or non-finite values disable the timer. */
  duration: number;
  callback: () => void;

  /** Disabling cancels the countdown; enabling starts a fresh duration. */
  enabled?: boolean;

  /** Pause while the native app is inactive and resume with the remaining duration. */
  pauseOnBackground?: boolean;
}
```

### packages/core/src/types/utils.types.ts

```tsx
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object
    ? T[P] extends (...args: any) => any
      ? T[P]
      : DeepPartial<T[P]>
    : T[P];
};
```

### packages/core/src/utils/hook.utils.ts

```tsx
import { SetStateAction } from "react";

export function resolverStateSetter<Value>(nextValue: SetStateAction<Value>) {
  if (typeof nextValue === "function") {
    return nextValue as (value: Value) => Value;
  }

  return () => nextValue;
}
```

### packages/core/src/utils/index.ts

```tsx
export * from "./merge.utils";
export * from "./uuid.utils";
export * from "./hook.utils";
export * from "./memo.utils";
```

### packages/core/src/utils/memo.utils.ts

```tsx
import type { ComponentType } from "react";
import { memo as reactMemo } from "react";

export function memo<T extends ComponentType<any>>(component: T): T {
  return reactMemo(component) as unknown as T;
}
```

### packages/core/src/utils/merge.utils.ts

```tsx
import { DeepPartial } from "../types";

export function isObject<Target>(value: Target | undefined) {
  return typeof value === "object";
}

export function merge<Target>(target: Target, source?: DeepPartial<Target>) {
  if (!source) {
    return target;
  }

  const result = (
    Array.isArray(target) ? [...target] : { ...target }
  ) as Target;

  for (const key in source) {
    if (!Object.prototype.hasOwnProperty.call(source, key)) {
      continue;
    }

    const sourceValue = source[key];
    const targetValue = target[key];

    if (isObject(sourceValue)) {
      result[key] = merge(targetValue, sourceValue);
    } else {
      result[key] = sourceValue as Target[typeof key];
    }
  }

  return result;
}
```

### packages/core/src/utils/uuid.utils.ts

```tsx
export function uuid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}
```
