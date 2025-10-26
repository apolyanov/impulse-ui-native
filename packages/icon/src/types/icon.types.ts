import { ComponentSize } from "@impulse-ui-native/theme";
import { ComponentType } from "react";
import { ViewStyle } from "react-native";

export interface IconStyle extends ViewStyle {
  color?: string;
}

export interface IconSvgProps {
  width: number;
  height: number;
  color?: string;
}

export interface IconProps {
  size?: ComponentSize | number;
  color?: string;
  icon: ComponentType<IconSvgProps>;
}
