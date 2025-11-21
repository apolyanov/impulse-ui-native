import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const LessThanThinIcon = memo(function LessThanThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M203.61,201.71A4,4,0,0,1,200,204a3.85,3.85,0,0,1-1.71-.39l-152-72a4,4,0,0,1,0-7.23l152-72a4,4,0,0,1,3.42,7.23L57.34,128l144.37,68.38A4,4,0,0,1,203.61,201.71Z" />
    </Svg>
  );
});
