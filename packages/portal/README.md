# @impulse-ui-native/portal

A small external-store-based portal system for rendering React content in named hosts.

## Installation

```sh
pnpm add @impulse-ui-native/portal
```

## Main exports

- `PortalStore` stores portal content and subscriptions.
- `PortalProvider` makes a store available to a React tree.
- `Portal` sends its children to a named host and updates them reactively.
- `PortalsHost` renders every portal assigned to a host.
- `PortalHost` renders a specific portal entry.
- `usePortalContext`, `useHostPortals`, and `usePortalChildren` support custom integrations.
- `RootPortalsHostName` is the default host name (`root`).

## Usage

Create one stable store for the provider. Do not construct it during every render.

```tsx
import {
  Portal,
  PortalProvider,
  PortalsHost,
  PortalStore,
} from "@impulse-ui-native/portal";

const portalStore = new PortalStore();

export function App() {
  return (
    <PortalProvider store={portalStore}>
      <Screen />
      <PortalsHost />
    </PortalProvider>
  );
}

function Screen() {
  return <Portal id="global-overlay">{/* overlay content */}</Portal>;
}
```

Pass the same `name` to `Portal` and `PortalsHost` when you need more than one portal destination.
