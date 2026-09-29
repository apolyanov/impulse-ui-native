import type {
  SelectionState,
  SelectionVisualState,
  VisualStateTokens,
} from "../types";

export function getSelectionStateTokens<Tokens>(
  tokens: VisualStateTokens<SelectionVisualState, Tokens>,
  state: SelectionState,
): Tokens {
  const { disabled = false, selected } = state;

  if (disabled) {
    return selected ? tokens.disabledSelected : tokens.disabledUnselected;
  }

  return selected ? tokens.selected : tokens.unselected;
}
