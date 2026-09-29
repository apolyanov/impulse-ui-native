import type { FieldState, FieldVisualState } from "../types";

export function getFieldStateTokens<Tokens>(
  tokens: Record<FieldVisualState, Tokens>,
  state: FieldState,
): Tokens {
  const { disabled = false, error = false } = state;

  if (disabled) return error ? tokens.disabledError : tokens.disabled;
  return error ? tokens.error : tokens.default;
}
