import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CurrencyKrwFillIcon = memo(function CurrencyKrwFill(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm72,120H181.42l-14,35a8,8,0,0,1-14.86,0L128,117.54,103.43,179a8,8,0,0,1-14.86,0l-14-35H56a8,8,0,0,1,0-16H68.18L56.57,99A8,8,0,1,1,71.43,93L96,154.46,120.57,93a8,8,0,0,1,14.86,0L160,154.46,184.57,93A8,8,0,1,1,199.43,99l-11.61,29H200a8,8,0,0,1,0,16Z" />
    </Svg>
  );
});
