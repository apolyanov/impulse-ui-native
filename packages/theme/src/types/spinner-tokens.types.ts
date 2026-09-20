import type { ComponentSize } from "./components.types";

export type SpinnerTone = "primary" | "secondary" | "neutral" | "inverse";

export interface SpinnerTokens {
  baseSize: number;
  sizes: Record<ComponentSize, number>;
  colors: Record<SpinnerTone, string>;
}
