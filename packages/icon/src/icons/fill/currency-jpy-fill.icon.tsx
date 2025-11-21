import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CurrencyJpyFillIcon = memo(function CurrencyJpyFill(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm54.4,52.8L144,128h16a8,8,0,0,1,0,16H136v16h24a8,8,0,0,1,0,16H136v16a8,8,0,0,1-16,0V176H96a8,8,0,0,1,0-16h24V144H96a8,8,0,0,1,0-16h16L73.6,76.8a8,8,0,1,1,12.8-9.6L128,122.67,169.6,67.2a8,8,0,0,1,12.8,9.6Z" />
    </Svg>
  );
});
