import { useContext } from "react";

import type { ControlContextData } from "../types";
import { ControlContext } from "../contexts/control.context";

export function useControlContext(): ControlContextData {
  const context = useContext(ControlContext);

  if (!context) {
    throw new Error("Control parts must be used within Control.Provider");
  }

  return context;
}
