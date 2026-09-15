import { PrimitiveThemeTokens, StepperTokens } from "../types";

export function createStepperTokens(
  tokens: PrimitiveThemeTokens,
): StepperTokens {
  return {
    navigation: {
      itemHeight: 6,
      itemBackgroundColor: tokens.colors.primary.value,
    },
  };
}
