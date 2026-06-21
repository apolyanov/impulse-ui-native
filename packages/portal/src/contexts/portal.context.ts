import { createContext } from "react";

import { PortalProviderValue } from "../types";

export const PortalContext = createContext<PortalProviderValue | undefined>(
  undefined,
);
