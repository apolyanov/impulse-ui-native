import type {
  FlyoutTokens,
  FlyoutTokenState,
  ResolvedFlyoutTokens,
} from "../types";

export function getFlyoutTokens(
  tokens: FlyoutTokens,
  state: FlyoutTokenState,
): ResolvedFlyoutTokens {
  const { placements, ...sharedTokens } = tokens;

  return {
    ...sharedTokens,
    ...placements[state.placement],
  };
}
