import { createContext } from "react";

import type { FlyoutDragContextValue } from "../types/flyout-context.types";

export const FlyoutDragContext = createContext<
  FlyoutDragContextValue | undefined
>(undefined);
