import { TextStyle, ViewStyle } from "react-native";

export interface ColorProps {
  color?: TextStyle["color"];
  backgroundColor?: ViewStyle["backgroundColor"];
  opacity?: ViewStyle["opacity"];
}
