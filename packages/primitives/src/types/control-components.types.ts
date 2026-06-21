import { ComponentType } from "react";
import {
  ActivityIndicatorProps,
  TextInputProps,
  TextProps,
  ViewProps,
} from "react-native";

import { IconProps } from "@impulse-ui-native/icon";
import { ComponentSize, ComponentVariant } from "@impulse-ui-native/theme";

import { PressableCoreProps } from "./button.types";

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
  variant: ComponentVariant;
  error: string | undefined;
  disabled: boolean | undefined;
}

export interface ControlContextData extends ControlComponentProps {}

export interface ControlContainerProps extends ViewProps {}

export interface ControlLabelProps extends TextProps {}

export interface ControlErrorLabelProps extends TextProps {}

export interface ControlAddonProps extends ViewProps {
  icon: IconProps["icon"] | undefined;
  onPress: PressableCoreProps["onPress"] | undefined;
  Content: ComponentType<any> | undefined;
}

export interface ControlInputProps extends TextInputProps {}
export interface ControlPlaceholderProps extends TextProps {}
export interface ControlValueProps extends TextProps {}
export interface ControlLoaderProps extends ActivityIndicatorProps {}
