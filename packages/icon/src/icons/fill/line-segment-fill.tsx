import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const LineSegmentFill = memo(function LineSegmentFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M211.81,83.79a28,28,0,0,1-33.12,4.83L88.62,178.69a28,28,0,1,1-44.43-6.48h0a28,28,0,0,1,33.12-4.83l90.07-90.07a28,28,0,1,1,44.43,6.48Z" />
    </Svg>
  );
});
