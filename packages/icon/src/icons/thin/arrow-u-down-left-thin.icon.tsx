import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowUDownLeftThinIcon = memo(function ArrowUDownLeftThin(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M228,112a60.07,60.07,0,0,1-60,60H41.66l41.17,41.17a4,4,0,0,1-5.66,5.66l-48-48a4,4,0,0,1,0-5.66l48-48a4,4,0,0,1,5.66,5.66L41.66,164H168a52,52,0,0,0,0-104H80a4,4,0,0,1,0-8h88A60.07,60.07,0,0,1,228,112Z" />
    </Svg>
  );
});
