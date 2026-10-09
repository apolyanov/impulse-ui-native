import { useContext } from "react";

import type { SegmentedControlContextData } from "../types/segmented-control-context.types";
import { SegmentedControlContext } from "../contexts";

export function useSegmentedControlContext(): SegmentedControlContextData {
  const context = useContext(SegmentedControlContext);

  if (!context) {
    throw new Error(
      "SegmentedControl.Item must be used within SegmentedControl.Root",
    );
  }

  return context;
}
