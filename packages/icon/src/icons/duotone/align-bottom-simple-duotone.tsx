import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AlignBottomSimpleDuotone = memo(function AlignBottomSimpleDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path
        d="M168,40V192a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64A8,8,0,0,1,168,40Z"
        opacity={0.2}
      />
      <Path d="M208,232a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,232ZM80,192V40A16,16,0,0,1,96,24h64a16,16,0,0,1,16,16V192a16,16,0,0,1-16,16H96A16,16,0,0,1,80,192Zm16,0h64V40H96Z" />
    </Svg>
  );
});
