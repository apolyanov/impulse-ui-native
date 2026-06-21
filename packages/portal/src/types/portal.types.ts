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
