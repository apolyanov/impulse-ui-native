import { createContext } from "react";

import type { FlyoutContextValue } from "../types/flyout-context.types";

export const FlyoutContext = createContext<FlyoutContextValue | undefined>(
  undefined,
);
