import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ExclamationMarkThinIcon = memo(function ExclamationMarkThin(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M140,200a12,12,0,1,1-12-12A12,12,0,0,1,140,200Zm-12-44a4,4,0,0,0,4-4V48a4,4,0,0,0-8,0V152A4,4,0,0,0,128,156Z" />
    </Svg>
  );
});
