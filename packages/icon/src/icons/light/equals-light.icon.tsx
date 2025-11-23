import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const EqualsLightIcon = memo(function EqualsLight(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M222,160a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,160ZM40,102H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Z" />
    </Svg>
  );
});
