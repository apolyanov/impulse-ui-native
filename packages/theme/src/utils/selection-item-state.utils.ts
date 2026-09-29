import type {
  SelectionItemState,
  SelectionItemVisualState,
  VisualStateTokens,
} from "../types";

export function getSelectionItemStateTokens<Tokens>(
  tokens: VisualStateTokens<SelectionItemVisualState, Tokens>,
  state: SelectionItemState,
): Tokens {
  const { selected } = state;

  return selected ? tokens.selected : tokens.default;
}
