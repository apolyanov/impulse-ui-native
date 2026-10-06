import { memo, useMemo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { ProgressProps } from "../types";
import { normalizeProgressValue } from "../utils/progress.utils";
import { CircularProgress } from "./circular-progress";
import { LinearProgress } from "./linear-progress";

export const Progress = memo(function Progress({
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

  const commonProps = useMemo(
    () => ({
      ...props,
      animationDuration: tokens.animationDuration,
      fraction: normalized.fraction,
      indicatorColor: color ?? colorTokens.indicatorColor,
      indeterminate,
      trackColor: trackColor ?? colorTokens.trackColor,
    }),
    [
      color,
      colorTokens.indicatorColor,
      colorTokens.trackColor,
      indeterminate,
      normalized.fraction,
      props,
      tokens.animationDuration,
      trackColor,
    ],
  );

  return (
    <>
      {variant === "circular" ? (
        <CircularProgress
          {...commonProps}
          strokeWidth={sizeTokens.circularStrokeWidth}
          width={sizeTokens.circularSize}
        />
      ) : null}
      {variant === "linear" ? (
        <LinearProgress
          {...commonProps}
          borderRadius={tokens.borderRadius}
          indeterminateWidth={tokens.indeterminateLinearWidth}
          trackHeight={sizeTokens.linearHeight}
        />
      ) : null}
    </>
  );
});
