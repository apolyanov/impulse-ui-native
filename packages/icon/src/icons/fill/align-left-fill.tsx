import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AlignLeftFill = memo(function AlignLeftFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232,152v40a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V152a16,16,0,0,1,16-16H216A16,16,0,0,1,232,152ZM40,32a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V40A8,8,0,0,0,40,32Zm40,88h96a16,16,0,0,0,16-16V64a16,16,0,0,0-16-16H80A16,16,0,0,0,64,64v40A16,16,0,0,0,80,120Z" />
    </Svg>
  );
});
