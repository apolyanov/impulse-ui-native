import { ComponentSize } from "@impulse-ui-native/theme";
import { ComponentType } from "react";
import { SvgProps } from "react-native-svg";

export type IconStyle = SvgProps["style"];

export type IconVariant =
  | "bold"
  | "duotone"
  | "fill"
  | "light"
  | "regular"
  | "thin";

export interface IconProps {
  size?: ComponentSize | number;
  color?: string;
  variant?: IconVariant;
  icon: ComponentType<SvgProps>;
  style?: IconStyle;
}

export interface IconWrapperProps extends SvgProps {
  variant?: IconVariant;
}
