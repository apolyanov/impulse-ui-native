import type {
  ComponentTone,
  SelectionVisualState,
  VisualStateTokens,
} from "./components.types";

export interface SelectOptionAppearanceTokens {
  iconColor: string;
  iconOpacity: number;
}

export interface SelectOptionTokens {
  height: number;
  padding: number;
  colors: Record<
    ComponentTone,
    VisualStateTokens<SelectionVisualState, SelectOptionAppearanceTokens>
  >;
}

export interface SelectTokens {
  flyoutHeight: number;
  multiValueGap: number;
  multiValueMarginHorizontal: number;
  option: SelectOptionTokens;
}
