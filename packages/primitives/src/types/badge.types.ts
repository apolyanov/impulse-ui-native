import type { ReactNode } from "react";
import type { ColorValue } from "react-native";

import type {
  BadgeTone,
  ComponentSize,
  ComponentVariant,
} from "@impulse-ui-native/theme";

import type { ControlComponentCommonProps } from "./control-components.types";
import type { ViewProps } from "./view.types";

export interface BadgeProps
  extends
    Omit<ViewProps, "children">,
    Pick<
      ControlComponentCommonProps,
      | "PrefixIcon"
      | "Prefix"
      | "onPressPrefix"
      | "SuffixIcon"
      | "Suffix"
      | "onPressSuffix"
    > {
  children: ReactNode;
  size?: ComponentSize;
  tone?: BadgeTone;
  variant?: ComponentVariant;
}

export interface BadgeThemeProps {
  backgroundColor?: ColorValue;
  color?: ColorValue;
  size: ComponentSize;
  tone: BadgeTone;
  variant: ComponentVariant;
}
