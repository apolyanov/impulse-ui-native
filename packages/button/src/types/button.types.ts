import { PressableProps, ViewStyle } from "react-native";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "contained" | "outlined" | "text";

export interface ButtonProps extends PressableProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  style?: ViewStyle;
}
