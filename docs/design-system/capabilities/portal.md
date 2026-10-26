# @impulse-ui-native/portal: capability guide

Render local content in a named host elsewhere in the tree.

## Setup

- PortalProvider with a stable PortalStore and PortalsHost. No ThemeProvider is needed for portal infrastructure.

## Capabilities

- PortalStore, PortalProvider, Portal, PortalHost and PortalsHost.

## Boundaries and composition

- Portal name must match a mounted host under the same store.
- Do not assume arbitrary React context survives relocation; pass/re-provide context where the component requires it.

Exact contracts: [API reference](../api/portal.md). Machine facts: [package JSON](portal.json) or [full catalog](../capabilities.json).

## Recipes

- [app-shell](../recipes.md#app-shell)
- [details-dialog](../recipes.md#details-dialog)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer           | Range    | Optional |
| -------------- | -------- | -------- |
| `react`        | `>=18`   | No       |
| `react-native` | `>=0.73` | No       |

### Portal

Source: `packages/portal/src/components/portal.tsx:7`. Direct defaults: `name=RootPortalsHostName`.

| Prop       | Required | Type / choices        |
| ---------- | -------- | --------------------- |
| `children` | No       | `ReactNode`           |
| `id`       | No       | `string \| undefined` |
| `name`     | No       | `string \| undefined` |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### PortalHost

Source: `packages/portal/src/components/portal-host.tsx:6`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop   | Required | Type / choices |
| ------ | -------- | -------------- |
| `id`   | Yes      | `string`       |
| `name` | Yes      | `string`       |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### PortalProvider

Source: `packages/portal/src/providers/portal.provider.tsx:6`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop       | Required | Type / choices |
| ---------- | -------- | -------------- |
| `children` | No       | `ReactNode`    |
| `store`    | Yes      | `PortalStore`  |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

### PortalsHost

Source: `packages/portal/src/components/portals-host.tsx:8`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

| Prop   | Required | Type / choices        |
| ------ | -------- | --------------------- |
| `name` | No       | `string \| undefined` |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

## Public exports

- `HostName` (type)
- `Listener` (type)
- `Portal` (value)
  - `(props: PortalProps & { children?: import("react").ReactNode \| undefined; }): import("react").ReactNode`
- `PortalEntry` (type)
- `PortalHost` (value)
  - `(props: PortalHostProps): import("react").ReactNode`
- `PortalHostProps` (type)
- `PortalID` (type)
- `PortalProps` (type)
- `PortalProvider` (value)
  - `(props: PortalProviderProps & { children?: import("react").ReactNode \| undefined; }): import("react").ReactNode`
- `PortalProviderProps` (type)
- `PortalProviderValue` (type)
- `PortalsHost` (value)
  - `(props: PortalsHostProps): import("react").ReactNode`
- `PortalsHostProps` (type)
- `PortalStore` (class)
- `RootPortalsHostName` (value)
- `useHostPortals` (hook)
  - `(name: HostName): import("@impulse-ui-native/toolkit").PortalEntry[]`
- `usePortalChildren` (hook)
  - `(id: PortalID, name: HostName): import("react").ReactNode`
- `usePortalContext` (hook)
  - `(): import("@impulse-ui-native/toolkit").PortalProviderValue`

### PortalStore methods

- `subscribePortal`
  - `(id: PortalID, name: HostName): (listener: Listener) => () => void`
- `subscribeHost`
  - `(name: string): (listener: Listener) => () => void`
- `getPortalsSnapshot`
  - `(name: HostName): () => PortalEntry[]`
- `getPortalSnapshot`
  - `(id: PortalID, name: HostName): () => ReactNode`
- `mount`
  - `(id: PortalID, name: HostName, children: ReactNode): void`
- `unmount`
  - `(id: PortalID, name: HostName): void`
- `update`
  - `(id: PortalID, name: HostName, children: ReactNode): void`
