import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CurrencyRubFillIcon = memo(function CurrencyRubFill(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M168,104a24,24,0,0,1-24,24H112V80h32A24,24,0,0,1,168,104Zm64,24A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-48-24a40,40,0,0,0-40-40H104a8,8,0,0,0-8,8v56H88a8,8,0,0,0,0,16h8v16H88a8,8,0,0,0,0,16h8v16a8,8,0,0,0,16,0V176h40a8,8,0,0,0,0-16H112V144h32A40,40,0,0,0,184,104Z" />
    </Svg>
  );
});
