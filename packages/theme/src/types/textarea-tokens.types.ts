import type { ComponentSize, FieldVisualState } from "./components.types";

export type TextareaSizeTokens = Record<
  ComponentSize,
  {
    lineHeight: number;
    paddingVertical: number;
  }
>;

export interface TextareaTokens {
  counterFontSize: number;
  footerGap: number;
  footerMarginTop: number;
  sizes: TextareaSizeTokens;
  states: Record<FieldVisualState, { counterColor: string }>;
}
