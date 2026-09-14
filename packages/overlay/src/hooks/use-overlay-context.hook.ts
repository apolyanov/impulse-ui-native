import { useContext } from "react";

import { OverlayContext } from "../contexts";

export function useOverlayContext() {
  const context = useContext(OverlayContext);

  if (!context) {
    throw new Error("useOverlayContext must be used within OverlayProvider");
  }

  return context;
}
