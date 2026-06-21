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

    iconColor: tokens.colors.text.secondary,
    errorIconColor: tokens.colors.feedback.error.value,
    disabledIconColor: tokens.colors.text.disabled,
  };
}

export function createControlContainerTokens(
  tokens: PrimitiveThemeTokens,
): ControlContainerTokens {
  const ErrorColor = tokens.colors.feedback.error.value;
  const TransparentColor = "transparent";

  return {
    borderWidth: tokens.borderSize.sm,
    borderRadius: tokens.radii.sm,
    disabledOpacity: 0.7,

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
        backgroundColor: tokens.colors.surface.secondary.value,
        borderColor: TransparentColor,

        errorBorderColor: ErrorColor,

        disabledBackgroundColor: tokens.colors.neutral["2"],
        disabledBorderColor: TransparentColor,
      },

      outlined: {
        backgroundColor: TransparentColor,
        borderColor: tokens.colors.neutral["5"],

        errorBorderColor: ErrorColor,

        disabledBackgroundColor: TransparentColor,
        disabledBorderColor: tokens.colors.neutral["5"],
      },

      soft: {
        backgroundColor: tokens.colors.accent.value,
        borderColor: TransparentColor,

        errorBorderColor: ErrorColor,

        disabledBackgroundColor: tokens.colors.neutral["2"],
        disabledBorderColor: TransparentColor,
      },

      ghost: {
        backgroundColor: TransparentColor,
        borderColor: TransparentColor,

        errorBorderColor: ErrorColor,

        disabledBackgroundColor: TransparentColor,
        disabledBorderColor: TransparentColor,
      },

      plain: {
        backgroundColor: TransparentColor,
        borderColor: TransparentColor,

        errorBorderColor: ErrorColor,

        disabledBackgroundColor: TransparentColor,
        disabledBorderColor: TransparentColor,
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
        color: tokens.colors.text.primary,
        placeholderColor: tokens.colors.text.disabled,

        disabledColor: tokens.colors.text.disabled,
        disabledPlaceholderColor: tokens.colors.text.disabled,

        errorColor: tokens.colors.text.primary,
        errorPlaceholderColor: tokens.colors.feedback.error.value,
      },

      outlined: {
        color: tokens.colors.text.primary,
        placeholderColor: tokens.colors.text.disabled,

        disabledColor: tokens.colors.text.disabled,
        disabledPlaceholderColor: tokens.colors.text.disabled,

        errorColor: tokens.colors.text.primary,
        errorPlaceholderColor: tokens.colors.feedback.error.value,
      },

      soft: {
        color: tokens.colors.accent.contrast,
        placeholderColor: tokens.colors.accent.contrast,

        disabledColor: tokens.colors.text.disabled,
        disabledPlaceholderColor: tokens.colors.text.disabled,

        errorColor: tokens.colors.accent.contrast,
        errorPlaceholderColor: tokens.colors.feedback.error.value,
      },

      ghost: {
        color: tokens.colors.text.primary,
        placeholderColor: tokens.colors.text.disabled,

        disabledColor: tokens.colors.text.disabled,
        disabledPlaceholderColor: tokens.colors.text.disabled,

        errorColor: tokens.colors.text.primary,
        errorPlaceholderColor: tokens.colors.feedback.error.value,
      },

      plain: {
        color: tokens.colors.text.primary,
        placeholderColor: tokens.colors.text.disabled,

        disabledColor: tokens.colors.text.disabled,
        disabledPlaceholderColor: tokens.colors.text.disabled,

        errorColor: tokens.colors.text.primary,
        errorPlaceholderColor: tokens.colors.feedback.error.value,
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

    color: tokens.colors.text.secondary,
    disabledColor: tokens.colors.text.disabled,
    errorColor: tokens.colors.feedback.error.value,
  };
}
