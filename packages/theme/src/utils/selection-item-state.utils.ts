import type { SelectionItemState, SelectionItemVisualState } from "../types";

export function getSelectionItemStateTokens<Tokens>(
  tokens: Record<SelectionItemVisualState, Tokens>,
  state: SelectionItemState,
): Tokens {
  const { selected } = state;

  return selected ? tokens.selected : tokens.default;
}
