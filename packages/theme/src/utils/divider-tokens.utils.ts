import type {
  DividerTokens,
  DividerTokenState,
  ResolvedDividerTokens,
} from "../types";

export function getDividerTokens(
  tokens: DividerTokens,
  state: DividerTokenState,
): ResolvedDividerTokens {
  return {
    ...tokens.layouts[state.orientation][state.inset],
    backgroundColor: tokens.colors[state.tone],
  };
}
