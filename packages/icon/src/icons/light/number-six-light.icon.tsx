import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberSixLightIcon = memo(function NumberSixLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,106a53.74,53.74,0,0,0-19.94,3.83L141.23,51a6,6,0,1,0-10.46-5.89l-49.54,88A54,54,0,1,0,128,106Zm0,96a42,42,0,1,1,42-42A42,42,0,0,1,128,202Z" />
    </Svg>
  );
});
