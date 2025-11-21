import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChatTeardropThinIcon = memo(function ChatTeardropThin(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M132,28a96.11,96.11,0,0,0-96,96v84a12,12,0,0,0,12,12h84a96,96,0,0,0,0-192Zm0,184H48a4,4,0,0,1-4-4V124a88,88,0,1,1,88,88Z" />
    </Svg>
  );
});
