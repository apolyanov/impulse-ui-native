import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ParallelogramDuotone = memo(function ParallelogramDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path
        d="M239.29,59.28l-64.8,144a8,8,0,0,1-7.3,4.72H24a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232A8,8,0,0,1,239.29,59.28Z"
        opacity={0.2}
      />
      <Path d="M245.43,47.31A15.94,15.94,0,0,0,232,40H88.81a16,16,0,0,0-14.59,9.43l-64.8,144A16,16,0,0,0,24,216H167.19a16,16,0,0,0,14.59-9.43l64.8-144A16,16,0,0,0,245.43,47.31ZM167.19,200H24L88.81,56H232Z" />
    </Svg>
  );
});
