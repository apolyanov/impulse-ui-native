import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CreditCardLightIcon = memo(function CreditCardLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50ZM32,62H224a2,2,0,0,1,2,2V90H30V64A2,2,0,0,1,32,62ZM224,194H32a2,2,0,0,1-2-2V102H226v90A2,2,0,0,1,224,194Zm-18-26a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h32A6,6,0,0,1,206,168Zm-64,0a6,6,0,0,1-6,6H120a6,6,0,0,1,0-12h16A6,6,0,0,1,142,168Z" />
    </Svg>
  );
});
