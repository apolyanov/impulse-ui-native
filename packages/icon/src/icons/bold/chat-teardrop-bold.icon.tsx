import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChatTeardropBoldIcon = memo(function ChatTeardropBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M132,20A104.11,104.11,0,0,0,28,124v84a20,20,0,0,0,20,20h84a104,104,0,0,0,0-208Zm0,184H52V124a80,80,0,1,1,80,80Z" />
    </Svg>
  );
});
