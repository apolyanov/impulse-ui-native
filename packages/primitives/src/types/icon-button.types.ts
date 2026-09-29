import type { IconProps } from "@impulse-ui-native/icon/types";
import { ActionVariant, ComponentSize } from "@impulse-ui-native/theme";

import { ButtonProps } from "./button.types";

export interface IconButtonProps extends ButtonProps {
  icon: IconProps["icon"];
}

export interface IconButtonThemeProps {
  size: ComponentSize;
  variant: ActionVariant;
  disabled?: boolean;
}
