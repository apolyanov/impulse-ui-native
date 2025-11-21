import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowLineDownLeftThinIcon = memo(function ArrowLineDownLeftThin(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M228,48a4,4,0,0,1-4,4H48a4,4,0,0,1,0-8H224A4,4,0,0,1,228,48ZM181.17,93.17,76,198.34V112a4,4,0,0,0-8,0v96a4,4,0,0,0,4,4h96a4,4,0,0,0,0-8H81.66L186.83,98.83a4,4,0,1,0-5.66-5.66Z" />
    </Svg>
  );
});
