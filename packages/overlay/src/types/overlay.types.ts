import type { ComponentType, ElementType, ReactNode } from "react";

import type { OverlayStore } from "../stores";

export type OverlayID = string;

export type OverlayLifecycleCallback = (id: OverlayID) => void;

export type OverlayListener = () => void;

export interface OverlayProviderProps {
  store: OverlayStore;
}

export interface OverlayProviderValue {
  store: OverlayStore;
}

/**
 * Props shared by every component that can be rendered by an OverlayHost.
 */
export interface OverlayComponentProps {
  id: OverlayID;
  children?: ReactNode;
  open?: boolean;
  layer?: number;
  title?: string;
  onOpen?: OverlayLifecycleCallback;
  onOpenFinished?: OverlayLifecycleCallback;
  onClose?: OverlayLifecycleCallback;
  onCloseFinished?: OverlayLifecycleCallback;
}

export type OverlayOpenArguments<Props extends object> = [Props] extends [never]
  ? []
  : keyof Props extends never
    ? []
    : [props: Props];

export type OverlayTitle<Props extends object> =
  | string
  | ((...args: OverlayOpenArguments<Props>) => string | undefined);

export interface OverlayRegistrationProps<Props extends object = never> {
  id: OverlayID;
  unique?: boolean;
  Component: ComponentType<OverlayComponentProps>;
  Content: ComponentType<Props>;
  title?: OverlayTitle<Props>;
  onOpen?: OverlayLifecycleCallback;
  onOpenFinished?: OverlayLifecycleCallback;
  onClose?: OverlayLifecycleCallback;
  onCloseFinished?: OverlayLifecycleCallback;
}

export type OpenOverlay<Props extends object> = (
  ...args: OverlayOpenArguments<Props>
) => OverlayID;

export interface OverlayController<Props extends object> {
  open: OpenOverlay<Props>;
  close: () => void;
}

export interface OverlayEntry {
  id: OverlayID;
  open: boolean;
  Component: ComponentType<OverlayComponentProps>;
  Content: ElementType;
  contentProps?: object;
  title?: string;
  onOpen?: OverlayLifecycleCallback;
  onOpenFinished?: OverlayLifecycleCallback;
  onClose?: OverlayLifecycleCallback;
  onCloseFinished?: OverlayLifecycleCallback;
}
