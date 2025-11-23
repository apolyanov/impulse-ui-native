import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const PlayCircleBoldIcon = memo(function PlayCircleBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M176,128a12,12,0,0,1-5.17,9.87l-52,36A12,12,0,0,1,100,164V92a12,12,0,0,1,18.83-9.87l52,36A12,12,0,0,1,176,128Zm60,0A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" />
    </Svg>
  );
});
