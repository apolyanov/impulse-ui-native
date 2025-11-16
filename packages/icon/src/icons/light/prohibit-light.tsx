import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ProhibitLight = memo(function ProhibitLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm90,102a89.6,89.6,0,0,1-22.29,59.22L68.78,60.29A89.95,89.95,0,0,1,218,128ZM38,128A89.6,89.6,0,0,1,60.29,68.78L187.22,195.71A89.95,89.95,0,0,1,38,128Z" />
    </Svg>
  );
});
