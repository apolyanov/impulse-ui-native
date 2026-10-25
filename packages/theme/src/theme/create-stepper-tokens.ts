import { PrimitiveThemeTokens, StepperTokens } from "../types";

export function createStepperTokens(
  tokens: PrimitiveThemeTokens,
): StepperTokens {
  return {
    navigation: {
      itemHeight: 6,
      inactiveItemBackgroundColor: tokens.colors.border.strong.value,
      colors: {
        neutral: { itemBackgroundColor: tokens.colors.text.secondary },
        primary: { itemBackgroundColor: tokens.colors.primary.value },
        secondary: { itemBackgroundColor: tokens.colors.secondary.contrast },
      },
    },
  };
}
