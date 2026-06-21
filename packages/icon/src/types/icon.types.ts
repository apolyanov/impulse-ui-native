import { ComponentType } from "react";
import { SvgProps } from "react-native-svg";

import { ComponentSize } from "@impulse-ui-native/theme";

export type IconStyle = SvgProps["style"];

export type IconVariant =
  | "bold"
  | "duotone"
  | "fill"
  | "light"
  | "regular"
  | "thin";

export interface IconProps extends SvgProps {
  size?: ComponentSize | number;
  color?: string;
  variant?: IconVariant;
  icon: ComponentType<SvgProps>;
  style?: IconStyle;
}

export interface IconWrapperProps extends SvgProps {
  variant?: IconVariant;
}
