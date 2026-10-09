import type { ComponentType } from "react";
import type { TextInputProps, TextProps, ViewProps } from "react-native";

import type { IconProps } from "@impulse-ui-native/icon/types";
import type { ComponentSize, FieldVariant } from "@impulse-ui-native/theme";

import type { PressableCoreProps } from "./button.types";
import type { SpinnerProps } from "./spinner.types";

export interface ControlComponentCommonProps {
  placeholder?: string;
  label?: string;
  PrefixIcon?: IconProps["icon"];
  Prefix?: ComponentType;
  onPressPrefix?: PressableCoreProps["onPress"];
  SuffixIcon?: IconProps["icon"];
  Suffix?: ComponentType;
  onPressSuffix?: PressableCoreProps["onPress"];
}

export interface ControlComponentProps {
  size: ComponentSize;
  variant: FieldVariant;
  error: string | undefined;
  disabled: boolean | undefined;
}

export type ControlContextData = ControlComponentProps;

export type ControlContainerProps = ViewProps;

export type ControlLabelProps = TextProps;

export type ControlErrorLabelProps = TextProps;

export interface ControlAddonProps extends ViewProps {
  disabled?: boolean;
  hitSlop?: PressableCoreProps["hitSlop"];
  onPress?: PressableCoreProps["onPress"];
}

export type ControlInputProps = TextInputProps;

export type ControlPlaceholderProps = TextProps;

export type ControlValueProps = TextProps;

export type ControlLoaderProps = SpinnerProps;
