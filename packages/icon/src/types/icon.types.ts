import { ComponentSize } from "@impulse-ui-native/theme";
import { ComponentType } from "react";
import { SvgProps } from "react-native-svg";

export type IconStyle = SvgProps["style"];

export interface IconProps {
  size?: ComponentSize | number;
  color?: string;
  icon: ComponentType<SvgProps>;
  style?: IconStyle;
}
