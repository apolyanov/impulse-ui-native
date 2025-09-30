import { ViewStyle } from "react-native";

export type FlexProps = {
  flex?: ViewStyle["flex"];
  flexGrow?: ViewStyle["flexGrow"];
  flexShrink?: ViewStyle["flexShrink"];
  flexBasis?: ViewStyle["flexBasis"];

  flexDirection?: ViewStyle["flexDirection"];
  flexWrap?: ViewStyle["flexWrap"];

  justifyContent?: ViewStyle["justifyContent"];
  alignItems?: ViewStyle["alignItems"];
  alignSelf?: ViewStyle["alignSelf"];
  alignContent?: ViewStyle["alignContent"];

  gap?: ViewStyle["gap"];
  rowGap?: ViewStyle["rowGap"];
  columnGap?: ViewStyle["columnGap"];

  // positioning (often used with flex layouts)
  position?: ViewStyle["position"];
  top?: ViewStyle["top"];
  right?: ViewStyle["right"];
  bottom?: ViewStyle["bottom"];
  left?: ViewStyle["left"];
};
