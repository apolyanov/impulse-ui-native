import { DatetimePickerTokens, PrimitiveThemeTokens } from "../types";

export function createDatetimePickerTokens(
  tokens: PrimitiveThemeTokens,
): DatetimePickerTokens {
  return {
    calendar: {
      dayNamesMarginBottom: tokens.space.msm,
      weeksGap: tokens.space.xxs,
    },
    day: {
      size: 40,
      borderRadius: tokens.radii.sm,

      color: tokens.colors.text.primary,
      outsideMonthColor: tokens.colors.neutral["5"],

      selectedBackgroundColor: tokens.colors.primary.value,
      selectedColor: tokens.colors.primary.contrast,

      rangeBackgroundColor: tokens.colors.secondary.value,
      rangeColor: tokens.colors.secondary.contrast,
    },
    datePickerFlyout: {
      gap: tokens.space.msm,
    },
    datetimePickerFlyout: {
      gap: tokens.space.msm,
    },
    datetimeRangePickerFlyout: {
      gap: tokens.space.msm,
      timeInputsGap: tokens.space.xs,
    },
    flyoutActions: {
      gap: tokens.space.msm,
      buttonsGap: tokens.space.xs,
      clearColor: tokens.colors.primary.value,
    },
    quickDateOptions: {
      gap: tokens.space.xs,
    },
    visibleDateSelect: {
      gap: tokens.space.xs,
    },
  };
}
