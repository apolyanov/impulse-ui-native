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
  return {
    marginHorizontal: tokens.space.xxs,
    hitSlop: tokens.space.sm,
    variants: {
      filled: {
        default: { iconColor: tokens.colors.text.primary },
        error: { iconColor: tokens.colors.text.primary },
        disabled: { iconColor: tokens.colors.text.disabled },
        disabledError: { iconColor: tokens.colors.text.disabled },
      },
      outlined: {
        default: { iconColor: tokens.colors.text.primary },
        error: { iconColor: tokens.colors.text.primary },
        disabled: { iconColor: tokens.colors.text.disabled },
        disabledError: { iconColor: tokens.colors.text.disabled },
      },
    },
  };
}

export function createControlContainerTokens(
  tokens: PrimitiveThemeTokens,
): ControlContainerTokens {
  return {
    borderWidth: tokens.borderSize.sm,
    borderRadius: tokens.radii.sm,

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

    variants: {
      filled: {
        default: {
          backgroundColor: tokens.colors.surface.secondary.value,
          borderColor: "transparent",
          opacity: 1,
        },
        error: {
          backgroundColor: tokens.colors.surface.secondary.value,
          borderColor: tokens.colors.feedback.error.value,
          opacity: 1,
        },
        disabled: {
          backgroundColor: tokens.colors.neutral["2"],
          borderColor: "transparent",
          opacity: 0.7,
        },
        disabledError: {
          backgroundColor: tokens.colors.neutral["2"],
          borderColor: tokens.colors.feedback.error.value,
          opacity: 0.7,
        },
      },

      outlined: {
        default: {
          backgroundColor: "transparent",
          borderColor: tokens.colors.neutral["5"],
          opacity: 1,
        },
        error: {
          backgroundColor: "transparent",
          borderColor: tokens.colors.feedback.error.value,
          opacity: 1,
        },
        disabled: {
          backgroundColor: "transparent",
          borderColor: tokens.colors.neutral["5"],
          opacity: 0.7,
        },
        disabledError: {
          backgroundColor: "transparent",
          borderColor: tokens.colors.feedback.error.value,
          opacity: 0.7,
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

    variants: {
      filled: {
        default: {
          color: tokens.colors.text.primary,
          placeholderColor: tokens.colors.text.disabled,
        },
        error: {
          color: tokens.colors.text.primary,
          placeholderColor: tokens.colors.feedback.error.value,
        },
        disabled: {
          color: tokens.colors.text.disabled,
          placeholderColor: tokens.colors.text.disabled,
        },
        disabledError: {
          color: tokens.colors.text.disabled,
          placeholderColor: tokens.colors.text.disabled,
        },
      },

      outlined: {
        default: {
          color: tokens.colors.text.primary,
          placeholderColor: tokens.colors.text.disabled,
        },
        error: {
          color: tokens.colors.text.primary,
          placeholderColor: tokens.colors.feedback.error.value,
        },
        disabled: {
          color: tokens.colors.text.disabled,
          placeholderColor: tokens.colors.text.disabled,
        },
        disabledError: {
          color: tokens.colors.text.disabled,
          placeholderColor: tokens.colors.text.disabled,
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
