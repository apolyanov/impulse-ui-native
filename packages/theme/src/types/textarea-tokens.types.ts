import type { ComponentSize } from "./components.types";

export type TextareaSizeTokens = Record<
  ComponentSize,
  {
    lineHeight: number;
    paddingVertical: number;
  }
>;

export interface TextareaTokens {
  counterColor: string;
  counterFontSize: number;
  disabledCounterColor: string;
  errorCounterColor: string;
  footerGap: number;
  footerMarginTop: number;
  sizes: TextareaSizeTokens;
}
