import type {
  ResolvedSegmentedControlItemTokens,
  SegmentedControlItemTokenState,
  SegmentedControlTokens,
} from "../types";
import { getSelectionStateTokens } from "./selection-state.utils";

export function getSegmentedControlItemTokens(
  tokens: SegmentedControlTokens,
  state: SegmentedControlItemTokenState,
): ResolvedSegmentedControlItemTokens {
  const { disabled, layout, selected, size, variant } = state;
  const { layouts, ...sizeTokens } = tokens.sizes[size];
  const appearanceTokens = getSelectionStateTokens(
    tokens.variants[variant].states,
    { disabled, selected },
  );

  return {
    ...sizeTokens,
    ...layouts[layout],
    ...appearanceTokens,
    borderRadius: tokens.itemBorderRadius,
    borderWidth: tokens.itemBorderWidth,
  };
}
