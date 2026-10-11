import type { Ref } from "react";
import type { View } from "react-native";

import type { ComponentSize } from "@impulse-ui-native/theme";

import type { TabsItem } from "./tabs.types";

export interface TabButtonProps {
  item: TabsItem;
  disabled: boolean;
  selected: boolean;
  size: ComponentSize;
  onSelect: (value: string) => void;
  initialScrollRef?: Ref<View>;
  onLayout?: () => void;
}

export type TabButtonThemeProps = Pick<
  TabButtonProps,
  "disabled" | "selected" | "size"
>;
