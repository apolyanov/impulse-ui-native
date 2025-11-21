import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CurrencyKztLightIcon = memo(function CurrencyKztLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M206,96a6,6,0,0,1-6,6H134V216a6,6,0,0,1-12,0V102H56a6,6,0,0,1,0-12H200A6,6,0,0,1,206,96ZM56,62H200a6,6,0,0,0,0-12H56a6,6,0,0,0,0,12Z" />
    </Svg>
  );
});
