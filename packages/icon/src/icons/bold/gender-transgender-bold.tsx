import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const GenderTransgenderBold = memo(function GenderTransgenderBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,28H172a12,12,0,0,0,0,24h15L168,71,152.49,55.52a12,12,0,0,0-17,17L151,88,140.58,98.46a76,76,0,1,0,17,17L168,105l15.51,15.52a12,12,0,0,0,17-17L185,88l19-19V84a12,12,0,0,0,24,0V40A12,12,0,0,0,216,28ZM132.77,196.8A52,52,0,1,1,148,160,52.05,52.05,0,0,1,132.77,196.8Z" />
    </Svg>
  );
});
