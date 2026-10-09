import type { ComponentSize } from "@impulse-ui-native/theme";

import type { TabsItem } from "./tabs.types";

export interface TabButtonProps {
  item: TabsItem;
  disabled: boolean;
  selected: boolean;
  size: ComponentSize;
  onSelect: (value: string) => void;
}

export type TabButtonThemeProps = Pick<
  TabButtonProps,
  "disabled" | "selected" | "size"
>;
