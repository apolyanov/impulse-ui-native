import type { ControlState, ControlVisualState } from "../types";

export function getControlStateTokens<Tokens>(
  tokens: Record<ControlVisualState, Tokens>,
  state: ControlState,
): Tokens {
  const { disabled, focused = false } = state;

  if (disabled) return tokens.disabled;
  return focused ? tokens.focused : tokens.default;
}
