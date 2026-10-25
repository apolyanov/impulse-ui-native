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
    ...getSelectionStateTokens(tokens.colors[state.tone ?? "primary"], state),
    indicatorHeight: tokens.indicatorHeight,
  };
}
