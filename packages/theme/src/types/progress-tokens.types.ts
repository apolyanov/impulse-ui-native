import type { ComponentSize } from "./components.types";
import type { SpinnerTone } from "./spinner-tokens.types";

export type ProgressVariant = "linear" | "circular";
export type ProgressTone = SpinnerTone;

export interface ProgressSizeTokens {
  linearHeight: number;
  circularSize: number;
  circularStrokeWidth: number;
}

export interface ProgressColorTokens {
  indicatorColor: string;
  trackColor: string;
}

export interface ProgressTokens {
  animationDuration: number;
  borderRadius: number;
  indeterminateLinearWidth: number;
  sizes: Record<ComponentSize, ProgressSizeTokens>;
  colors: Record<ProgressTone, ProgressColorTokens>;
}
