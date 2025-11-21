import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowLineRightDuotoneIcon = memo(function ArrowLineRightDuotone(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M184,128l-72,72V56Z" opacity={0.2} />
      <Path d="M117.66,50.34A8,8,0,0,0,104,56v64H32a8,8,0,0,0,0,16h72v64a8,8,0,0,0,13.66,5.66l72-72a8,8,0,0,0,0-11.32ZM120,180.69V75.31L172.69,128ZM224,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Z" />
    </Svg>
  );
});
