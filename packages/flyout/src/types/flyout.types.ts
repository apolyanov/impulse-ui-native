import type {
  ComponentRef,
  NamedExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from "react";
import type { View as NativeView, ScrollViewProps } from "react-native";

import type { OverlayComponentProps } from "@impulse-ui-native/overlay";
import type { TextProps, ViewProps } from "@impulse-ui-native/primitives";
import type { FlyoutPlacement } from "@impulse-ui-native/theme";

export interface FlyoutRootProps extends Omit<OverlayComponentProps, "title"> {
  placement?: FlyoutPlacement;
  topOffset?: number;
  bottomOffset?: number;
  style?: ViewProps["style"];
}

export interface FlyoutProps extends FlyoutRootProps {
  title?: OverlayComponentProps["title"];
  header?: ReactNode;
}

export type FlyoutHeaderProps = ViewProps;
export type FlyoutContentProps = ViewProps;
export type FlyoutTitleProps = TextProps;

export type FlyoutHandleProps = ViewProps;

export type FlyoutScrollViewProps = ScrollViewProps;

export interface FlyoutKeyboardAwareViewProps extends ViewProps {
  /** Reserve keyboard overlap inside the body without translating the sheet. Defaults to true. */
  enabled?: boolean;
  /** Additional space above the keyboard, in logical units. Defaults to components.flyout.keyboardOffset (8). */
  keyboardOffset?: number;
}

export type FlyoutKeyboardAwareViewComponent = NamedExoticComponent<
  PropsWithoutRef<FlyoutKeyboardAwareViewProps> &
    RefAttributes<ComponentRef<typeof NativeView>>
>;
