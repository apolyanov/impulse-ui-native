import { memo } from "react";

import { useOverlays } from "../hooks";
import { OverlayHostEntry } from "./overlay-host-entry";

export const OverlayHost = memo(function OverlayHost() {
  const overlays = useOverlays();

  return overlays.map((entry, layer) => (
    <OverlayHostEntry key={entry.id} entry={entry} layer={layer} />
  ));
});
