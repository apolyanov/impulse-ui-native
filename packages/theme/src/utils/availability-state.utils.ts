import type {
  AvailabilityState,
  AvailabilityVisualState,
  VisualStateTokens,
} from "../types";

export function getAvailabilityStateTokens<Tokens>(
  tokens: VisualStateTokens<AvailabilityVisualState, Tokens>,
  state: AvailabilityState,
): Tokens {
  const { disabled = false } = state;

  return disabled ? tokens.disabled : tokens.default;
}
