import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ListChecksThin = memo(function ListChecksThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M220,128a4,4,0,0,1-4,4H128a4,4,0,0,1,0-8h88A4,4,0,0,1,220,128ZM128,68h88a4,4,0,0,0,0-8H128a4,4,0,0,0,0,8Zm88,120H128a4,4,0,0,0,0,8h88a4,4,0,0,0,0-8ZM85.17,45.17,56,74.34,42.83,61.17a4,4,0,0,0-5.66,5.66l16,16a4,4,0,0,0,5.66,0l32-32a4,4,0,0,0-5.66-5.66Zm0,64L56,138.34,42.83,125.17a4,4,0,1,0-5.66,5.66l16,16a4,4,0,0,0,5.66,0l32-32a4,4,0,0,0-5.66-5.66Zm0,64L56,202.34,42.83,189.17a4,4,0,0,0-5.66,5.66l16,16a4,4,0,0,0,5.66,0l32-32a4,4,0,0,0-5.66-5.66Z" />
    </Svg>
  );
});
