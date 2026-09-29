import type { PressableCoreProps } from "@impulse-ui-native/primitives";
import type { ComponentSize, SelectionVariant } from "@impulse-ui-native/theme";

export interface SwitchProps extends Omit<PressableCoreProps, "children"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: ComponentSize;
  variant?: SelectionVariant;
}

export interface SwitchThemeProps {
  size: ComponentSize;
}
