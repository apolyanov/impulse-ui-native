import type { ReactNode } from "react";
import type { ScrollViewProps } from "react-native";

import type { OverlayComponentProps } from "@impulse-ui-native/overlay";
import type { TextProps, ViewProps } from "@impulse-ui-native/primitives";

export interface FlyoutRootProps extends Omit<OverlayComponentProps, "title"> {
  placement?: "top" | "bottom";
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
