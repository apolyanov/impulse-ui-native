import type { ColorValue, ViewProps } from "react-native";

import type {
  ComponentSize,
  ProgressTone,
  ProgressVariant,
} from "@impulse-ui-native/theme";

export interface ProgressProps extends Omit<ViewProps, "children"> {
  color?: ColorValue;
  max?: number;
  min?: number;
  size?: ComponentSize;
  tone?: ProgressTone;
  trackColor?: ColorValue;
  value?: number;
  variant?: ProgressVariant;
}
