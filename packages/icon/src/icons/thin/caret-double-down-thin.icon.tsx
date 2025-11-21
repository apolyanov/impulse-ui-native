import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CaretDoubleDownThinIcon = memo(function CaretDoubleDownThin(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M210.83,133.17a4,4,0,0,1,0,5.66l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,210.34l77.17-77.17A4,4,0,0,1,210.83,133.17Zm-85.66,5.66a4,4,0,0,0,5.66,0l80-80a4,4,0,1,0-5.66-5.66L128,130.34,50.83,53.17a4,4,0,0,0-5.66,5.66Z" />
    </Svg>
  );
});
