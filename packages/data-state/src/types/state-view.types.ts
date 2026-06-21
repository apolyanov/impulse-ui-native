import { ComponentType, ReactNode } from "react";
import { PressableProps, ViewStyle } from "react-native";

import { IconProps } from "@impulse-ui-native/icon";
import { ViewProps } from "@impulse-ui-native/primitives";

export interface StateActionsFooterProps extends ViewProps {
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

export interface EmptyViewProps extends StateViewProps {
  isEmpty: boolean;
}

export interface ErrorViewProps extends StateViewProps {
  error: Error | null;
}

export interface LoadingViewProps extends ViewProps {
  loading: boolean;
  LoadingComponent: ComponentType;
  contentContainerStyle?: ViewStyle;
}

export interface DataViewProps extends ViewProps {
  error: ErrorViewProps["error"];
  isEmpty: EmptyViewProps["isEmpty"];
  LoadingComponent: ComponentType;
  loading: LoadingViewProps["loading"];
  contentContainerStyle?: ViewStyle;
  errorViewProps: StateViewProps;
  emptyViewProps: StateViewProps;
}
