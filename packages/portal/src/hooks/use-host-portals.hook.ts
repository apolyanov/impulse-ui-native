import { useCallback, useEffect, useMemo, useSyncExternalStore } from "react";

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
