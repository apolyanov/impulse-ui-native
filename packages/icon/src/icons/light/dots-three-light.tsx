import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DotsThreeLight = memo(function DotsThreeLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z" />
    </Svg>
  );
});
