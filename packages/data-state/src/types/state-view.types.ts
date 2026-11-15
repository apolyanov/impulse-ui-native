import { ComponentType } from "react";
import { PressableProps, ViewStyle } from "react-native";

import type { IconProps } from "@impulse-ui-native/icon/types";
import type { ComponentTone } from "@impulse-ui-native/theme";
import { ViewProps } from "@impulse-ui-native/primitives";

export interface StateActionsFooterProps extends ViewProps {
  tone?: ComponentTone;
  onPressPrimaryAction: PressableProps["onPress"];
  primaryActionLabel: string;
  onPressSecondaryAction?: PressableProps["onPress"];
  secondaryActionLabel?: string;
}

export interface StateViewProps extends StateActionsFooterProps, ViewProps {
  text: string;
  variant?: IconProps["variant"];
  contentContainerStyle?: ViewStyle;
}

export interface StateContainerProps extends ViewProps {
  contentContainerStyle?: ViewStyle;
}

export type EmptyViewProps = StateContainerProps;

export type ErrorViewProps = StateContainerProps;

type LoadingComponentOptions<Props extends object> = {
  LoadingComponent: ComponentType<Props>;
} & ({} extends Props
  ? { loadingComponentProps?: NoInfer<Props> }
  : { loadingComponentProps: NoInfer<Props> });

export type LoadingViewProps<Props extends object = object> = ViewProps & {
  loading: boolean;
  contentContainerStyle?: ViewStyle;
} & LoadingComponentOptions<Props>;

export type DataViewProps<Props extends object = object> = ViewProps & {
  tone?: ComponentTone;
  error: Error | null;
  isEmpty: boolean;
  loading: boolean;
  contentContainerStyle?: ViewStyle;
  errorViewProps: StateViewProps;
  emptyViewProps: StateViewProps;
} & LoadingComponentOptions<Props>;
