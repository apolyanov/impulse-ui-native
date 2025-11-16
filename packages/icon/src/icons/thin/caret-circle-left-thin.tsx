import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CaretCircleLeftThin = memo(function CaretCircleLeftThin(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM146.83,90.83,109.66,128l37.17,37.17a4,4,0,0,1-5.66,5.66l-40-40a4,4,0,0,1,0-5.66l40-40a4,4,0,1,1,5.66,5.66Z" />
    </Svg>
  );
});
