import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SwapLightIcon = memo(function SwapLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M222,48V152a14,14,0,0,1-14,14H94.49l13.75,13.76a6,6,0,1,1-8.48,8.48l-24-24a6,6,0,0,1,0-8.48l24-24a6,6,0,0,1,8.48,8.48L94.49,154H208a2,2,0,0,0,2-2V48a2,2,0,0,0-2-2H96a2,2,0,0,0-2,2v8a6,6,0,0,1-12,0V48A14,14,0,0,1,96,34H208A14,14,0,0,1,222,48ZM168,194a6,6,0,0,0-6,6v8a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V104a2,2,0,0,1,2-2H161.51l-13.75,13.76a6,6,0,1,0,8.48,8.48l24-24a6,6,0,0,0,0-8.48l-24-24a6,6,0,0,0-8.48,8.48L161.51,90H48a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14H160a14,14,0,0,0,14-14v-8A6,6,0,0,0,168,194Z" />
    </Svg>
  );
});
