import type { PropsWithChildren, ReactNode } from "react";
import type { SharedValue } from "react-native-reanimated";

import type {
  OverlayComponentProps,
  OverlayLifecycleProps,
  OverlayLifecycleStatus,
} from "@impulse-ui-native/overlay";
import type {
  PressableCoreProps,
  TextProps,
  ViewProps,
} from "@impulse-ui-native/primitives";
import type { ComponentSize } from "@impulse-ui-native/theme";

export interface ModalSurfaceProps extends ViewProps {
  size?: ComponentSize;
}

export interface ModalProviderProps
  extends OverlayLifecycleProps, PropsWithChildren {
  layer?: number;
}

export type ModalRootProps = ModalSurfaceProps;

export interface ModalContextValue {
  status: OverlayLifecycleStatus;
  mounted: boolean;
  interactive: boolean;
  progress: SharedValue<number>;
  layer: number;
  close: () => void;
}

export interface ModalProps
  extends Omit<ModalRootProps, "id" | "children">, ModalProviderProps {
  title?: OverlayComponentProps["title"];
  header?: ReactNode;
  footer?: ReactNode;
  hideClose?: boolean;
}

export type ModalHeaderProps = ViewProps;
export type ModalCloseProps = PropsWithChildren<
  Omit<PressableCoreProps, "children">
>;
export type ModalContentProps = ViewProps;
export type ModalFooterProps = ViewProps;
export type ModalTitleProps = TextProps;
export type ModalDescriptionProps = TextProps;

export type ModalLifecycleProps = OverlayLifecycleProps;
