import type { FeedbackTone } from "./components.types";
import type { ColorPair } from "./theme-provider.types";
import type { FontWeightValue } from "./tokens.types";

export type ToastTone = FeedbackTone;

export interface ToastTokens {
  enterDuration: number;
  exitDuration: number;
  stackDuration: number;
  actionFontWeight: FontWeightValue;
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
  closeIconSize: number;
  closeColor: string;
  iconContainerSize: number;
  actionMinSize: number;
  titleColor: string;
  descriptionColor: string;
  disabledColor: string;
  titleFontSize: number;
  titleLineHeight: number;
  descriptionFontSize: number;
  descriptionLineHeight: number;
  zIndexBase: number;
  tones: Record<ToastTone, ColorPair & { actionColor: string }>;
}
