import { PrimitiveThemeTokens, TagTokens } from "../types";

export function createTagTokens(tokens: PrimitiveThemeTokens): TagTokens {
  return {
    borderWidth: tokens.borderSize.sm,
    borderRadius: tokens.radii.round,
    gap: tokens.space.xxs,
    closeHitSlop: 10,
    iconMarginLeft: tokens.borderSize.md,

    sizes: {
      small: {
        height: 24,
        paddingHorizontal: tokens.space.xs,
        minWidth: tokens.space.xl,
        fontSize: tokens.fontSize.xs,
      },

      medium: {
        height: 28,
        paddingHorizontal: tokens.space.xs,
        minWidth: tokens.space.xxl,
        fontSize: tokens.fontSize.xsm,
      },

      large: {
        height: 32,
        paddingHorizontal: tokens.space.mxs,
        minWidth: tokens.space.xxl,
        fontSize: tokens.fontSize.xsm,
      },
    },

    colors: {
      primary: {
        filled: {
          default: {
            backgroundColor: tokens.colors.primary.value,
            borderColor: tokens.colors.primary.value,
            color: tokens.colors.primary.contrast,
          },
          disabled: {
            backgroundColor: tokens.colors.neutral["4"],
            borderColor: tokens.colors.neutral["6"],
            color: tokens.colors.text.disabled,
          },
        },
        outlined: {
          default: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.primary.value,
            color: tokens.colors.primary.value,
          },
          disabled: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.neutral["6"],
            color: tokens.colors.text.disabled,
          },
        },
        soft: {
          default: {
            backgroundColor: tokens.colors.primary.contrast,
            borderColor: tokens.colors.primary.contrast,
            color: tokens.colors.primary.value,
          },
          disabled: {
            backgroundColor: tokens.colors.neutral["3"],
            borderColor: tokens.colors.neutral["3"],
            color: tokens.colors.text.disabled,
          },
        },
      },
      secondary: {
        filled: {
          default: {
            backgroundColor: tokens.colors.secondary.value,
            borderColor: tokens.colors.secondary.value,
            color: tokens.colors.secondary.contrast,
          },
          disabled: {
            backgroundColor: tokens.colors.neutral["4"],
            borderColor: tokens.colors.neutral["6"],
            color: tokens.colors.text.disabled,
          },
        },
        outlined: {
          default: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.secondary.value,
            color: tokens.colors.secondary.value,
          },
          disabled: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.neutral["6"],
            color: tokens.colors.text.disabled,
          },
        },
        soft: {
          default: {
            backgroundColor: tokens.colors.secondary.contrast,
            borderColor: tokens.colors.secondary.contrast,
            color: tokens.colors.secondary.value,
          },
          disabled: {
            backgroundColor: tokens.colors.neutral["3"],
            borderColor: tokens.colors.neutral["3"],
            color: tokens.colors.text.disabled,
          },
        },
      },
      error: {
        filled: {
          default: {
            backgroundColor: tokens.colors.feedback.error.value,
            borderColor: tokens.colors.feedback.error.value,
            color: tokens.colors.feedback.error.contrast,
          },
          disabled: {
            backgroundColor: tokens.colors.neutral["4"],
            borderColor: tokens.colors.neutral["6"],
            color: tokens.colors.text.disabled,
          },
        },
        outlined: {
          default: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.feedback.error.value,
            color: tokens.colors.feedback.error.value,
          },
          disabled: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.neutral["6"],
            color: tokens.colors.text.disabled,
          },
        },
        soft: {
          default: {
            backgroundColor: tokens.colors.feedback.error.contrast,
            borderColor: tokens.colors.feedback.error.contrast,
            color: tokens.colors.feedback.error.value,
          },
          disabled: {
            backgroundColor: tokens.colors.neutral["3"],
            borderColor: tokens.colors.neutral["3"],
            color: tokens.colors.text.disabled,
          },
        },
      },
      warning: {
        filled: {
          default: {
            backgroundColor: tokens.colors.feedback.warning.value,
            borderColor: tokens.colors.feedback.warning.value,
            color: tokens.colors.feedback.warning.contrast,
          },
          disabled: {
            backgroundColor: tokens.colors.neutral["4"],
            borderColor: tokens.colors.neutral["6"],
            color: tokens.colors.text.disabled,
          },
        },
        outlined: {
          default: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.feedback.warning.value,
            color: tokens.colors.feedback.warning.value,
          },
          disabled: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.neutral["6"],
            color: tokens.colors.text.disabled,
          },
        },
        soft: {
          default: {
            backgroundColor: tokens.colors.feedback.warning.contrast,
            borderColor: tokens.colors.feedback.warning.contrast,
            color: tokens.colors.feedback.warning.value,
          },
          disabled: {
            backgroundColor: tokens.colors.neutral["3"],
            borderColor: tokens.colors.neutral["3"],
            color: tokens.colors.text.disabled,
          },
        },
      },
      success: {
        filled: {
          default: {
            backgroundColor: tokens.colors.feedback.success.value,
            borderColor: tokens.colors.feedback.success.value,
            color: tokens.colors.feedback.success.contrast,
          },
          disabled: {
            backgroundColor: tokens.colors.neutral["4"],
            borderColor: tokens.colors.neutral["6"],
            color: tokens.colors.text.disabled,
          },
        },
        outlined: {
          default: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.feedback.success.value,
            color: tokens.colors.feedback.success.value,
          },
          disabled: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.neutral["6"],
            color: tokens.colors.text.disabled,
          },
        },
        soft: {
          default: {
            backgroundColor: tokens.colors.feedback.success.contrast,
            borderColor: tokens.colors.feedback.success.contrast,
            color: tokens.colors.feedback.success.value,
          },
          disabled: {
            backgroundColor: tokens.colors.neutral["3"],
            borderColor: tokens.colors.neutral["3"],
            color: tokens.colors.text.disabled,
          },
        },
      },
      info: {
        filled: {
          default: {
            backgroundColor: tokens.colors.feedback.info.value,
            borderColor: tokens.colors.feedback.info.value,
            color: tokens.colors.feedback.info.contrast,
          },
          disabled: {
            backgroundColor: tokens.colors.neutral["4"],
            borderColor: tokens.colors.neutral["6"],
            color: tokens.colors.text.disabled,
          },
        },
        outlined: {
          default: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.feedback.info.value,
            color: tokens.colors.feedback.info.value,
          },
          disabled: {
            backgroundColor: "transparent",
            borderColor: tokens.colors.neutral["6"],
            color: tokens.colors.text.disabled,
          },
        },
        soft: {
          default: {
            backgroundColor: tokens.colors.feedback.info.contrast,
            borderColor: tokens.colors.feedback.info.contrast,
            color: tokens.colors.feedback.info.value,
          },
          disabled: {
            backgroundColor: tokens.colors.neutral["3"],
            borderColor: tokens.colors.neutral["3"],
            color: tokens.colors.text.disabled,
          },
        },
      },
    },
  };
}
