import type { PressableCoreProps } from "@impulse-ui-native/primitives";
import type { ComponentSize, SelectionVariant } from "@impulse-ui-native/theme";

export type CheckboxState = boolean | "indeterminate";

export interface CheckboxProps extends Omit<
  PressableCoreProps,
  "children" | "loading"
> {
  checked?: CheckboxState;
  defaultChecked?: CheckboxState;
  onCheckedChange?: (checked: CheckboxState) => void;
  size?: ComponentSize;
  variant?: SelectionVariant;
}

export interface CheckboxThemeProps {
  checked: CheckboxState;
  disabled?: boolean;
  size: ComponentSize;
  variant: SelectionVariant;
}
