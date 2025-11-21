import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DotsNineLightIcon = memo(function DotsNineLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M70,60A10,10,0,1,1,60,50,10,10,0,0,1,70,60Zm58-10a10,10,0,1,0,10,10A10,10,0,0,0,128,50Zm68,20a10,10,0,1,0-10-10A10,10,0,0,0,196,70ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,128,118Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118ZM60,186a10,10,0,1,0,10,10A10,10,0,0,0,60,186Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,128,186Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,196,186Z" />
    </Svg>
  );
});
