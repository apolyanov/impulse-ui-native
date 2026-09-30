import { createContext, useContext } from "react";

import type { ComponentSize, SelectionVariant } from "@impulse-ui-native/theme";

import type {
  SegmentedControlFocusItem,
  SegmentedControlRegisterItem,
  SegmentedControlSelectValue,
} from "../types/segmented-control-context.types";

export interface SegmentedControlContextData {
  disabled: boolean;
  focusItem: SegmentedControlFocusItem;
  registerItem: SegmentedControlRegisterItem;
  selectValue: SegmentedControlSelectValue;
  selectedValue: string | undefined;
  size: ComponentSize;
  variant: SelectionVariant;
}

const SegmentedControlContext = createContext<
  SegmentedControlContextData | undefined
>(undefined);

export const SegmentedControlProvider = SegmentedControlContext.Provider;

export function useSegmentedControlContext(): SegmentedControlContextData {
  const context = useContext(SegmentedControlContext);

  if (!context) {
    throw new Error(
      "SegmentedControl.Item must be used within SegmentedControl.Root",
    );
  }

  return context;
}
