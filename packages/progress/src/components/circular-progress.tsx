import { memo, useMemo } from "react";
import { View } from "react-native";

import type { CircularProgressProps } from "../types/progress-internal.types";
import { ProgressRootStyles as styles } from "../constants/progress.constants";
import { CircularIndeterminateIndicator } from "./circular-indeterminate-indicator";
import { ProgressCircle } from "./progress-circle";

export const CircularProgress = memo(function CircularProgress({
  animationDuration,
  fraction,
  indicatorColor,
  indeterminate,
  strokeWidth,
  style,
  trackColor,
  width,
  ...props
}: CircularProgressProps) {
  const rootStyle = useMemo(
    () => [styles.root, { height: width, width }, style],
    [style, width],
  );

  return (
    <View {...props} style={rootStyle}>
      {indeterminate ? (
        <CircularIndeterminateIndicator
          animationDuration={animationDuration}
          color={indicatorColor}
          strokeWidth={strokeWidth}
          trackColor={trackColor}
          width={width}
        />
      ) : null}
      {!indeterminate ? (
        <ProgressCircle
          color={indicatorColor}
          fraction={fraction}
          strokeWidth={strokeWidth}
          trackColor={trackColor}
          width={width}
        />
      ) : null}
    </View>
  );
});
