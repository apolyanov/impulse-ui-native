import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ShuffleSimpleThinIcon = memo(function ShuffleSimpleThin(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M212,48V88a4,4,0,0,1-8,0V57.66L153.46,108.2a4,4,0,1,1-5.66-5.66L198.34,52H168a4,4,0,0,1,0-8h40A4,4,0,0,1,212,48Zm-4,116a4,4,0,0,0-4,4v30.34L50.83,45.17a4,4,0,0,0-5.66,5.66L198.34,204H168a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V168A4,4,0,0,0,208,164ZM102.54,147.8,45.17,205.17a4,4,0,0,0,5.66,5.66l57.37-57.37a4,4,0,1,0-5.66-5.66Z" />
    </Svg>
  );
});
