import type { OverlayID, OverlayLifecycleStatus } from "../types";
import { useOverlays } from "./use-overlays.hook";

export function useOverlayStatus(id: OverlayID): OverlayLifecycleStatus {
  const entries = useOverlays();

  return entries.find((entry) => entry.id === id)?.status ?? "closed";
}
