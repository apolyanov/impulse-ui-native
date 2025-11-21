import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CurrencyRubLightIcon = memo(function CurrencyRubLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M148,150a58,58,0,0,0,0-116H88a6,6,0,0,0-6,6v98H56a6,6,0,0,0,0,12H82v20H56a6,6,0,0,0,0,12H82v34a6,6,0,0,0,12,0V182h50a6,6,0,0,0,0-12H94V150ZM94,46h54a46,46,0,0,1,0,92H94Z" />
    </Svg>
  );
});
