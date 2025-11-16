import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const HeartStraightBreakFill = memo(function HeartStraightBreakFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M113.29,55.31A58,58,0,0,0,32.93,139l89.37,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0-82-82.1h0l-24.4,23L143,106.32a8,8,0,0,1,0,11.32l-20.69,20.69A8,8,0,1,1,111,127l15-15L99.5,85.42a8,8,0,0,1,.22-11.53l13.55-12.78a4,4,0,0,0,0-5.8Z" />
    </Svg>
  );
});
