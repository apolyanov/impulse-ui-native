import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DotsThreeCircleBold = memo(function DotsThreeCircleBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm-16-84a16,16,0,1,1-16-16A16,16,0,0,1,112,128Zm64,0a16,16,0,1,1-16-16A16,16,0,0,1,176,128Z" />
    </Svg>
  );
});
