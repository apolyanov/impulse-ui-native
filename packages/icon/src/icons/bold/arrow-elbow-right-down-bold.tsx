import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowRightDownBold = memo(function ArrowElbowRightDownBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232.49,168.49l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,1,1,17-17L164,179V76H32a12,12,0,0,1,0-24H176a12,12,0,0,1,12,12V179l27.51-27.52a12,12,0,0,1,17,17Z" />
    </Svg>
  );
});
