import type { ComponentType } from "react";
import { useMemo } from "react";

import type { OverlayComponentProps, OverlayID } from "../types";
import { OverlayOrder } from "../types";
import { useOverlays } from "./use-overlays.hook";

/** Index within the registered component type; -1 if absent. */
export function useOverlayLayer(
  id: OverlayID,
  Component?: ComponentType<OverlayComponentProps>,
  order: OverlayOrder = OverlayOrder.OldestFirst,
) {
  const overlays = useOverlays();

  return useMemo(() => {
    const component =
      Component ?? overlays.find((entry) => entry.id === id)?.Component;

    const entries = overlays.filter((entry) => entry.Component === component);
    const index = entries.findIndex((entry) => entry.id === id);

    if (index < 0) {
      return -1;
    }

    return order === OverlayOrder.NewestFirst
      ? entries.length - index - 1
      : index;
  }, [overlays, id, Component, order]);
}
