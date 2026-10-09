import type { ReactNode } from "react";
import type { StyleProp, ViewStyle } from "react-native";

import type { ViewProps } from "@impulse-ui-native/primitives";
import type { ComponentSize } from "@impulse-ui-native/theme";

export interface TabsItem {
  value: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export type TabsOverflow = "clip" | "scroll";

interface TabsCommonProps extends Omit<ViewProps, "children" | "overflow"> {
  items: readonly TabsItem[];
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  overflow?: TabsOverflow;
  panelStyle?: StyleProp<ViewStyle>;
  size?: ComponentSize;
}

interface TabsControlledProps extends TabsCommonProps {
  value: string;
  defaultValue?: never;
}

interface TabsUncontrolledProps extends TabsCommonProps {
  value?: never;
  defaultValue?: string;
}

export type TabsProps = TabsControlledProps | TabsUncontrolledProps;
