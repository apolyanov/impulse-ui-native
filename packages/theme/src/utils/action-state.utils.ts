import type {
  ActionState,
  ActionVisualState,
  VisualStateTokens,
} from "../types";

export function getActionStateTokens<Tokens>(
  tokens: VisualStateTokens<ActionVisualState, Tokens>,
  state: ActionState,
): Tokens {
  const { disabled = false, loading = false } = state;

  if (disabled) {
    return tokens.disabled;
  }

  return loading ? tokens.loading : tokens.default;
}
