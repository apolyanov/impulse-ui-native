import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AlignRightSimpleBoldIcon = memo(function AlignRightSimpleBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M236,56V200a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0ZM196,96v64a20,20,0,0,1-20,20H32a20,20,0,0,1-20-20V96A20,20,0,0,1,32,76H176A20,20,0,0,1,196,96Zm-24,4H36v56H172Z" />
    </Svg>
  );
});
