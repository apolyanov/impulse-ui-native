import type { ComponentSize, ComponentVariant } from "./components.types";

export type AvatarStatus = "online" | "offline" | "away" | "busy";

export interface AvatarSizeTokens {
  fontSize: number;
  size: number;
  statusBorderWidth: number;
  statusSize: number;
}

export interface AvatarVariantTokens {
  backgroundColor: string;
  borderColor: string;
  color: string;
}

export interface AvatarTokens {
  borderWidth: number;
  fontFamily: string;
  sizes: Record<ComponentSize, AvatarSizeTokens>;
  statusBorderColor: string;
  statusColors: Record<AvatarStatus, string>;
  variants: Record<ComponentVariant, AvatarVariantTokens>;
}
