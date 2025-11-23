import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberCircleSevenBoldIcon = memo(function NumberCircleSevenBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM161.83,81.12a12,12,0,0,1,1.45,11l-32,88a12,12,0,0,1-22.56-8.2L134.87,100H104a12,12,0,0,1,0-24h48A12,12,0,0,1,161.83,81.12Z" />
    </Svg>
  );
});
