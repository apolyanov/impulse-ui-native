import type {
  SelectionItemVisualState,
  VisualStateTokens,
} from "./components.types";

export interface TimePickerColumnAppearanceTokens {
  color: string;
  fontWeight: number;
}

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
  states: VisualStateTokens<
    SelectionItemVisualState,
    TimePickerColumnAppearanceTokens
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
