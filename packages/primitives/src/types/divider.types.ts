import type { ViewStyle } from "react-native";

import type { DividerTone } from "@impulse-ui-native/theme";

import type { ViewProps } from "./view.types";

export type DividerOrientation = "horizontal" | "vertical";
export type DividerInset = "none" | "start" | "end" | "both";

export interface DividerProps extends Omit<ViewProps, "children" | "color"> {
  color?: ViewStyle["backgroundColor"];
  inset?: DividerInset;
  orientation?: DividerOrientation;
  tone?: DividerTone;
}
