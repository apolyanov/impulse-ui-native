import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const HandGrabbingFill = memo(function HandGrabbingFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,104v48a88,88,0,0,1-176,0V136a16,16,0,0,1,32,0v8a8,8,0,0,0,16,0V88a16,16,0,0,1,32,0v16a8,8,0,0,0,16,0V88a16,16,0,0,1,32,0v16a8,8,0,0,0,16,0,16,16,0,0,1,32,0Z" />
    </Svg>
  );
});
