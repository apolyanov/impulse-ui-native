import type { OverlayComponentProps } from "./overlay.types";

export type OverlayLifecycleStatus = "closed" | "opening" | "open" | "closing";

export type OverlayStatusCallback = (
  id: string,
  status: OverlayLifecycleStatus,
) => void;

export type OverlayLifecycleProps = Pick<
  OverlayComponentProps,
  | "id"
  | "open"
  | "onOpen"
  | "onOpenFinished"
  | "onClose"
  | "onCloseFinished"
  | "onStatusChange"
>;

export type OverlayTransitionCompletion = (transitionId: number) => void;

export type OverlayTransitionHandler = (
  transitionId: number,
  complete: OverlayTransitionCompletion,
) => void;

export interface OverlayLifecycleOptions {
  /** Entry waits for readiness; the overlay remains mounted while preparing. */
  ready?: boolean;

  onEnter?: OverlayTransitionHandler;
  onExit?: OverlayTransitionHandler;
}

export interface OverlayLifecycle {
  status: OverlayLifecycleStatus;
  mounted: boolean;
  interactive: boolean;

  close: () => void;
  completeTransition: OverlayTransitionCompletion;
}
