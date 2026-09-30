import type {
  ResolvedSliderTrackTokens,
  SliderTokens,
  SliderTrackTokenState,
} from "../types";
import { getControlStateTokens } from "./control-state.utils";

export function getSliderTrackTokens(
  tokens: SliderTokens,
  state: SliderTrackTokenState,
): ResolvedSliderTrackTokens {
  return {
    ...tokens.sizes[state.size],
    ...tokens.layouts[state.layout],
    ...getControlStateTokens(tokens.variants[state.variant], {
      disabled: state.disabled,
    }),
    trackBorderRadius: tokens.trackBorderRadius,
  };
}
