import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TrafficConeRegularIcon = memo(function TrafficConeRegular(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232,208H213.69L153.42,34.75A16,16,0,0,0,138.31,24H117.69a16,16,0,0,0-15.11,10.74L42.31,208H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM95.43,104h65.14l16.7,48H78.73Zm22.26-64h20.62L155,88H101ZM73.17,168H182.83l13.92,40H59.25Z" />
    </Svg>
  );
});
