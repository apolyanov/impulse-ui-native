import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CraneThin = memo(function CraneThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M226.06,20.57a4,4,0,0,0-3.94-.1L103,84H32A12,12,0,0,0,20,96V200a12,12,0,0,0,12,12h88a12,12,0,0,0,12-12V168a4.05,4.05,0,0,0-.17-1.15L108.77,90,220,30.67V160a4,4,0,0,1-4,4H200a4,4,0,0,1-4-4v-8a4,4,0,0,0-8,0v8a12,12,0,0,0,12,12h16a12,12,0,0,0,12-12V24A4,4,0,0,0,226.06,20.57ZM101,92l21.6,72H60V92ZM32,92H52v72H28V96A4,4,0,0,1,32,92Zm88,112H32a4,4,0,0,1-4-4V172h96v28A4,4,0,0,1,120,204Z" />
    </Svg>
  );
});
