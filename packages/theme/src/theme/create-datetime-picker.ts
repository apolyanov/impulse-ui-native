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
      states: {
        default: {
          backgroundColor: "transparent",
          color: tokens.colors.text.primary,
        },
        outsideMonth: {
          backgroundColor: "transparent",
          color: tokens.colors.text.disabled,
        },
        range: {
          backgroundColor: tokens.colors.secondary.value,
          color: tokens.colors.secondary.contrast,
        },
        selected: {
          backgroundColor: tokens.colors.primary.value,
          color: tokens.colors.primary.contrast,
        },
      },
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
