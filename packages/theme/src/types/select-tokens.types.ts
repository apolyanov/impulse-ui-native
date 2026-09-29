import type {
  SelectionItemVisualState,
  VisualStateTokens,
} from "./components.types";

export interface SelectOptionAppearanceTokens {
  iconColor: string;
  iconOpacity: number;
}

export interface SelectOptionTokens {
  padding: number;
  states: VisualStateTokens<
    SelectionItemVisualState,
    SelectOptionAppearanceTokens
  >;
}

export interface SelectTokens {
  flyoutHeight: number;
  multiValueGap: number;
  multiValueMarginHorizontal: number;
  option: SelectOptionTokens;
}
