import type { IconProps } from "@impulse-ui-native/icon";
import type { ViewProps } from "@impulse-ui-native/primitives";
import type {
  BadgeTone,
  ComponentSize,
  DisplayVariant,
} from "@impulse-ui-native/theme";

export interface IconViewProps extends Omit<ViewProps, "children"> {
  icon: IconProps["icon"];
  size?: ComponentSize;
  tone?: BadgeTone;
  variant?: DisplayVariant;
  color?: string;
  backgroundColor?: string;
  iconProps?: Omit<IconProps, "icon" | "size" | "color">;
}

export interface IconViewThemeProps {
  size: ComponentSize;
  tone: BadgeTone;
  variant: DisplayVariant;
  color?: string;
  backgroundColor?: string;
}
