import type {
  ComponentSize,
  FieldVisualState,
  VisualStateTokens,
} from "./components.types";

export type TextareaSizeTokens = Record<
  ComponentSize,
  {
    lineHeight: number;
    paddingVertical: number;
  }
>;

export interface TextareaAppearanceTokens {
  counterColor: string;
}

export interface TextareaTokens {
  counterFontSize: number;
  footerGap: number;
  footerMarginTop: number;
  sizes: TextareaSizeTokens;
  states: VisualStateTokens<FieldVisualState, TextareaAppearanceTokens>;
}
