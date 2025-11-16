import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CurrencyKztThin = memo(function CurrencyKztThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M204,96a4,4,0,0,1-4,4H132V216a4,4,0,0,1-8,0V100H56a4,4,0,0,1,0-8H200A4,4,0,0,1,204,96ZM56,60H200a4,4,0,0,0,0-8H56a4,4,0,0,0,0,8Z" />
    </Svg>
  );
});
