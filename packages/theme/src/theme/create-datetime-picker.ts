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
      colors: {
        neutral: {
          default: {
            backgroundColor: "transparent",
            color: tokens.colors.text.primary,
          },
          outsideMonth: {
            backgroundColor: "transparent",
            color: tokens.colors.text.disabled,
          },
          range: {
            backgroundColor: tokens.colors.surface.subtle.value,
            color: tokens.colors.text.primary,
          },
          selected: {
            backgroundColor: tokens.colors.text.secondary,
            color: tokens.colors.text.inverse,
          },
        },
        primary: {
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
        secondary: {
          default: {
            backgroundColor: "transparent",
            color: tokens.colors.text.primary,
          },
          outsideMonth: {
            backgroundColor: "transparent",
            color: tokens.colors.text.disabled,
          },
          range: {
            backgroundColor: tokens.colors.subtle.value,
            color: tokens.colors.secondary.contrast,
          },
          selected: {
            backgroundColor: tokens.colors.secondary.value,
            color: tokens.colors.secondary.contrast,
          },
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
      colors: {
        neutral: { clearColor: tokens.colors.text.secondary },
        primary: { clearColor: tokens.colors.primary.value },
        secondary: { clearColor: tokens.colors.secondary.contrast },
      },
    },
    quickDateOptions: {
      gap: tokens.space.xs,
    },
    visibleDateSelect: {
      gap: tokens.space.xs,
    },
  };
}
