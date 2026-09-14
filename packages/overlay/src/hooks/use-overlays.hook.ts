import { useMemo, useSyncExternalStore } from "react";

import { useOverlayContext } from "./use-overlay-context.hook";

export function useOverlays() {
  const { store } = useOverlayContext();

  const subscribe = useMemo(() => store.subscribeOverlays(), [store]);

  const getSnapshot = useMemo(() => store.getOverlaysSnapshot(), [store]);

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
