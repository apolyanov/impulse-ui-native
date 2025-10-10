import { ComponentSize } from "@impulse-ui-native/theme";
import { PressableProps, ViewStyle } from "react-native";

export type ButtonVariant = "contained" | "outlined" | "text";

export interface ButtonProps extends PressableProps {
  size?: ComponentSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  style?: ViewStyle;
}
