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
