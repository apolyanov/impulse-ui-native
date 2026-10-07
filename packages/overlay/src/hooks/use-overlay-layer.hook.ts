import type { ComponentType } from "react";
import { useMemo } from "react";

import type { OverlayComponentProps, OverlayID } from "../types";
import { useOverlays } from "./use-overlays.hook";

/** Index within the registered component type; -1 if absent. */
export function useOverlayLayer(
  id: OverlayID,
  Component?: ComponentType<OverlayComponentProps>,
  order: "oldest-first" | "newest-first" = "oldest-first",
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

    return order === "newest-first" ? entries.length - index - 1 : index;
  }, [overlays, id, Component, order]);
}
