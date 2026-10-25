import type {
  ComponentSize,
  ComponentTone,
  DisplayVariant,
  FeedbackTone,
} from "./components.types";

export type BadgeTone = ComponentTone | FeedbackTone;

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

export type BadgeColorTokens = Record<DisplayVariant, BadgeVariantTokens>;

export interface BadgeTokens {
  addonHitSlop: number;
  borderRadius: number;
  borderWidth: number;
  fontFamily: string;
  gap: number;
  sizes: Record<ComponentSize, BadgeSizeTokens>;
  colors: Record<BadgeTone, BadgeColorTokens>;
}
