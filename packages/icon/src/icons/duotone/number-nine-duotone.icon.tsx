import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberNineDuotoneIcon = memo(function NumberNineDuotone(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path
        d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z"
        opacity={0.2}
      />
      <Path d="M128,40a56,56,0,1,0,15.62,109.77L113,204.07A8,8,0,1,0,127,211.92l49.55-88A56,56,0,0,0,128,40Zm0,96a40,40,0,1,1,40-40A40,40,0,0,1,128,136Z" />
    </Svg>
  );
});
