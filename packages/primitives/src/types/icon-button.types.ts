import { IconProps } from "@impulse-ui-native/icon";
import { ComponentSize, ComponentVariant } from "@impulse-ui-native/theme";

import { ButtonProps } from "./button.types";

export interface IconButtonProps extends ButtonProps {
  icon: IconProps["icon"];
}

export interface IconButtonThemeProps {
  size: ComponentSize;
  variant: ComponentVariant;
  disabled?: boolean;
}
