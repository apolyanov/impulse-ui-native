import type { LayoutChangeEvent } from "react-native";
import { memo, useCallback, useMemo, useState } from "react";
import { I18nManager, View } from "react-native";

import type { LinearProgressProps } from "../types/progress-internal.types";
import { ProgressTrackStyles as styles } from "../constants/progress.constants";
import { LinearIndeterminateIndicator } from "./linear-indeterminate-indicator";

export const LinearProgress = memo(function LinearProgress({
  animationDuration,
  borderRadius,
  fraction,
  indicatorColor,
  indeterminate,
  indeterminateWidth,
  onLayout,
  style,
  trackColor,
  trackHeight,
  ...props
}: LinearProgressProps) {
  const [trackWidth, setTrackWidth] = useState(0);

  const handleLayout = useCallback(
    (event: LayoutChangeEvent) => {
      setTrackWidth(event.nativeEvent.layout.width);
      onLayout?.(event);
    },
    [onLayout],
  );

  const trackStyle = useMemo(
    () => [
      styles.track,
      {
        backgroundColor: trackColor,
        borderRadius,
        height: trackHeight,
      },
      style,
    ],
    [borderRadius, style, trackColor, trackHeight],
  );

  const determinateIndicatorStyle = useMemo(
    () => ({
      alignSelf: I18nManager.isRTL
        ? ("flex-end" as const)
        : ("flex-start" as const),
      backgroundColor: indicatorColor,
      borderRadius,
      height: trackHeight,
      width: `${fraction * 100}%` as const,
    }),
    [borderRadius, fraction, indicatorColor, trackHeight],
  );

  return (
    <View {...props} onLayout={handleLayout} style={trackStyle}>
      {indeterminate ? (
        <LinearIndeterminateIndicator
          animationDuration={animationDuration}
          borderRadius={borderRadius}
          color={indicatorColor}
          ratio={indeterminateWidth}
          trackHeight={trackHeight}
          trackWidth={trackWidth}
        />
      ) : null}
      {!indeterminate ? <View style={determinateIndicatorStyle} /> : null}
    </View>
  );
});
