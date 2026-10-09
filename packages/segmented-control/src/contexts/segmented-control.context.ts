import { createContext } from "react";

import type { SegmentedControlContextData } from "../types/segmented-control-context.types";

export const SegmentedControlContext = createContext<
  SegmentedControlContextData | undefined
>(undefined);
export const SegmentedControlProvider = SegmentedControlContext.Provider;
