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
