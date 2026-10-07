import type { ColorPair } from "./theme-provider.types";

export type ToastTone = "success" | "info" | "warning" | "error";

export interface ToastTokens {
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
  padding: number;
  gap: number;
  stackLimit: number;
  stackScaleStep: number;
  contentGap: number;
  edgeOffset: number;
  topOffset: number;
  iconSize: number;
  iconContainerSize: number;
  actionMinSize: number;
  titleColor: string;
  descriptionColor: string;
  actionColor: string;
  disabledColor: string;
  titleFontSize: number;
  titleLineHeight: number;
  descriptionFontSize: number;
  descriptionLineHeight: number;
  zIndexBase: number;
  tones: Record<ToastTone, ColorPair>;
}
