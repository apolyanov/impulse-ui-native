import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TextColumnsThinIcon = memo(function TextColumnsThin(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M116,64a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8h72A4,4,0,0,1,116,64Zm-4,36H40a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8ZM144,68h72a4,4,0,0,0,0-8H144a4,4,0,0,0,0,8Zm72,32H144a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,40H144a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,40H144a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Z" />
    </Svg>
  );
});
