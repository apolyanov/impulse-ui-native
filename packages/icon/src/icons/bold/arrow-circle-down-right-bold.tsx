import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowCircleDownRightBold = memo(function ArrowCircleDownRightBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm44-100v48a12,12,0,0,1-12,12H112a12,12,0,0,1,0-24h19L87.51,104.49a12,12,0,0,1,17-17L148,131V112a12,12,0,0,1,24,0Z" />
    </Svg>
  );
});
