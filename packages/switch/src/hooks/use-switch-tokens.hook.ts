import { useMemo } from "react";

import type {
  ComponentSize,
  ComponentTone,
  SelectionVariant,
} from "@impulse-ui-native/theme";
import {
  getAvailabilityStateTokens,
  useComponentsTokens,
} from "@impulse-ui-native/theme";

export interface SwitchAnimationColors {
  activeBackgroundColor: string;
  activeBorderColor: string;
  activeThumbColor: string;
  inactiveBackgroundColor: string;
  inactiveBorderColor: string;
  inactiveThumbColor: string;
}

interface UseSwitchTokensOptions {
  disabled: boolean;
  size: ComponentSize;
  variant: SelectionVariant;
  tone: ComponentTone;
}

export function useSwitchTokens({
  disabled,
  size,
  variant,
  tone,
}: UseSwitchTokensOptions) {
  const tokens = useComponentsTokens().switch;
  const sizeTokens = tokens.sizes[size];
  const colors: SwitchAnimationColors = getAvailabilityStateTokens(
    tokens.colors[tone][variant],
    { disabled },
  );

  return useMemo(
    () => ({
      animationDuration: tokens.animationDuration,
      borderWidth: tokens.borderWidth,
      colors,
      loadingIndicatorColor: tokens.loadingIndicatorColor,
      sizeTokens,
    }),
    [colors, sizeTokens, tokens],
  );
}
