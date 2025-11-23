import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const PintGlassLightIcon = memo(function PintGlassLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M204.49,28A6,6,0,0,0,200,26H56a6,6,0,0,0-6,6.71l23.16,193A14,14,0,0,0,87.1,238h81.8a14,14,0,0,0,13.9-12.33L206,32.71A6,6,0,0,0,204.49,28ZM193.24,38l-3.36,28H66.12L62.76,38ZM170.89,224.24a2,2,0,0,1-2,1.76H87.1a2,2,0,0,1-2-1.76L67.56,78H188.44Z" />
    </Svg>
  );
});
