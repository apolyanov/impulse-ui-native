import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DivideBoldIcon = memo(function DivideBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM128,84a20,20,0,1,0-20-20A20,20,0,0,0,128,84Zm0,88a20,20,0,1,0,20,20A20,20,0,0,0,128,172Z" />
    </Svg>
  );
});
