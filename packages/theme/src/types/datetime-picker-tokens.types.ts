export type DatetimePickerDayVisualState =
  | "default"
  | "outsideMonth"
  | "range"
  | "selected";

export interface DatetimePickerDayState {
  currentMonth?: boolean;
  inRange?: boolean;
  selected?: boolean;
}

export interface DatetimePickerCalendarTokens {
  dayNamesMarginBottom: number;
  weeksGap: number;
}

export interface DatetimePickerDayTokens {
  size: number;
  borderRadius: number;
  states: Record<
    DatetimePickerDayVisualState,
    {
      backgroundColor: string;
      color: string;
    }
  >;
}

export interface DatetimePickerFlyoutActionsTokens {
  gap: number;
  buttonsGap: number;
  clearColor: string;
}

export interface DatetimePickerQuickDateOptionsTokens {
  gap: number;
}

export interface DatetimePickerVisibleDateSelectTokens {
  gap: number;
}

export interface DatePickerFlyoutTokens {
  gap: number;
}

export interface DatetimePickerFlyoutTokens {
  gap: number;
}

export interface DatetimeRangePickerFlyoutTokens {
  gap: number;
  timeInputsGap: number;
}

export interface DatetimePickerTokens {
  calendar: DatetimePickerCalendarTokens;
  day: DatetimePickerDayTokens;
  datePickerFlyout: DatePickerFlyoutTokens;
  datetimePickerFlyout: DatetimePickerFlyoutTokens;
  datetimeRangePickerFlyout: DatetimeRangePickerFlyoutTokens;
  flyoutActions: DatetimePickerFlyoutActionsTokens;
  quickDateOptions: DatetimePickerQuickDateOptionsTokens;
  visibleDateSelect: DatetimePickerVisibleDateSelectTokens;
}
