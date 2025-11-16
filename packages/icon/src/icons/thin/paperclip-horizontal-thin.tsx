import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const PaperclipHorizontalThin = memo(function PaperclipHorizontalThin(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M244,128a52.06,52.06,0,0,1-52,52H48a36,36,0,0,1,0-72H192a20,20,0,0,1,0,40H80a4,4,0,0,1,0-8H192a12,12,0,0,0,0-24H48a28,28,0,0,0,0,56H192a44,44,0,0,0,0-88H80a4,4,0,0,1,0-8H192A52.06,52.06,0,0,1,244,128Z" />
    </Svg>
  );
});
