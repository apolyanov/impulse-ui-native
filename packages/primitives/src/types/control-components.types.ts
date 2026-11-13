import type { ComponentRef, ComponentType, ReactNode, Ref } from "react";
import type {
  TextInput,
  TextInputProps,
  TextProps,
  ViewProps,
} from "react-native";

import type { IconProps } from "@impulse-ui-native/icon/types";
import type {
  ComponentSize,
  DimensionProps,
  FieldTone,
  FieldVariant,
  FlexProps,
  SpacingProps,
} from "@impulse-ui-native/theme";

import type { PressableCoreProps } from "./button.types";
import type { SpinnerProps } from "./spinner.types";

export type ControlLayoutProps = FlexProps & DimensionProps & SpacingProps;

export interface ControlComponentCommonProps extends ControlLayoutProps {
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
  tone?: FieldTone;
  error: string | undefined;
  disabled: boolean | undefined;
}

export interface ControlContextData extends ControlComponentProps {
  tone: FieldTone;
}

export type ControlContainerProps = ViewProps;

export type ControlTriggerProps = PressableCoreProps;

export type ControlIconProps = IconProps;

export interface ControlFieldProps
  extends Partial<ControlComponentProps>, ControlLayoutProps {
  children?: ReactNode;
  label?: string;
  onPress?: PressableCoreProps["onPress"];
  prefix?: ReactNode;
  suffix?: ReactNode;
  onPressPrefix?: PressableCoreProps["onPress"];
  onPressSuffix?: PressableCoreProps["onPress"];
}

export type ControlLabelProps = TextProps;

export type ControlErrorLabelProps = TextProps;

export interface ControlAddonProps extends ViewProps {
  disabled?: boolean;
  hitSlop?: PressableCoreProps["hitSlop"];
  onPress?: PressableCoreProps["onPress"];
}

export interface ControlInputProps extends TextInputProps {
  ref?: Ref<ComponentRef<typeof TextInput>>;
}

export type ControlPlaceholderProps = TextProps;

export type ControlValueProps = TextProps;

export type ControlLoaderProps = SpinnerProps;
