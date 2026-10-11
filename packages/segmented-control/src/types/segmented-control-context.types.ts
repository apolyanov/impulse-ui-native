import type { RefObject } from "react";
import type { View } from "react-native";

import type { ComponentSize, SelectionVariant } from "@impulse-ui-native/theme";

export type SegmentedControlSelectValue = (value: string) => void;

export interface SegmentedControlContextData {
  disabled: boolean;
  selectValue: SegmentedControlSelectValue;
  selectedValue: string | undefined;
  size: ComponentSize;
  variant: SelectionVariant;
  initialSelectedValue: string | undefined;
  initialScrollRef: RefObject<View | null>;
  onInitialItemLayout: () => void;
}
