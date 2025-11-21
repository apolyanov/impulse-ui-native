import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChairLightIcon = memo(function ChairLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,138H174V102h18a14,14,0,0,0,14-14V40a14,14,0,0,0-14-14H64A14,14,0,0,0,50,40V88a14,14,0,0,0,14,14H82v36H48a14,14,0,0,0-14,14v16a14,14,0,0,0,14,14H58v42a6,6,0,0,0,12,0V182H186v42a6,6,0,0,0,12,0V182h10a14,14,0,0,0,14-14V152A14,14,0,0,0,208,138ZM62,88V40a2,2,0,0,1,2-2H192a2,2,0,0,1,2,2V88a2,2,0,0,1-2,2H64A2,2,0,0,1,62,88Zm32,14h68v36H94Zm116,66a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z" />
    </Svg>
  );
});
