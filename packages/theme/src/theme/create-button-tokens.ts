import { ButtonTokens, PrimitiveThemeTokens } from "../types";

export function createButtonTokens(tokens: PrimitiveThemeTokens): ButtonTokens {
  const primary = tokens.colors.primary.value;
  const primaryContrast = tokens.colors.primary.contrast;

  const secondary = tokens.colors.secondary.value;
  const secondaryContrast = tokens.colors.secondary.contrast;

  const neutral = tokens.colors.text.secondary;
  const neutralContrast = tokens.colors.text.inverse;
  const neutralSoft = tokens.colors.surface.subtle.value;
  const textColor = tokens.colors.text.primary;
  const subtle = tokens.colors.subtle.value;

  const disabledBackground = tokens.colors.surface.subtle.value;
  const disabledBorder = tokens.colors.border.default.value;
  const disabledSoftBorder = tokens.colors.border.subtle.value;

  const disabledColor = tokens.colors.text.disabled;

  return {
    borderWidth: tokens.borderSize.sm,
    borderRadius: tokens.radii.md,

    sizes: {
      small: {
        height: 32,
        paddingVertical: 6,
        paddingHorizontal: 12,
        fontSize: tokens.fontSize.xsm,
      },
      medium: {
        height: 40,
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontSize: tokens.fontSize.sm,
      },
      large: {
        height: 48,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: tokens.fontSize.sm,
      },
    },

    colors: {
      neutral: {
        filled: {
          default: {
            backgroundColor: neutral,
            borderColor: neutral,
            color: neutralContrast,
          },
          loading: {
            backgroundColor: neutral,
            borderColor: neutral,
            color: neutralContrast,
          },
          disabled: {
            backgroundColor: disabledBackground,
            borderColor: disabledBorder,
            color: disabledColor,
          },
        },
        outlined: {
          default: {
            backgroundColor: "transparent",
            borderColor: neutral,
            color: neutral,
          },
          loading: {
            backgroundColor: "transparent",
            borderColor: neutral,
            color: neutral,
          },
          disabled: {
            backgroundColor: "transparent",
            borderColor: disabledBorder,
            color: disabledColor,
          },
        },
        soft: {
          default: {
            backgroundColor: neutralSoft,
            borderColor: neutralSoft,
            color: textColor,
          },
          loading: {
            backgroundColor: neutralSoft,
            borderColor: neutralSoft,
            color: textColor,
          },
          disabled: {
            backgroundColor: disabledBackground,
            borderColor: disabledSoftBorder,
            color: disabledColor,
          },
        },
        ghost: {
          default: {
            backgroundColor: "transparent",
            borderColor: "transparent",
            color: neutral,
          },
          loading: {
            backgroundColor: "transparent",
            borderColor: "transparent",
            color: neutral,
          },
          disabled: {
            backgroundColor: "transparent",
            borderColor: "transparent",
            color: disabledColor,
          },
        },
      },
      primary: {
        filled: {
          default: {
            backgroundColor: primary,
            borderColor: primary,
            color: primaryContrast,
          },
          loading: {
            backgroundColor: primary,
            borderColor: primary,
            color: primaryContrast,
          },
          disabled: {
            backgroundColor: disabledBackground,
            borderColor: disabledBorder,
            color: disabledColor,
          },
        },
        outlined: {
          default: {
            backgroundColor: "transparent",
            borderColor: primary,
            color: primary,
          },
          loading: {
            backgroundColor: "transparent",
            borderColor: primary,
            color: primary,
          },
          disabled: {
            backgroundColor: "transparent",
            borderColor: disabledBorder,
            color: disabledColor,
          },
        },
        soft: {
          default: {
            backgroundColor: secondary,
            borderColor: secondary,
            color: secondaryContrast,
          },
          loading: {
            backgroundColor: secondary,
            borderColor: secondary,
            color: secondaryContrast,
          },
          disabled: {
            backgroundColor: disabledBackground,
            borderColor: disabledSoftBorder,
            color: disabledColor,
          },
        },
        ghost: {
          default: {
            backgroundColor: "transparent",
            borderColor: "transparent",
            color: primary,
          },
          loading: {
            backgroundColor: "transparent",
            borderColor: "transparent",
            color: primary,
          },
          disabled: {
            backgroundColor: "transparent",
            borderColor: "transparent",
            color: disabledColor,
          },
        },
      },
      secondary: {
        filled: {
          default: {
            backgroundColor: secondary,
            borderColor: secondary,
            color: secondaryContrast,
          },
          loading: {
            backgroundColor: secondary,
            borderColor: secondary,
            color: secondaryContrast,
          },
          disabled: {
            backgroundColor: disabledBackground,
            borderColor: disabledBorder,
            color: disabledColor,
          },
        },
        outlined: {
          default: {
            backgroundColor: "transparent",
            borderColor: secondaryContrast,
            color: secondaryContrast,
          },
          loading: {
            backgroundColor: "transparent",
            borderColor: secondaryContrast,
            color: secondaryContrast,
          },
          disabled: {
            backgroundColor: "transparent",
            borderColor: disabledBorder,
            color: disabledColor,
          },
        },
        soft: {
          default: {
            backgroundColor: subtle,
            borderColor: subtle,
            color: secondaryContrast,
          },
          loading: {
            backgroundColor: subtle,
            borderColor: subtle,
            color: secondaryContrast,
          },
          disabled: {
            backgroundColor: disabledBackground,
            borderColor: disabledSoftBorder,
            color: disabledColor,
          },
        },
        ghost: {
          default: {
            backgroundColor: "transparent",
            borderColor: "transparent",
            color: secondaryContrast,
          },
          loading: {
            backgroundColor: "transparent",
            borderColor: "transparent",
            color: secondaryContrast,
          },
          disabled: {
            backgroundColor: "transparent",
            borderColor: "transparent",
            color: disabledColor,
          },
        },
      },
    },
  };
}
