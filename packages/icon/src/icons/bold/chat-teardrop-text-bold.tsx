import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChatTeardropTextBold = memo(function ChatTeardropTextBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M176,108a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h68A12,12,0,0,1,176,108Zm-12,28H96a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm72-12A104.11,104.11,0,0,1,132,228H48a20,20,0,0,1-20-20V124a104,104,0,0,1,208,0Zm-24,0a80,80,0,0,0-160,0v80h80A80.09,80.09,0,0,0,212,124Z" />
    </Svg>
  );
});
