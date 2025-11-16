import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const PaperclipHorizontalBold = memo(function PaperclipHorizontalBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M252,128a60.07,60.07,0,0,1-60,60H44a40,40,0,0,1,0-80H184a12,12,0,0,1,0,24H44a16,16,0,0,0,0,32H192a36,36,0,0,0,0-72H80a12,12,0,0,1,0-24H192A60.07,60.07,0,0,1,252,128Z" />
    </Svg>
  );
});
