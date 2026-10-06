import { memo, useMemo } from "react";
import Svg, { Circle, G } from "react-native-svg";

import type { ProgressCircleProps } from "../types/progress-internal.types";

export const ProgressCircle = memo(function ProgressCircle({
  color,
  fraction,
  strokeWidth,
  trackColor,
  width,
}: ProgressCircleProps) {
  const center = width / 2;
  const radius = (width - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const strokeDasharray = useMemo(
    () => [circumference, circumference],
    [circumference],
  );

  return (
    <Svg height={width} width={width}>
      <Circle
        cx={center}
        cy={center}
        fill="none"
        r={radius}
        stroke={trackColor}
        strokeWidth={strokeWidth}
      />
      <G origin={`${center}, ${center}`} rotation={-90}>
        <Circle
          cx={center}
          cy={center}
          fill="none"
          r={radius}
          stroke={color}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={circumference * (1 - fraction)}
          strokeLinecap={fraction === 0 ? "butt" : "round"}
          strokeWidth={strokeWidth}
        />
      </G>
    </Svg>
  );
});
