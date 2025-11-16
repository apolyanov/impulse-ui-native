import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ExclamationMarkBold = memo(function ExclamationMarkBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M148,200a20,20,0,1,1-20-20A20,20,0,0,1,148,200Zm-20-40a12,12,0,0,0,12-12V48a12,12,0,0,0-24,0V148A12,12,0,0,0,128,160Z" />
    </Svg>
  );
});
