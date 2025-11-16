import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const XLogoFill = memo(function XLogoFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z" />
    </Svg>
  );
});
