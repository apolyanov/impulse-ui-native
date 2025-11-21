import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const PicnicTableBoldIcon = memo(function PicnicTableBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M244,124H203.42l-24-48H192a12,12,0,0,0,0-24H64a12,12,0,0,0,0,24H76.58l-24,48H12a12,12,0,0,0,0,24H40.58L21.27,186.63a12,12,0,1,0,21.46,10.73L67.42,148H188.58l24.69,49.36a12,12,0,1,0,21.46-10.73L215.42,148H244a12,12,0,0,0,0-24ZM79.42,124l24-48h49.16l24,48Z" />
    </Svg>
  );
});
