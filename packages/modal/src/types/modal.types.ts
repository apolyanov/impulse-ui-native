import type { ReactNode } from "react";

import type { TextProps, ViewProps } from "@impulse-ui-native/primitives";
import type { ComponentSize } from "@impulse-ui-native/theme";

export interface ModalRootProps extends ViewProps {
  size?: ComponentSize;
}

export interface ModalProps extends ModalRootProps {
  header?: ReactNode;
  footer?: ReactNode;
}

export type ModalHeaderProps = ViewProps;
export type ModalContentProps = ViewProps;
export type ModalFooterProps = ViewProps;
export type ModalTitleProps = TextProps;
export type ModalDescriptionProps = TextProps;
