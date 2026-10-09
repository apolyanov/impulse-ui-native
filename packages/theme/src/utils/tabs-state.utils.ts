import type {
  ResolvedTabsItemTokens,
  TabsItemTokenState,
  TabsTokens,
} from "../types";
import { getSelectionStateTokens } from "./selection-state.utils";

export function getTabsItemTokens(
  tokens: TabsTokens,
  state: TabsItemTokenState,
): ResolvedTabsItemTokens {
  return {
    ...tokens.sizes[state.size],
    ...getSelectionStateTokens(tokens.states, state),
    indicatorHeight: tokens.indicatorHeight,
  };
}
