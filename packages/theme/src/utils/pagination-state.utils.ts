import type {
  PaginationState,
  PaginationVisualState,
  VisualStateTokens,
} from "../types";

export function getPaginationStateTokens<Tokens>(
  tokens: VisualStateTokens<PaginationVisualState, Tokens>,
  state: PaginationState,
): Tokens {
  const { current, disabled = false } = state;

  if (disabled) {
    return tokens.disabled;
  }

  return current ? tokens.current : tokens.default;
}
