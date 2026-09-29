import type { SelectionItemVisualState } from "./components.types";

export interface SelectOptionTokens {
  padding: number;
  states: Record<
    SelectionItemVisualState,
    {
      iconColor: string;
      iconOpacity: number;
    }
  >;
}

export interface SelectTokens {
  flyoutHeight: number;
  multiValueGap: number;
  multiValueMarginHorizontal: number;
  option: SelectOptionTokens;
}
