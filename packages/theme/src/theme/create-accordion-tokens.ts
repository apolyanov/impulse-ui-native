import type { AccordionTokens, PrimitiveThemeTokens } from "../types";

export function createAccordionTokens(
  tokens: PrimitiveThemeTokens,
): AccordionTokens {
  return {
    animationDuration: 220,
    backgroundColor: tokens.colors.surface.elevated.value,
    borderColor: tokens.colors.border.subtle.value,
    borderRadius: tokens.radii.lg,
    borderWidth: tokens.borderSize.sm,
    content: {
      paddingBottom: tokens.space.sm,
      paddingHorizontal: tokens.space.sm,
    },
    disabledColor: tokens.colors.text.disabled,
    disabledOpacity: 0.5,
    dividerColor: tokens.colors.border.subtle.value,
    dividerWidth: tokens.borderSize.sm,
    focusBackgroundColor: tokens.colors.surface.secondary.value,
    iconColor: tokens.colors.text.secondary,
    iconSize: 18,
    pressedOpacity: 0.72,
    titleColor: tokens.colors.text.primary,
    trigger: {
      gap: tokens.space.xs,
      minHeight: 48,
      paddingHorizontal: tokens.space.sm,
      paddingVertical: tokens.space.xs,
    },
  };
}
