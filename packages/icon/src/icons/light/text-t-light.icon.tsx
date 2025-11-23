import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TextTLightIcon = memo(function TextTLight(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M206,56V88a6,6,0,0,1-12,0V62H134V194h26a6,6,0,0,1,0,12H96a6,6,0,0,1,0-12h26V62H62V88a6,6,0,0,1-12,0V56a6,6,0,0,1,6-6H200A6,6,0,0,1,206,56Z" />
    </Svg>
  );
});
