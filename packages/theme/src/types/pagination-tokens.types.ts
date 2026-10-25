import type {
  ComponentSize,
  ComponentTone,
  VisualStateTokens,
} from "./components.types";

export type PaginationVisualState = "default" | "current" | "disabled";

export interface PaginationState {
  current: boolean;
  disabled?: boolean;
}

export interface PaginationAppearanceTokens {
  backgroundColor: string;
  borderColor: string;
  color: string;
  ellipsisColor: string;
}

export interface PaginationSizeToken {
  compactMinWidth: number;
  controlSize: number;
  fontSize: number;
  hitSlop: number;
  iconSize: number;
  paddingHorizontal: number;
}

export interface PaginationTokens {
  borderRadius: number;
  borderWidth: number;
  gap: number;
  sizes: Record<ComponentSize, PaginationSizeToken>;
  colors: Record<
    ComponentTone,
    VisualStateTokens<PaginationVisualState, PaginationAppearanceTokens>
  >;
}
