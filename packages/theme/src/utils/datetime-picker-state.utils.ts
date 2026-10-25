import type {
  ComponentTone,
  DatetimePickerDayAppearanceTokens,
  DatetimePickerDayState,
  DatetimePickerDayTokens,
} from "../types";

export function getDatetimePickerDayStateTokens(
  tokens: DatetimePickerDayTokens["colors"][ComponentTone],
  state: DatetimePickerDayState,
): DatetimePickerDayAppearanceTokens {
  const { currentMonth = false, inRange = false, selected = false } = state;

  if (selected) {
    return tokens.selected;
  }

  if (inRange) {
    return tokens.range;
  }

  return currentMonth ? tokens.default : tokens.outsideMonth;
}
