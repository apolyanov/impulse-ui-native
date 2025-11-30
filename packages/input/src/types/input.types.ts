import { IconProps } from "@impulse-ui-native/icon";
import { ComponentSize } from "@impulse-ui-native/theme";
import { PressableProps, TextInputProps } from "react-native";

export type InputVariant = "filled" | "outlined" | "standard";

export interface InputProps extends TextInputProps {
  size?: ComponentSize;
  variant?: InputVariant;
  label?: string;
  error?: string;
  disabled?: boolean;
  prefixIcon?: IconProps["icon"];
  onPrefixIconPress?: PressableProps["onPress"];
  suffixIcon?: IconProps["icon"];
  onSuffixIconPress?: PressableProps["onPress"];
}
