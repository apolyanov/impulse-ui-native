import type { PressableCoreProps } from "@impulse-ui-native/primitives";
import type { ComponentSize, ComponentVariant } from "@impulse-ui-native/theme";

export interface RadioProps extends Omit<
  PressableCoreProps,
  "children" | "loading"
> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: ComponentSize;
  variant?: ComponentVariant;
}

export interface RadioThemeProps {
  checked: boolean;
  disabled?: boolean;
  size: ComponentSize;
  variant: ComponentVariant;
}
