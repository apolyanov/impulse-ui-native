import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TextColumnsLightIcon = memo(function TextColumnsLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M118,64a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12h72A6,6,0,0,1,118,64Zm-6,34H40a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12ZM144,70h72a6,6,0,0,0,0-12H144a6,6,0,0,0,0,12Zm72,28H144a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0,40H144a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0,40H144a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Z" />
    </Svg>
  );
});
