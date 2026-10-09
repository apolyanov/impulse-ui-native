import { createContext } from "react";

import type { ControlContextData } from "../types";

export const ControlContext = createContext<ControlContextData | undefined>(
  undefined,
);
