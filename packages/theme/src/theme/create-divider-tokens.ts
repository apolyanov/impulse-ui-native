import type { DividerTokens, PrimitiveThemeTokens } from "../types";

export function createDividerTokens(
  tokens: PrimitiveThemeTokens,
): DividerTokens {
  const inset = tokens.space.sm;
  const thickness = tokens.borderSize.sm;

  return {
    colors: {
      subtle: tokens.colors.border.subtle.value,
      default: tokens.colors.border.default.value,
      strong: tokens.colors.border.strong.value,
      primary: tokens.colors.primary.value,
      inverse: tokens.colors.text.inverse,
    },
    layouts: {
      horizontal: {
        none: {
          height: thickness,
          marginBottom: 0,
          marginEnd: 0,
          marginStart: 0,
          marginTop: 0,
        },
        start: {
          height: thickness,
          marginBottom: 0,
          marginEnd: 0,
          marginStart: inset,
          marginTop: 0,
        },
        end: {
          height: thickness,
          marginBottom: 0,
          marginEnd: inset,
          marginStart: 0,
          marginTop: 0,
        },
        both: {
          height: thickness,
          marginBottom: 0,
          marginEnd: inset,
          marginStart: inset,
          marginTop: 0,
        },
      },
      vertical: {
        none: {
          marginBottom: 0,
          marginEnd: 0,
          marginStart: 0,
          marginTop: 0,
          width: thickness,
        },
        start: {
          marginBottom: 0,
          marginEnd: 0,
          marginStart: 0,
          marginTop: inset,
          width: thickness,
        },
        end: {
          marginBottom: inset,
          marginEnd: 0,
          marginStart: 0,
          marginTop: 0,
          width: thickness,
        },
        both: {
          marginBottom: inset,
          marginEnd: 0,
          marginStart: 0,
          marginTop: inset,
          width: thickness,
        },
      },
    },
  };
}
