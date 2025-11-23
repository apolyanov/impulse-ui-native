import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowUDownRightBoldIcon = memo(function ArrowUDownRightBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232.49,176.49l-48,48a12,12,0,0,1-17-17L195,180H88A68,68,0,0,1,88,44h88a12,12,0,0,1,0,24H88a44,44,0,0,0,0,88H195l-27.52-27.51a12,12,0,1,1,17-17l48,48A12,12,0,0,1,232.49,176.49Z" />
    </Svg>
  );
});
