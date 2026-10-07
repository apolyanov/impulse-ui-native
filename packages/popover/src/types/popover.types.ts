import type { PropsWithChildren, ReactNode, RefObject } from "react";
import type { View as NativeView } from "react-native";

import type {
  PressableCoreProps,
  TextProps,
  ViewProps,
} from "@impulse-ui-native/primitives";

export type PopoverPlacement = "top" | "bottom" | "left" | "right";
export type PopoverSurface = "elevated" | "inverse";

export interface PopoverRootProps extends PropsWithChildren {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;

  disabled?: boolean;

  placement?: PopoverPlacement;
  surface?: PopoverSurface;
  portalName?: string;
}

export interface PopoverTriggerProps
  extends Omit<PressableCoreProps, "children">, PropsWithChildren {
  trigger?: "press" | "longPress";
}

export type PopoverContentProps = ViewProps;
export type PopoverTitleProps = TextProps;
export type PopoverDescriptionProps = TextProps;
export type PopoverCloseProps = Omit<PressableCoreProps, "children"> &
  PropsWithChildren;

export interface PopoverProps extends PopoverRootProps {
  trigger: ReactNode;
  triggerProps?: PopoverTriggerProps;
  contentProps?: PopoverContentProps;
}

export interface TooltipProps extends Omit<PopoverRootProps, "surface"> {
  content: ReactNode;
  triggerProps?: PopoverTriggerProps;

  /** Milliseconds before dismissal. Zero keeps the hint open. */
  duration?: number;
}

export interface PopoverContextValue {
  open: boolean;
  disabled: boolean;

  setOpen: (open: boolean) => void;

  anchorRef: RefObject<NativeView | null>;
  placement: PopoverPlacement;
  surface: PopoverSurface;
  portalName?: string;
}

export interface PopoverRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface PopoverPosition {
  x: number;
  y: number;
  placement: PopoverPlacement;
  arrowOffset: number;
  showArrow: boolean;
}

export interface PopoverPositionOptions {
  anchor: PopoverRect;
  bounds: PopoverRect;
  width: number;
  height: number;

  placement: PopoverPlacement;
  gap: number;
  arrowInset: number;
}

export interface PopoverSurfaceStyleProps {
  surface: PopoverSurface;
  bounds: PopoverRect;
  host?: PopoverRect;
  position: PopoverPosition | null;
  ready: boolean;
}
