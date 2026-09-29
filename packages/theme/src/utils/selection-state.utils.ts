import type { SelectionState, SelectionVisualState } from "../types";

export function getSelectionStateTokens<Tokens>(
  tokens: Record<SelectionVisualState, Tokens>,
  state: SelectionState,
): Tokens {
  const { disabled = false, selected } = state;

  if (disabled) {
    return selected ? tokens.disabledSelected : tokens.disabledUnselected;
  }

  return selected ? tokens.selected : tokens.unselected;
}
