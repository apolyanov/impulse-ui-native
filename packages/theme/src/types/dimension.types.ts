import { ViewStyle } from "react-native";

export interface DimensionProps {
  width?: ViewStyle["width"];
  height?: ViewStyle["height"];
  minWidth?: ViewStyle["minWidth"];
  maxWidth?: ViewStyle["maxWidth"];
  minHeight?: ViewStyle["minHeight"];
  maxHeight?: ViewStyle["maxHeight"];
  aspectRatio?: ViewStyle["aspectRatio"];
  overflow?: ViewStyle["overflow"];
}
