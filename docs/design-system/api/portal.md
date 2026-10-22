# @impulse-ui-native/portal

Local package version: 11.0.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

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

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/portal/src/components/index.ts

```tsx
export { Portal } from "./portal";
export { PortalHost } from "./portal-host";
export { PortalsHost } from "./portals-host";
```

### packages/portal/src/components/portal-host.tsx

```tsx
import { memo } from "react";

import { usePortalChildren } from "../hooks";
import { PortalHostProps } from "../types";

export const PortalHost = memo(function PortalHost(props: PortalHostProps) {
  return usePortalChildren(props.id, props.name);
});
```

### packages/portal/src/components/portal.tsx

```tsx
import { memo, PropsWithChildren, useId, useLayoutEffect } from "react";

import { RootPortalsHostName } from "../constants";
import { usePortalContext } from "../hooks";
import { PortalProps } from "../types";

export const Portal = memo(function Portal(
  props: PropsWithChildren<PortalProps>,
) {
  const { name = RootPortalsHostName, id, children } = props;

  const internalId = useId();
  const context = usePortalContext();

  const currentId = id ?? internalId;

  useLayoutEffect(() => {
    context.store.mount(currentId, name, children);

    return () => {
      context.store.unmount(currentId, name);
    };
  }, [context.store.mount, context.store.unmount, currentId, name]);

  useLayoutEffect(() => {
    context.store.update(currentId, name, children);
  }, [context.store.update, currentId, name, children]);

  return null;
});
```

### packages/portal/src/components/portals-host.tsx

```tsx
import { memo } from "react";

import { RootPortalsHostName } from "../constants";
import { useHostPortals } from "../hooks";
import { PortalsHostProps } from "../types";
import { PortalHost } from "./portal-host";

export const PortalsHost = memo(function PortalsHost(props: PortalsHostProps) {
  const hostName = props.name ?? RootPortalsHostName;

  const portals = useHostPortals(hostName);

  return portals.map(([id]) => <PortalHost key={id} id={id} name={hostName} />);
});
```

### packages/portal/src/constants/index.ts

```tsx
export * from "./portal.constants";
```

### packages/portal/src/constants/portal.constants.ts

```tsx
export const RootPortalsHostName = "root";
```

### packages/portal/src/hooks/index.ts

```tsx
export { usePortalContext } from "./use-portal-context.hook";
export { useHostPortals } from "./use-host-portals.hook";
export { usePortalChildren } from "./use-portal-children.hook";
```

### packages/portal/src/hooks/use-host-portals.hook.ts

```tsx
import { useMemo, useSyncExternalStore } from "react";

import { HostName } from "../types";
import { usePortalContext } from "./use-portal-context.hook";

export function useHostPortals(name: HostName) {
  const context = usePortalContext();

  const subscribe = useMemo(
    () => context.store.subscribeHost(name),
    [context.store.subscribeHost, name],
  );

  const getSnapshot = useMemo(
    () => context.store.getPortalsSnapshot(name),
    [context.store.getPortalsSnapshot, name],
  );

  return useSyncExternalStore(subscribe, getSnapshot);
}
```

### packages/portal/src/hooks/use-portal-children.hook.ts

```tsx
import { useMemo, useSyncExternalStore } from "react";

import { HostName, PortalID } from "../types";
import { usePortalContext } from "./use-portal-context.hook";

export function usePortalChildren(id: PortalID, name: HostName) {
  const context = usePortalContext();

  const subscribe = useMemo(
    () => context.store.subscribePortal(id, name),
    [context.store.subscribePortal, id, name],
  );

  const getSnapshot = useMemo(
    () => context.store.getPortalSnapshot(id, name),
    [context.store.getPortalSnapshot, id, name],
  );

  return useSyncExternalStore(subscribe, getSnapshot);
}
```

### packages/portal/src/hooks/use-portal-context.hook.ts

```tsx
import { useContext } from "react";

import { PortalContext } from "../contexts";

export function usePortalContext() {
  const context = useContext(PortalContext);

  if (!context) {
    throw new Error("usePortalContext must be used withing PortalProvider");
  }

  return context;
}
```

### packages/portal/src/index.ts

```tsx
export * from "./hooks";
export * from "./providers";
export * from "./components";
export * from "./constants";
export * from "./types";
export * from "./stores";
```

### packages/portal/src/providers/index.ts

```tsx
export { PortalProvider } from "./portal.provider";
```

### packages/portal/src/providers/portal.provider.tsx

```tsx
import { memo, PropsWithChildren, useMemo } from "react";

import { PortalContext } from "../contexts";
import { PortalProviderProps } from "../types";

export const PortalProvider = memo(function PortalProvider(
  props: PropsWithChildren<PortalProviderProps>,
) {
  const { children, store } = props;

  const value = useMemo(
    () => ({
      store,
    }),
    [store],
  );

  return (
    <PortalContext.Provider value={value}>{children}</PortalContext.Provider>
  );
});
```

### packages/portal/src/stores/index.ts

```tsx
export { PortalStore } from "./portal.store";
```

### packages/portal/src/stores/portal.store.ts

```tsx
import { ReactNode } from "react";

import { HostName, Listener, PortalEntry, PortalID } from "../types";

export class PortalStore {
  private readonly hostsListeners: Map<HostName, Listener>;
  private readonly portalsListeners: Map<HostName, Map<PortalID, Listener>>;
  private readonly hosts: Map<HostName, Map<PortalID, ReactNode>>;
  private readonly hostSnapshots = new Map<HostName, PortalEntry[]>();
  private readonly emptySnapshot: PortalEntry[];

  constructor() {
    this.hostsListeners = new Map();
    this.portalsListeners = new Map();
    this.hosts = new Map();
    this.emptySnapshot = [];
  }

  subscribePortal(id: PortalID, name: HostName) {
    return (listener: Listener) => {
      const listeners = this.portalsListeners.get(name);

      if (listeners) {
        listeners.set(id, listener);
      } else {
        const newListeners = new Map();

        newListeners.set(id, listener);

        this.portalsListeners.set(name, newListeners);
      }

      return () => {
        this.portalsListeners.get(name)?.delete(id);
      };
    };
  }

  subscribeHost(name: string) {
    return (listener: Listener) => {
      this.hostsListeners.set(name, listener);

      return () => {
        this.hostsListeners.delete(name);
      };
    };
  }

  private emitHostChange(name: HostName) {
    this.hostsListeners.get(name)?.();
  }

  private emitPortalChange(id: PortalID, name: HostName) {
    this.portalsListeners.get(name)?.get(id)?.();
  }

  private updateHostSnapshot(name: HostName) {
    const portals = this.hosts.get(name);

    if (!portals || portals.size === 0) {
      this.hostSnapshots.delete(name);

      return;
    }

    this.hostSnapshots.set(name, Array.from(portals));
  }

  getPortalsSnapshot(name: HostName) {
    return () => this.hostSnapshots.get(name) ?? this.emptySnapshot;
  }

  getPortalSnapshot(id: PortalID, name: HostName) {
    return () => this.hosts.get(name)?.get(id);
  }

  mount(id: PortalID, name: HostName, children: ReactNode) {
    const portals = this.hosts.get(name) ?? new Map<PortalID, ReactNode>();
    const exists = portals.has(id);

    portals.set(id, children);
    this.hosts.set(name, portals);

    this.updateHostSnapshot(name);

    if (!exists) {
      this.emitHostChange(name);
    }

    this.emitPortalChange(id, name);
  }

  unmount(id: PortalID, name: HostName) {
    const portals = this.hosts.get(name);

    if (!portals || !portals.has(id)) {
      return;
    }

    portals.delete(id);

    if (portals.size === 0) {
      this.hosts.delete(name);
    }

    this.updateHostSnapshot(name);
    this.emitHostChange(name);
  }

  update(id: PortalID, name: HostName, children: ReactNode) {
    const portals = this.hosts.get(name);

    if (!portals || !portals.has(id)) {
      return;
    }

    portals.set(id, children);
    this.emitPortalChange(id, name);
  }
}
```

### packages/portal/src/types/index.ts

```tsx
export * from "./portal.types";
```

### packages/portal/src/types/portal.types.ts

```tsx
import { ReactNode } from "react";

import { PortalStore } from "../stores";

export type PortalID = string;

export type Listener = () => void;

export type HostName = string;

export type PortalEntry = [PortalID, ReactNode];

export interface PortalProviderProps {
  store: PortalStore;
}

export interface PortalProviderValue {
  store: PortalStore;
}

export interface PortalProps {
  id?: PortalID;
  name?: HostName;
}

export interface PortalHostProps {
  id: PortalID;
  name: HostName;
}

export interface PortalsHostProps {
  name?: HostName;
}
```
