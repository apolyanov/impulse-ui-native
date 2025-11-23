import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const StopCircleFillIcon = memo(function StopCircleFill(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm32,132a4,4,0,0,1-4,4H100a4,4,0,0,1-4-4V100a4,4,0,0,1,4-4h56a4,4,0,0,1,4,4Z" />
    </Svg>
  );
});
