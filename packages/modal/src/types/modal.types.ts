import type { ReactNode } from "react";

import type {
  OverlayComponentProps,
  OverlayLifecycleProps,
} from "@impulse-ui-native/overlay";
import type { TextProps, ViewProps } from "@impulse-ui-native/primitives";
import type { ComponentSize } from "@impulse-ui-native/theme";

export interface ModalSurfaceProps extends ViewProps {
  size?: ComponentSize;
}

export interface ModalRootProps
  extends
    Omit<ModalSurfaceProps, "id" | "children">,
    Omit<OverlayComponentProps, "title"> {}

export interface ModalProps extends ModalRootProps {
  title?: OverlayComponentProps["title"];
  header?: ReactNode;
  footer?: ReactNode;
}

export type ModalHeaderProps = ViewProps;
export type ModalContentProps = ViewProps;
export type ModalFooterProps = ViewProps;
export type ModalTitleProps = TextProps;
export type ModalDescriptionProps = TextProps;

export type ModalLifecycleProps = OverlayLifecycleProps;
