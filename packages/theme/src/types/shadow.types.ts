import { ViewStyle } from "react-native";

export type ShadowLevel = "none" | "xs" | "sm" | "md" | "lg" | "xl";

export type ShadowPosition = "around" | "bottom" | "top";

export type ShadowIntensity = {
  radius: number;
  opacity: number;
  elevation: number;
};

export type ShadowProps = {
  shadow?: ShadowLevel;
  shadowPosition?: ShadowPosition;
  shadowColor?: ViewStyle["shadowColor"];
  shadowOpacity?: ViewStyle["shadowOpacity"];
  shadowRadius?: ViewStyle["shadowRadius"];
  shadowOffset?: ViewStyle["shadowOffset"];
  elevation?: ViewStyle["elevation"];
};
