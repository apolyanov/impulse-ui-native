import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CurrencyKztRegularIcon = memo(function CurrencyKztRegular(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,96a8,8,0,0,1-8,8H136V216a8,8,0,0,1-16,0V104H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,96ZM56,64H200a8,8,0,0,0,0-16H56a8,8,0,0,0,0,16Z" />
    </Svg>
  );
});
