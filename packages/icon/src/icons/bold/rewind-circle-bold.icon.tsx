import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const RewindCircleBoldIcon = memo(function RewindCircleBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM180,96v64a12,12,0,0,1-19.5,9.37L124,140.17V160a12,12,0,0,1-19.5,9.37l-40-32a12,12,0,0,1,0-18.74l40-32A12,12,0,0,1,124,96v19.83l36.5-29.2A12,12,0,0,1,180,96Z" />
    </Svg>
  );
});
