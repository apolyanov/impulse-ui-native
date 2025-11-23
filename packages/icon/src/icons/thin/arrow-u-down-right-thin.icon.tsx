import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowUDownRightThinIcon = memo(function ArrowUDownRightThin(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M226.83,170.83l-48,48a4,4,0,0,1-5.66-5.66L214.34,172H88A60,60,0,0,1,88,52h88a4,4,0,0,1,0,8H88a52,52,0,0,0,0,104H214.34l-41.17-41.17a4,4,0,0,1,5.66-5.66l48,48A4,4,0,0,1,226.83,170.83Z" />
    </Svg>
  );
});
