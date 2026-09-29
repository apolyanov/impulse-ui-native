import type { ActionState, ActionVisualState } from "../types";

export function getActionStateTokens<Tokens>(
  tokens: Record<ActionVisualState, Tokens>,
  state: ActionState,
): Tokens {
  const { disabled = false, loading = false } = state;

  if (disabled) return tokens.disabled;
  return loading ? tokens.loading : tokens.default;
}
