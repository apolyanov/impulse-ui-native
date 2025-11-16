import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChatTeardropDotsDuotone = memo(function ChatTeardropDotsDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path
        d="M224,124h0a92,92,0,0,1-92,92H48a8,8,0,0,1-8-8V124a92,92,0,0,1,92-92h0A92,92,0,0,1,224,124Z"
        opacity={0.2}
      />
      <Path d="M132,24A100.11,100.11,0,0,0,32,124v84a16,16,0,0,0,16,16h84a100,100,0,0,0,0-200Zm0,184H48V124a84,84,0,1,1,84,84Zm12-80a12,12,0,1,1-12-12A12,12,0,0,1,144,128Zm-44,0a12,12,0,1,1-12-12A12,12,0,0,1,100,128Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,188,128Z" />
    </Svg>
  );
});
