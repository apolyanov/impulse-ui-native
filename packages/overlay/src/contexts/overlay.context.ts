import { createContext } from "react";

import type { OverlayProviderValue } from "../types";

export const OverlayContext = createContext<OverlayProviderValue | undefined>(
  undefined,
);
