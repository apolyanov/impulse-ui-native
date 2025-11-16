import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AlignLeftRegular = memo(function AlignLeftRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M48,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Zm16,64V64A16,16,0,0,1,80,48h96a16,16,0,0,1,16,16v40a16,16,0,0,1-16,16H80A16,16,0,0,1,64,104Zm16,0h96V64H80Zm152,48v40a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V152a16,16,0,0,1,16-16H216A16,16,0,0,1,232,152Zm-16,40V152H80v40H216Z" />
    </Svg>
  );
});
