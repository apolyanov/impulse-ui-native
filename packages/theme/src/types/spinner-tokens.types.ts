import type { ComponentSize, ComponentTone } from "./components.types";

export type SpinnerTone = ComponentTone | "inverse";

export interface SpinnerTokens {
  baseSize: number;
  sizes: Record<ComponentSize, number>;
  colors: Record<SpinnerTone, string>;
}
