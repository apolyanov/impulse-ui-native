import { useMemo } from "react";

import type { ComponentSize, ComponentVariant } from "@impulse-ui-native/theme";
import { useComponentsTokens } from "@impulse-ui-native/theme";

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
  variant: ComponentVariant;
}

export function useSwitchTokens({
  disabled,
  size,
  variant,
}: UseSwitchTokensOptions) {
  const tokens = useComponentsTokens().switch;
  const sizeTokens = tokens.sizes[size];
  const variantTokens = tokens.variants[variant];

  const colors = useMemo<SwitchAnimationColors>(
    () => ({
      activeBackgroundColor: disabled
        ? tokens.disabledBackgroundColor
        : variantTokens.backgroundColor,
      activeBorderColor: disabled
        ? tokens.disabledBorderColor
        : variantTokens.borderColor,
      activeThumbColor: disabled
        ? tokens.disabledThumbColor
        : variantTokens.color,
      inactiveBackgroundColor: disabled
        ? tokens.disabledBackgroundColor
        : tokens.uncheckedBackgroundColor,
      inactiveBorderColor: disabled
        ? tokens.disabledBorderColor
        : tokens.uncheckedBorderColor,
      inactiveThumbColor: disabled
        ? tokens.disabledThumbColor
        : tokens.uncheckedThumbColor,
    }),
    [disabled, tokens, variantTokens],
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
