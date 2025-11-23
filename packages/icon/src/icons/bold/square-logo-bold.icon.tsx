import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SquareLogoBoldIcon = memo(function SquareLogoBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM96,172h64a12,12,0,0,0,12-12V96a12,12,0,0,0-12-12H96A12,12,0,0,0,84,96v64A12,12,0,0,0,96,172Zm12-64h40v40H108Z" />
    </Svg>
  );
});
