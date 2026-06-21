import { useContext } from "react";

import { PortalContext } from "../contexts";

export function usePortalContext() {
  const context = useContext(PortalContext);

  if (!context) {
    throw new Error("usePortalContext must be used withing PortalProvider");
  }

  return context;
}
