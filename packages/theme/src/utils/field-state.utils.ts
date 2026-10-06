import type { FieldState, FieldVisualState, VisualStateTokens } from "../types";

export function getFieldStateTokens<Tokens>(
  tokens: VisualStateTokens<FieldVisualState, Tokens>,
  state: FieldState,
): Tokens {
  const { disabled = false, error = false } = state;

  if (disabled) {
    return error ? tokens.disabledError : tokens.disabled;
  }

  return error ? tokens.error : tokens.default;
}
