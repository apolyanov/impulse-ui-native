import type { ReactNode } from "react";

import type { OverlayComponentProps } from "@impulse-ui-native/overlay";
import type {
  ButtonProps,
  TextProps,
  ViewProps,
} from "@impulse-ui-native/primitives";
import type { ToastTone } from "@impulse-ui-native/theme";

export type ToastPlacement = "top" | "bottom";

export interface ToastRootProps extends OverlayComponentProps {
  placement?: ToastPlacement;
  tone?: ToastTone;
  /** Milliseconds after entry completes. Zero persists until dismissed. */
  duration?: number;
}

export interface ToastProps extends ToastRootProps {
  description?: ReactNode;
  action?: ReactNode;
  actionProps?: Omit<ToastActionProps, "children">;
  hideIcon?: boolean;
  hideClose?: boolean;
}

export type ToastContentProps = ViewProps;

export type ToastTitleProps = TextProps;

export type ToastDescriptionProps = TextProps;

export type ToastIconProps = ViewProps;

export interface ToastActionProps extends Omit<
  ButtonProps,
  "children" | "size" | "variant"
> {
  children?: ReactNode;
  closeOnPress?: boolean;
}

export type ToastCloseProps = Omit<ToastActionProps, "closeOnPress">;

export interface ToastContextValue {
  tone: ToastTone;
  interactive: boolean;
  close: () => void;
}
