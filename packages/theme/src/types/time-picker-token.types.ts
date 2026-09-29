import type { SelectionItemVisualState } from "./components.types";

export interface TimePickerColumnTokens {
  width: number;
  height: number;
  gap: number;

  listWidth: number;
  itemHeight: number;
  visibleItems: number;
  verticalPadding: number;
  initialScrollIndexViewOffset: number;

  fontSize: number;
  states: Record<
    SelectionItemVisualState,
    {
      color: string;
      fontWeight: number;
    }
  >;
}

export interface TimePickerFlyoutTokens {
  gap: number;
}

export interface TimePickerColumnsTokens {
  height: number;
  gap: number;
  indicatorHeight: number;
  indicatorWidth: number;
  indicatorTop: number;
  indicatorBorderRadius: number;
  indicatorBackgroundColor: string;
}

export interface TimePickerTokens {
  column: TimePickerColumnTokens;
  flyout: TimePickerFlyoutTokens;
  columns: TimePickerColumnsTokens;
}
