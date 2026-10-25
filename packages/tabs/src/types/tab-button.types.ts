import type { ComponentRef, Ref } from "react";
import type { View } from "react-native";

import type { ComponentSize, ComponentTone } from "@impulse-ui-native/theme";

import type { TabsItem } from "./tabs.types";

export interface TabButtonProps {
  item: TabsItem;
  disabled: boolean;
  selected: boolean;
  size: ComponentSize;
  tone: ComponentTone;
  onSelect: (value: string) => void;
  initialScrollRef?: Ref<ComponentRef<typeof View>>;
  onLayout?: () => void;
}

export type TabButtonThemeProps = Pick<
  TabButtonProps,
  "disabled" | "selected" | "size" | "tone"
>;
