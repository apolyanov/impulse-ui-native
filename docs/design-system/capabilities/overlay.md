# @impulse-ui-native/overlay: capability guide

Register and coordinate an application-wide overlay stack.

## Setup

- OverlayProvider with a stable OverlayStore and OverlayHost; visual overlays require their own peers/providers.

## Capabilities

- OverlayStore, Provider/Host and typed registration.
- Lifecycle, timing, status, layer and visibility hooks.

## Boundaries and composition

- Create stores outside repeated renders or once with lazy state.
- OverlayHost renders registered overlays; it is separate from the Portal host.

Exact contracts: [API reference](../api/overlay.md). Machine facts: [package JSON](overlay.json) or [full catalog](../capabilities.json).

## Recipes

- [app-shell](../recipes.md#app-shell)
- [notifications](../recipes.md#notifications)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer                      | Range    | Optional |
| ------------------------- | -------- | -------- |
| `react`                   | `>=18`   | No       |
| `react-native`            | `>=0.73` | No       |
| `react-native-reanimated` | `>=4`    | No       |
| `react-native-worklets`   | `>=0.5`  | No       |

### OverlayContext

Source: `packages/overlay/src/contexts/overlay.context.ts:5`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices                      |
| ---------- | -------- | ----------------------------------- |
| `children` | No       | `ReactNode`                         |
| `value`    | Yes      | `OverlayProviderValue \| undefined` |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### OverlayContext.Consumer

Source: `node_modules/@types/react/index.d.ts:680`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices                                            |
| ---------- | -------- | --------------------------------------------------------- |
| `children` | Yes      | `(value: OverlayProviderValue \| undefined) => ReactNode` |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### OverlayContext.Provider

Source: `node_modules/@types/react/index.d.ts:679`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices                      |
| ---------- | -------- | ----------------------------------- |
| `children` | No       | `ReactNode`                         |
| `value`    | Yes      | `OverlayProviderValue \| undefined` |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### OverlayHost

Source: `packages/overlay/src/components/overlay-host.tsx:6`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop | Required | Type / choices |
| ---- | -------- | -------------- |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### OverlayProvider

Source: `packages/overlay/src/providers/overlay.provider.tsx:7`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices |
| ---------- | -------- | -------------- |
| `children` | No       | `ReactNode`    |
| `store`    | Yes      | `OverlayStore` |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

## Public exports

- `OpenOverlay` (type)
- `OverlayComponentProps` (type)
- `OverlayContext` (value)
  - `(props: import("react").ProviderProps<OverlayProviderValue \| undefined>): import("react").ReactNode`
- `OverlayController` (type)
- `OverlayEntry` (type)
- `OverlayHost` (value)
  - `(props: unknown): import("react").ReactNode`
- `OverlayID` (type)
- `OverlayLifecycle` (type)
- `OverlayLifecycleCallback` (type)
- `OverlayLifecycleOptions` (type)
- `OverlayLifecycleProps` (type)
- `OverlayLifecycleStatus` (type)
- `OverlayListener` (type)
- `OverlayOpenArguments` (type)
- `OverlayOrder` (value)
- `OverlayProvider` (value)
  - `(props: OverlayProviderProps & { children?: import("react").ReactNode \| undefined; }): import("react").ReactNode`
- `OverlayProviderProps` (type)
- `OverlayProviderValue` (type)
- `OverlayRegistrationProps` (type)
- `OverlayStatusCallback` (type)
- `OverlayStore` (class)
- `OverlayTimingOptions` (type)
- `OverlayTitle` (type)
- `OverlayTransitionCompletion` (type)
- `OverlayTransitionHandler` (type)
- `useOverlayContext` (hook)
  - `(): import("@impulse-ui-native/toolkit").OverlayProviderValue`
- `useOverlayLayer` (hook)
  - `(id: OverlayID, Component?: ComponentType<OverlayComponentProps>, order?: OverlayOrder): number`
- `useOverlayLifecycle` (hook)
  - `({ id, open, onOpen, onOpenFinished, onClose, onCloseFinished, onStatusChange, }: OverlayLifecycleProps, { ready, onEnter, onExit }?: OverlayLifecycleOptions): OverlayLifecycle`
- `useOverlays` (hook)
  - `(): readonly import("@impulse-ui-native/toolkit").OverlayEntry[]`
- `useOverlaySpring` (hook)
  - `(options: OverlayTimingOptions): import("../types/overlay-animation.types").OverlayAnimation`
- `useOverlayStatus` (hook)
  - `(id: OverlayID): OverlayLifecycleStatus`
- `useOverlayTiming` (hook)
  - `(options: OverlayTimingOptions): import("../types/overlay-animation.types").OverlayAnimation`

### OverlayStore methods

- `subscribeOverlays`
  - `(): (listener: OverlayListener) => () => void`
- `getOverlaysSnapshot`
  - `(): () => readonly OverlayEntry[]`
- `open`
  - `(entry: OverlayEntry): void`
- `close`
  - `(id: OverlayID): void`
- `setStatus`
  - `(id: OverlayID, status: OverlayLifecycleStatus): void`
- `remove`
  - `(id: OverlayID): void`
- `register`
  - `<Props extends object = never>(registration: OverlayRegistrationProps<Props>): OverlayController<Props>`
