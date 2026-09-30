import type { ReactNode } from "react";
import type {
  NativeSyntheticEvent,
  PressableProps,
  ScrollViewProps,
} from "react-native";

import type { IconProps } from "@impulse-ui-native/icon/types";
import type { ComponentSize, SelectionVariant } from "@impulse-ui-native/theme";

export type SegmentedControlOverflow = "clip" | "scroll";

interface SegmentedControlRootCommonProps extends Omit<
  ScrollViewProps,
  "accessibilityRole" | "children" | "horizontal" | "scrollEnabled"
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
  "accessibilityRole" | "children"
> {
  children?: ReactNode;
  Icon?: IconProps["icon"];
  onKeyDown?: (event: SegmentedControlKeyDownEvent) => void;
  value: string;
}

export type SegmentedControlKeyDownEvent = NativeSyntheticEvent<{
  key: string;
}>;

export interface SegmentedControlRootThemeProps {
  size: ComponentSize;
}

export interface SegmentedControlItemThemeProps {
  disabled: boolean;
  focused: boolean;
  selected: boolean;
  size: ComponentSize;
  stacked: boolean;
  variant: SelectionVariant;
}
