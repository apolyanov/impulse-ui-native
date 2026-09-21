import type { ComponentSize, ComponentVariant } from "./components.types";

export type BadgeTone =
  | "primary"
  | "secondary"
  | "neutral"
  | "error"
  | "warning"
  | "success"
  | "info";

export interface BadgeSizeTokens {
  fontSize: number;
  height: number;
  iconSize: number;
  lineHeight: number;
  minWidth: number;
  paddingHorizontal: number;
}

export interface BadgeVariantTokens {
  backgroundColor: string;
  borderColor: string;
  color: string;
}

export type BadgeColorTokens = Record<ComponentVariant, BadgeVariantTokens>;

export interface BadgeTokens {
  addonHitSlop: number;
  borderRadius: number;
  borderWidth: number;
  fontFamily: string;
  gap: number;
  sizes: Record<ComponentSize, BadgeSizeTokens>;
  colors: Record<BadgeTone, BadgeColorTokens>;
}
