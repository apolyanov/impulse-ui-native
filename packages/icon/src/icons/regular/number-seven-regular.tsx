import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberSevenRegular = memo(function NumberSevenRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M175.66,50.3l-48,160a8,8,0,0,1-15.32-4.6L157.25,56H88a8,8,0,0,1,0-16h80a8,8,0,0,1,7.66,10.3Z" />
    </Svg>
  );
});
