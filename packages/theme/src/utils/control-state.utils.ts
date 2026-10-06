import type {
  ControlState,
  ControlVisualState,
  VisualStateTokens,
} from "../types";

export function getControlStateTokens<Tokens>(
  tokens: VisualStateTokens<ControlVisualState, Tokens>,
  state: ControlState,
): Tokens {
  const { disabled = false, focused = false } = state;

  if (disabled) {
    return tokens.disabled;
  }

  return focused ? tokens.focused : tokens.default;
}
