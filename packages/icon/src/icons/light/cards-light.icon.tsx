import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CardsLightIcon = memo(function CardsLight(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M184,74H40A14,14,0,0,0,26,88V200a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V88A14,14,0,0,0,184,74Zm2,126a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2H184a2,2,0,0,1,2,2ZM230,56V176a6,6,0,0,1-12,0V56a2,2,0,0,0-2-2H64a6,6,0,0,1,0-12H216A14,14,0,0,1,230,56Z" />
    </Svg>
  );
});
