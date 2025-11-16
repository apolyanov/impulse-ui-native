import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowFatDownFill = memo(function ArrowFatDownFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M229.66,141.66l-96,96a8,8,0,0,1-11.32,0l-96-96A8,8,0,0,1,32,128H72V48A16,16,0,0,1,88,32h80a16,16,0,0,1,16,16v80h40a8,8,0,0,1,5.66,13.66Z" />
    </Svg>
  );
});
