import type { PrimitiveThemeTokens, RadioTokens } from "../types";

export function createRadioTokens(tokens: PrimitiveThemeTokens): RadioTokens {
  const primary = tokens.colors.primary.value;
  const primaryContrast = tokens.colors.primary.contrast;
  const secondary = tokens.colors.secondary.value;
  const secondaryContrast = tokens.colors.secondary.contrast;

  const neutral = tokens.colors.text.secondary;
  const neutralContrast = tokens.colors.text.inverse;
  const neutralSoft = tokens.colors.surface.subtle.value;
  const neutralSoftContrast = tokens.colors.text.primary;
  const subtle = tokens.colors.subtle.value;

  return {
    borderWidth: tokens.borderSize.md,
    borderRadius: tokens.radii.round,

    sizes: {
      small: {
        size: 20,
        indicatorSize: 8,
        hitSlop: 12,
      },
      medium: {
        size: 24,
        indicatorSize: 10,
        hitSlop: 10,
      },
      large: {
        size: 28,
        indicatorSize: 12,
        hitSlop: 8,
      },
    },

    colors: {
      neutral: {
        filled: {
          unselected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.strong.value,
            color: neutralContrast,
          },
          selected: {
            backgroundColor: neutral,
            borderColor: neutral,
            color: neutralContrast,
          },
          disabledUnselected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.default.value,
            color: tokens.colors.text.disabled,
          },
          disabledSelected: {
            backgroundColor: tokens.colors.surface.subtle.value,
            borderColor: tokens.colors.border.default.value,
            color: tokens.colors.text.disabled,
          },
        },
        outlined: {
          unselected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.strong.value,
            color: neutral,
          },
          selected: {
            backgroundColor: "transparent",
            borderColor: neutral,
            color: neutral,
          },
          disabledUnselected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.default.value,
            color: tokens.colors.text.disabled,
          },
          disabledSelected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.default.value,
            color: tokens.colors.text.disabled,
          },
        },
        soft: {
          unselected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.strong.value,
            color: neutralSoftContrast,
          },
          selected: {
            backgroundColor: neutralSoft,
            borderColor: neutralSoft,
            color: neutralSoftContrast,
          },
          disabledUnselected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.default.value,
            color: tokens.colors.text.disabled,
          },
          disabledSelected: {
            backgroundColor: tokens.colors.surface.subtle.value,
            borderColor: tokens.colors.border.subtle.value,
            color: tokens.colors.text.disabled,
          },
        },
      },
      primary: {
        filled: {
          unselected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.strong.value,
            color: primaryContrast,
          },
          selected: {
            backgroundColor: primary,
            borderColor: primary,
            color: primaryContrast,
          },
          disabledUnselected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.default.value,
            color: tokens.colors.text.disabled,
          },
          disabledSelected: {
            backgroundColor: tokens.colors.surface.subtle.value,
            borderColor: tokens.colors.border.default.value,
            color: tokens.colors.text.disabled,
          },
        },
        outlined: {
          unselected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.strong.value,
            color: primary,
          },
          selected: {
            backgroundColor: "transparent",
            borderColor: primary,
            color: primary,
          },
          disabledUnselected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.default.value,
            color: tokens.colors.text.disabled,
          },
          disabledSelected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.default.value,
            color: tokens.colors.text.disabled,
          },
        },
        soft: {
          unselected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.strong.value,
            color: secondaryContrast,
          },
          selected: {
            backgroundColor: secondary,
            borderColor: secondary,
            color: secondaryContrast,
          },
          disabledUnselected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.default.value,
            color: tokens.colors.text.disabled,
          },
          disabledSelected: {
            backgroundColor: tokens.colors.surface.subtle.value,
            borderColor: tokens.colors.border.subtle.value,
            color: tokens.colors.text.disabled,
          },
        },
      },
      secondary: {
        filled: {
          unselected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.strong.value,
            color: secondaryContrast,
          },
          selected: {
            backgroundColor: secondary,
            borderColor: secondary,
            color: secondaryContrast,
          },
          disabledUnselected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.default.value,
            color: tokens.colors.text.disabled,
          },
          disabledSelected: {
            backgroundColor: tokens.colors.surface.subtle.value,
            borderColor: tokens.colors.border.default.value,
            color: tokens.colors.text.disabled,
          },
        },
        outlined: {
          unselected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.strong.value,
            color: secondaryContrast,
          },
          selected: {
            backgroundColor: "transparent",
            borderColor: secondaryContrast,
            color: secondaryContrast,
          },
          disabledUnselected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.default.value,
            color: tokens.colors.text.disabled,
          },
          disabledSelected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.default.value,
            color: tokens.colors.text.disabled,
          },
        },
        soft: {
          unselected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.strong.value,
            color: secondaryContrast,
          },
          selected: {
            backgroundColor: subtle,
            borderColor: subtle,
            color: secondaryContrast,
          },
          disabledUnselected: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.border.default.value,
            color: tokens.colors.text.disabled,
          },
          disabledSelected: {
            backgroundColor: tokens.colors.surface.subtle.value,
            borderColor: tokens.colors.border.subtle.value,
            color: tokens.colors.text.disabled,
          },
        },
      },
    },
  };
}
