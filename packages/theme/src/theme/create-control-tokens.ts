import {
  ControlAddonTokens,
  ControlContainerTokens,
  ControlErrorTokens,
  ControlInputTokens,
  ControlLabelTokens,
  PrimitiveThemeTokens,
} from "../types";

export function createControlAddonTokens(
  tokens: PrimitiveThemeTokens,
): ControlAddonTokens {
  const primary = tokens.colors.primary.value;
  const primaryContrast = tokens.colors.primary.contrast;
  const secondaryContrast = tokens.colors.secondary.contrast;
  const neutral = tokens.colors.text.secondary;
  const neutralContrast = tokens.colors.text.inverse;
  const disabledColor = tokens.colors.text.disabled;
  const errorColor = tokens.colors.feedback.error.value;
  const errorContrast = tokens.colors.feedback.error.contrast;

  return {
    marginHorizontal: tokens.space.xxs,
    hitSlop: tokens.space.sm,
    colors: {
      neutral: {
        outlined: {
          default: {
            iconColor: neutral,
          },
          error: {
            iconColor: errorColor,
          },
          disabled: {
            iconColor: disabledColor,
          },
          disabledError: {
            iconColor: disabledColor,
          },
        },
        soft: {
          default: {
            iconColor: neutral,
          },
          error: {
            iconColor: errorColor,
          },
          disabled: {
            iconColor: disabledColor,
          },
          disabledError: {
            iconColor: disabledColor,
          },
        },
        filled: {
          default: {
            iconColor: neutralContrast,
          },
          error: {
            iconColor: errorContrast,
          },
          disabled: {
            iconColor: disabledColor,
          },
          disabledError: {
            iconColor: disabledColor,
          },
        },
      },
      primary: {
        outlined: {
          default: {
            iconColor: primary,
          },
          error: {
            iconColor: errorColor,
          },
          disabled: {
            iconColor: disabledColor,
          },
          disabledError: {
            iconColor: disabledColor,
          },
        },
        soft: {
          default: {
            iconColor: primary,
          },
          error: {
            iconColor: errorColor,
          },
          disabled: {
            iconColor: disabledColor,
          },
          disabledError: {
            iconColor: disabledColor,
          },
        },
        filled: {
          default: {
            iconColor: primaryContrast,
          },
          error: {
            iconColor: errorContrast,
          },
          disabled: {
            iconColor: disabledColor,
          },
          disabledError: {
            iconColor: disabledColor,
          },
        },
      },
      secondary: {
        outlined: {
          default: {
            iconColor: secondaryContrast,
          },
          error: {
            iconColor: errorColor,
          },
          disabled: {
            iconColor: disabledColor,
          },
          disabledError: {
            iconColor: disabledColor,
          },
        },
        soft: {
          default: {
            iconColor: secondaryContrast,
          },
          error: {
            iconColor: errorColor,
          },
          disabled: {
            iconColor: disabledColor,
          },
          disabledError: {
            iconColor: disabledColor,
          },
        },
        filled: {
          default: {
            iconColor: secondaryContrast,
          },
          error: {
            iconColor: errorContrast,
          },
          disabled: {
            iconColor: disabledColor,
          },
          disabledError: {
            iconColor: disabledColor,
          },
        },
      },
    },
  };
}

export function createControlContainerTokens(
  tokens: PrimitiveThemeTokens,
): ControlContainerTokens {
  const primary = tokens.colors.primary.value;
  const secondary = tokens.colors.secondary.value;
  const secondaryContrast = tokens.colors.secondary.contrast;
  const subtle = tokens.colors.subtle.value;
  const neutral = tokens.colors.text.secondary;
  const disabledBackground = tokens.colors.surface.subtle.value;
  const defaultBorder = tokens.colors.border.default.value;
  const errorColor = tokens.colors.feedback.error.value;
  const errorContrast = tokens.colors.feedback.error.contrast;

  return {
    borderWidth: tokens.borderSize.sm,
    borderRadius: tokens.radii.md,

    sizes: {
      small: {
        height: 32,
        paddingHorizontal: tokens.space.xs,
      },
      medium: {
        height: 40,
        paddingHorizontal: tokens.space.xs,
      },
      large: {
        height: 48,
        paddingHorizontal: tokens.space.xs,
      },
    },

    colors: {
      neutral: {
        outlined: {
          default: {
            backgroundColor: "transparent",
            borderColor: defaultBorder,
            opacity: 1,
          },
          error: {
            backgroundColor: "transparent",
            borderColor: errorColor,
            opacity: 1,
          },
          disabled: {
            backgroundColor: "transparent",
            borderColor: defaultBorder,
            opacity: 0.7,
          },
          disabledError: {
            backgroundColor: "transparent",
            borderColor: defaultBorder,
            opacity: 0.7,
          },
        },
        soft: {
          default: {
            backgroundColor: disabledBackground,
            borderColor: "transparent",
            opacity: 1,
          },
          error: {
            backgroundColor: errorContrast,
            borderColor: errorColor,
            opacity: 1,
          },
          disabled: {
            backgroundColor: disabledBackground,
            borderColor: "transparent",
            opacity: 0.7,
          },
          disabledError: {
            backgroundColor: disabledBackground,
            borderColor: "transparent",
            opacity: 0.7,
          },
        },
        filled: {
          default: {
            backgroundColor: neutral,
            borderColor: "transparent",
            opacity: 1,
          },
          error: {
            backgroundColor: errorColor,
            borderColor: errorColor,
            opacity: 1,
          },
          disabled: {
            backgroundColor: disabledBackground,
            borderColor: "transparent",
            opacity: 0.7,
          },
          disabledError: {
            backgroundColor: disabledBackground,
            borderColor: "transparent",
            opacity: 0.7,
          },
        },
      },
      primary: {
        outlined: {
          default: {
            backgroundColor: "transparent",
            borderColor: primary,
            opacity: 1,
          },
          error: {
            backgroundColor: "transparent",
            borderColor: errorColor,
            opacity: 1,
          },
          disabled: {
            backgroundColor: "transparent",
            borderColor: defaultBorder,
            opacity: 0.7,
          },
          disabledError: {
            backgroundColor: "transparent",
            borderColor: defaultBorder,
            opacity: 0.7,
          },
        },
        soft: {
          default: {
            backgroundColor: secondary,
            borderColor: "transparent",
            opacity: 1,
          },
          error: {
            backgroundColor: errorContrast,
            borderColor: errorColor,
            opacity: 1,
          },
          disabled: {
            backgroundColor: disabledBackground,
            borderColor: "transparent",
            opacity: 0.7,
          },
          disabledError: {
            backgroundColor: disabledBackground,
            borderColor: "transparent",
            opacity: 0.7,
          },
        },
        filled: {
          default: {
            backgroundColor: primary,
            borderColor: "transparent",
            opacity: 1,
          },
          error: {
            backgroundColor: errorColor,
            borderColor: errorColor,
            opacity: 1,
          },
          disabled: {
            backgroundColor: disabledBackground,
            borderColor: "transparent",
            opacity: 0.7,
          },
          disabledError: {
            backgroundColor: disabledBackground,
            borderColor: "transparent",
            opacity: 0.7,
          },
        },
      },
      secondary: {
        outlined: {
          default: {
            backgroundColor: "transparent",
            borderColor: secondaryContrast,
            opacity: 1,
          },
          error: {
            backgroundColor: "transparent",
            borderColor: errorColor,
            opacity: 1,
          },
          disabled: {
            backgroundColor: "transparent",
            borderColor: defaultBorder,
            opacity: 0.7,
          },
          disabledError: {
            backgroundColor: "transparent",
            borderColor: defaultBorder,
            opacity: 0.7,
          },
        },
        soft: {
          default: {
            backgroundColor: subtle,
            borderColor: "transparent",
            opacity: 1,
          },
          error: {
            backgroundColor: errorContrast,
            borderColor: errorColor,
            opacity: 1,
          },
          disabled: {
            backgroundColor: disabledBackground,
            borderColor: "transparent",
            opacity: 0.7,
          },
          disabledError: {
            backgroundColor: disabledBackground,
            borderColor: "transparent",
            opacity: 0.7,
          },
        },
        filled: {
          default: {
            backgroundColor: secondary,
            borderColor: "transparent",
            opacity: 1,
          },
          error: {
            backgroundColor: errorColor,
            borderColor: errorColor,
            opacity: 1,
          },
          disabled: {
            backgroundColor: disabledBackground,
            borderColor: "transparent",
            opacity: 0.7,
          },
          disabledError: {
            backgroundColor: disabledBackground,
            borderColor: "transparent",
            opacity: 0.7,
          },
        },
      },
    },
  };
}

export function createControlErrorTokens(
  tokens: PrimitiveThemeTokens,
): ControlErrorTokens {
  return {
    marginTop: tokens.space.xxs,
    color: tokens.colors.feedback.error.value,
    fontSize: tokens.fontSize.xs,
  };
}

export function createControlInputTokens(
  tokens: PrimitiveThemeTokens,
): ControlInputTokens {
  const primaryContrast = tokens.colors.primary.contrast;
  const secondaryContrast = tokens.colors.secondary.contrast;
  const neutralContrast = tokens.colors.text.inverse;
  const textColor = tokens.colors.text.primary;
  const placeholderColor = tokens.colors.text.tertiary;
  const disabledColor = tokens.colors.text.disabled;
  const errorContrast = tokens.colors.feedback.error.contrast;

  return {
    flex: 1,
    fontFamily: tokens.fontFamily.normal[400],
    paddingHorizontal: tokens.space.xxs,

    sizes: {
      small: {
        fontSize: tokens.fontSize.xs,
      },
      medium: {
        fontSize: tokens.fontSize.xsm,
      },
      large: {
        fontSize: tokens.fontSize.sm,
      },
    },

    colors: {
      neutral: {
        outlined: {
          default: {
            color: textColor,
            placeholderColor,
          },
          error: {
            color: textColor,
            placeholderColor,
          },
          disabled: {
            color: disabledColor,
            placeholderColor: disabledColor,
          },
          disabledError: {
            color: disabledColor,
            placeholderColor: disabledColor,
          },
        },
        soft: {
          default: {
            color: textColor,
            placeholderColor,
          },
          error: {
            color: textColor,
            placeholderColor,
          },
          disabled: {
            color: disabledColor,
            placeholderColor: disabledColor,
          },
          disabledError: {
            color: disabledColor,
            placeholderColor: disabledColor,
          },
        },
        filled: {
          default: {
            color: neutralContrast,
            placeholderColor: neutralContrast,
          },
          error: {
            color: errorContrast,
            placeholderColor: errorContrast,
          },
          disabled: {
            color: disabledColor,
            placeholderColor: disabledColor,
          },
          disabledError: {
            color: disabledColor,
            placeholderColor: disabledColor,
          },
        },
      },
      primary: {
        outlined: {
          default: {
            color: textColor,
            placeholderColor,
          },
          error: {
            color: textColor,
            placeholderColor,
          },
          disabled: {
            color: disabledColor,
            placeholderColor: disabledColor,
          },
          disabledError: {
            color: disabledColor,
            placeholderColor: disabledColor,
          },
        },
        soft: {
          default: {
            color: textColor,
            placeholderColor,
          },
          error: {
            color: textColor,
            placeholderColor,
          },
          disabled: {
            color: disabledColor,
            placeholderColor: disabledColor,
          },
          disabledError: {
            color: disabledColor,
            placeholderColor: disabledColor,
          },
        },
        filled: {
          default: {
            color: primaryContrast,
            placeholderColor: primaryContrast,
          },
          error: {
            color: errorContrast,
            placeholderColor: errorContrast,
          },
          disabled: {
            color: disabledColor,
            placeholderColor: disabledColor,
          },
          disabledError: {
            color: disabledColor,
            placeholderColor: disabledColor,
          },
        },
      },
      secondary: {
        outlined: {
          default: {
            color: textColor,
            placeholderColor,
          },
          error: {
            color: textColor,
            placeholderColor,
          },
          disabled: {
            color: disabledColor,
            placeholderColor: disabledColor,
          },
          disabledError: {
            color: disabledColor,
            placeholderColor: disabledColor,
          },
        },
        soft: {
          default: {
            color: textColor,
            placeholderColor,
          },
          error: {
            color: textColor,
            placeholderColor,
          },
          disabled: {
            color: disabledColor,
            placeholderColor: disabledColor,
          },
          disabledError: {
            color: disabledColor,
            placeholderColor: disabledColor,
          },
        },
        filled: {
          default: {
            color: secondaryContrast,
            placeholderColor: secondaryContrast,
          },
          error: {
            color: errorContrast,
            placeholderColor: errorContrast,
          },
          disabled: {
            color: disabledColor,
            placeholderColor: disabledColor,
          },
          disabledError: {
            color: disabledColor,
            placeholderColor: disabledColor,
          },
        },
      },
    },
  };
}

export function createControlLabelTokens(
  tokens: PrimitiveThemeTokens,
): ControlLabelTokens {
  return {
    marginBottom: tokens.space.xxs,
    fontSize: tokens.fontSize.xsm,
    states: {
      default: { color: tokens.colors.text.secondary },
      error: { color: tokens.colors.feedback.error.value },
      disabled: { color: tokens.colors.text.disabled },
      disabledError: { color: tokens.colors.text.disabled },
    },
  };
}
