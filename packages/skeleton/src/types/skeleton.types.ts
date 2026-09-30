import type { StyleProp, ViewStyle } from "react-native";

import type { TypographyComponent } from "@impulse-ui-native/primitives";
import type {
  BorderProps,
  ComponentSize,
  DimensionProps,
  DividerTokenOrientation,
  FlexProps,
  ProgressVariant,
  SpacingProps,
} from "@impulse-ui-native/theme";

export type SkeletonContainerProps = SpacingProps &
  BorderProps &
  FlexProps &
  DimensionProps;

export interface SkeletonBoneProps
  extends SpacingProps, BorderProps, FlexProps, DimensionProps {
  style?: StyleProp<ViewStyle>;
}

export interface SkeletonTextProps extends BorderProps {
  text: string;
  Component: TypographyComponent;
}

export interface SkeletonTagProps extends SkeletonBoneProps {
  size?: ComponentSize;
}

export interface SkeletonSizedProps extends SkeletonBoneProps {
  size?: ComponentSize;
}

export type SkeletonAvatarProps = SkeletonSizedProps;
export type SkeletonBadgeProps = SkeletonSizedProps;
export type SkeletonButtonProps = SkeletonSizedProps;
export type SkeletonCheckboxProps = SkeletonSizedProps;
export type SkeletonControlProps = SkeletonSizedProps;
export type SkeletonIconButtonProps = SkeletonSizedProps;
export type SkeletonRadioProps = SkeletonSizedProps;
export type SkeletonSliderProps = SkeletonSizedProps;
export type SkeletonSwitchProps = SkeletonSizedProps;

export interface SkeletonDividerProps extends SkeletonBoneProps {
  orientation?: DividerTokenOrientation;
}

export interface SkeletonPaginationProps extends SkeletonSizedProps {
  itemCount?: number;
}

export interface SkeletonProgressProps extends SkeletonSizedProps {
  variant?: ProgressVariant;
}

export interface SkeletonSegmentedControlProps extends SkeletonSizedProps {
  itemCount?: number;
}

export interface SkeletonTextareaProps extends SkeletonSizedProps {
  rows?: number;
}
