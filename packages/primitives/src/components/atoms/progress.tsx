import type { AccessibilityState, AccessibilityValue } from "react-native";
import { memo, useMemo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { ProgressProps } from "../../types";
import { normalizeProgressValue } from "../../utils/progress.utils";
import { CircularProgress } from "./circular-progress";
import { LinearProgress } from "./linear-progress";

export const Progress = memo(function Progress({
  accessibilityRole = "progressbar",
  accessibilityState,
  accessibilityValue,
  accessible = true,
  color,
  max = 100,
  min = 0,
  size = "medium",
  tone = "primary",
  trackColor,
  value,
  variant = "linear",
  ...props
}: ProgressProps) {
  const tokens = useComponentsTokens().progress;
  const sizeTokens = tokens.sizes[size];
  const colorTokens = tokens.colors[tone];
  const normalized = useMemo(
    () => normalizeProgressValue(value, min, max),
    [max, min, value],
  );
  const indeterminate = normalized.value === undefined;

  const resolvedAccessibilityState = useMemo<AccessibilityState>(
    () => ({
      ...accessibilityState,
      busy: indeterminate ? true : accessibilityState?.busy,
    }),
    [accessibilityState, indeterminate],
  );

  const resolvedAccessibilityValue = useMemo<AccessibilityValue>(
    () => ({
      ...accessibilityValue,
      max: indeterminate ? undefined : normalized.max,
      min: indeterminate ? undefined : normalized.min,
      now: indeterminate ? undefined : normalized.value,
    }),
    [accessibilityValue, indeterminate, normalized],
  );

  const commonProps = useMemo(
    () => ({
      ...props,
      accessibilityRole,
      accessibilityState: resolvedAccessibilityState,
      accessibilityValue: resolvedAccessibilityValue,
      accessible,
      animationDuration: tokens.animationDuration,
      fraction: normalized.fraction,
      indicatorColor: color ?? colorTokens.indicatorColor,
      indeterminate,
      trackColor: trackColor ?? colorTokens.trackColor,
    }),
    [
      accessibilityRole,
      accessible,
      color,
      colorTokens.indicatorColor,
      colorTokens.trackColor,
      indeterminate,
      normalized.fraction,
      props,
      resolvedAccessibilityState,
      resolvedAccessibilityValue,
      tokens.animationDuration,
      trackColor,
    ],
  );

  return variant === "circular" ? (
    <CircularProgress
      {...commonProps}
      strokeWidth={sizeTokens.circularStrokeWidth}
      width={sizeTokens.circularSize}
    />
  ) : (
    <LinearProgress
      {...commonProps}
      borderRadius={tokens.borderRadius}
      indeterminateWidth={tokens.indeterminateLinearWidth}
      trackHeight={sizeTokens.linearHeight}
    />
  );
});
