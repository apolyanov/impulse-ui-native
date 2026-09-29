import type { DisplayState, DisplayVisualState } from "../types";

export function getDisplayStateTokens<Tokens>(
  tokens: Record<DisplayVisualState, Tokens>,
  state: DisplayState,
): Tokens {
  const { disabled = false } = state;

  return disabled ? tokens.disabled : tokens.default;
}
