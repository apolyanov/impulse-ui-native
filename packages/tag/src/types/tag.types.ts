import { ComponentSize } from "@impulse-ui-native/theme";
import { PressableProps, ViewStyle } from "react-native";

export interface TagProps {
  label: string;
  size?: ComponentSize;
  variant?: "filled" | "outlined";
  color?: "primary" | "secondary";
  closable?: boolean;
  disabled?: boolean;
  onClose?: () => void;
  style?: ViewStyle;
  onPress?: PressableProps["onPress"];
}
