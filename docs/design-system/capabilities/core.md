# @impulse-ui-native/core: capability guide

Reuse state, timing and callback behavior in React.

## Setup

- React; native hooks also require React Native. No ThemeProvider.

## Capabilities

- Controlled/uncontrolled state, open state, stable event callbacks and timers.
- Hardware Back subscriptions, deep merging and small utility helpers.

## Boundaries and composition

- Nonvisual package; do not render hooks or utilities as UI.
- useEventCallback intentionally reads the latest handler with stable identity. Timer callback changes preserve countdown; BackHandler uses the current callback without resubscribing.

Exact contracts: [API reference](../api/core.md). Machine facts: [package JSON](core.json) or [full catalog](../capabilities.json).

## Recipes

- [data-service](../recipes.md#data-service)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer           | Range    | Optional |
| -------------- | -------- | -------- |
| `react`        | `>=18`   | No       |
| `react-native` | `>=0.73` | No       |

This package has no directly owned visual components in its public root; use its exports below. Toolkit re-exports the owning packages.

## Public exports

- `DeepPartial` (type)
- `isObject` (value)
  - `<Target>(value: Target \| undefined): value is (Target & object) \| (Target & null)`
- `memo` (value)
  - `<T extends ComponentType<any>>(component: T): T`
- `merge` (value)
  - `<Target>(target: Target, source?: DeepPartial<Target>): Target`
- `resolverStateSetter` (value)
  - `<Value>(nextValue: SetStateAction<Value>): (value: Value) => Value`
- `useBackHandler` (hook)
  - `(callback: () => boolean, enabled?: boolean): void`
- `useControllableState` (hook)
  - `<Value>(props: { prop: Value; defaultProp?: Value; onChange?: (value: Value) => void; }): [Value, (nextValue: SetStateAction<Value>) => void]`
  - `<Value>(props: { prop?: Value; defaultProp: Value; onChange?: (value: Value) => void; }): [Value, (nextValue: SetStateAction<Value>) => void]`
  - `<Value>(props: { prop?: Value; defaultProp?: Value; onChange?: (value: Value) => void; }): [Value \| undefined, (nextValue: SetStateAction<Value>) => void]`
- `useEventCallback` (hook)
  - `<Handler extends (...args: any[]) => any>(handler: Handler): (...args: Parameters<Handler>) => ReturnType<Handler>`
- `useIsOpen` (hook)
  - `(props?: UseIsOpenProps): { isOpen: boolean; isClosed: boolean; open: () => void; close: () => void; toggle: () => void; finishClose: () => void; }`
- `useTimer` (hook)
  - `({ duration, callback, enabled, pauseOnBackground, }: UseTimerOptions): void`
- `UseTimerOptions` (type)
- `useWhyDidYouUpdate` (hook)
  - `(name: string, props: Props): void`
- `uuid` (value)
  - `(): string`
