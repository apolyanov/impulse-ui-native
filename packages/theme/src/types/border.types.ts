import { ViewStyle } from "react-native";

export interface BorderProps {
  borderRadius?: ViewStyle["borderRadius"];
  borderTopLeftRadius?: ViewStyle["borderTopLeftRadius"];
  borderTopRightRadius?: ViewStyle["borderTopRightRadius"];
  borderBottomLeftRadius?: ViewStyle["borderBottomLeftRadius"];
  borderBottomRightRadius?: ViewStyle["borderBottomRightRadius"];

  borderWidth?: ViewStyle["borderWidth"];
  borderTopWidth?: ViewStyle["borderTopWidth"];
  borderRightWidth?: ViewStyle["borderRightWidth"];
  borderBottomWidth?: ViewStyle["borderBottomWidth"];
  borderLeftWidth?: ViewStyle["borderLeftWidth"];

  borderColor?: ViewStyle["borderColor"];
  borderTopColor?: ViewStyle["borderTopColor"];
  borderRightColor?: ViewStyle["borderRightColor"];
  borderBottomColor?: ViewStyle["borderBottomColor"];
  borderLeftColor?: ViewStyle["borderLeftColor"];

  borderStyle?: ViewStyle["borderStyle"]; // "solid" | "dotted" | "dashed"
}
