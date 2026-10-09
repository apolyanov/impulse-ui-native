import type { ReactNode } from "react";

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

export interface FlyoutHandleProps extends ViewProps {
  placement?: FlyoutRootProps["placement"];
}
