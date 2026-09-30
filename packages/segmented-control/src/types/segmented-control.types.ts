import type { ReactNode } from "react";
import type { PressableProps, ScrollViewProps } from "react-native";

import type { IconProps } from "@impulse-ui-native/icon/types";
import type { ComponentSize, SelectionVariant } from "@impulse-ui-native/theme";

export type SegmentedControlOverflow = "clip" | "scroll";

interface SegmentedControlRootCommonProps extends Omit<
  ScrollViewProps,
  "children" | "horizontal" | "scrollEnabled"
> {
  children?: ReactNode;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  overflow?: SegmentedControlOverflow;
  size?: ComponentSize;
  variant?: SelectionVariant;
}

interface SegmentedControlControlledRootProps extends SegmentedControlRootCommonProps {
  defaultValue?: never;
  value: string;
}

interface SegmentedControlUncontrolledRootProps extends SegmentedControlRootCommonProps {
  defaultValue: string;
  value?: never;
}

export type SegmentedControlRootProps =
  | SegmentedControlControlledRootProps
  | SegmentedControlUncontrolledRootProps;

export interface SegmentedControlItemProps extends Omit<
  PressableProps,
  "children"
> {
  children?: ReactNode;
  Icon?: IconProps["icon"];
  value: string;
}

export interface SegmentedControlRootThemeProps {
  size: ComponentSize;
}

export interface SegmentedControlItemThemeProps {
  disabled: boolean;
  selected: boolean;
  size: ComponentSize;
  stacked: boolean;
  variant: SelectionVariant;
}
