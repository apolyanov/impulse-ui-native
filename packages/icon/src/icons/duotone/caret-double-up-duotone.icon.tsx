import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CaretDoubleUpDuotoneIcon = memo(function CaretDoubleUpDuotone(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,200H48l80-80Z" opacity={0.2} />
      <Path d="M133.66,114.34a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,208H208a8,8,0,0,0,5.66-13.66ZM67.31,192,128,131.31,188.69,192Zm-25-66.34a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,0l80,80a8,8,0,0,1-11.32,11.32L128,51.31,53.66,125.66A8,8,0,0,1,42.34,125.66Z" />
    </Svg>
  );
});
