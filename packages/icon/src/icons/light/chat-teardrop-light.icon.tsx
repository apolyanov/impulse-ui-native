import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChatTeardropLightIcon = memo(function ChatTeardropLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M132,26a98.11,98.11,0,0,0-98,98v84a14,14,0,0,0,14,14h84a98,98,0,0,0,0-196Zm0,184H48a2,2,0,0,1-2-2V124a86,86,0,1,1,86,86Z" />
    </Svg>
  );
});
