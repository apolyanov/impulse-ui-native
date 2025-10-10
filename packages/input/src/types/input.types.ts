import { IconProps } from "@impulse-ui-native/icon";
import { ComponentSize } from "@impulse-ui-native/theme";
import { TextInputProps } from "react-native";

export type InputVariant = "filled" | "outlined" | "standard";

export interface InputProps extends TextInputProps {
  size?: ComponentSize;
  variant?: InputVariant;
  label?: string;
  error?: string;
  disabled?: boolean;
  prefixIcon?: IconProps["icon"];
  suffixIcon?: IconProps["icon"];
}
