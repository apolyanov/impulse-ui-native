import type { PressableCoreProps } from "@impulse-ui-native/primitives";
import type { ComponentSize, SelectionVariant } from "@impulse-ui-native/theme";

export interface RadioProps extends Omit<
  PressableCoreProps,
  "children" | "loading"
> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: ComponentSize;
  variant?: SelectionVariant;
}

export interface RadioThemeProps {
  checked: boolean;
  disabled?: boolean;
  size: ComponentSize;
  variant: SelectionVariant;
}
