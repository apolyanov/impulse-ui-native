import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumpadLightIcon = memo(function NumpadLight(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M78,48A14,14,0,1,1,64,34,14,14,0,0,1,78,48Zm50-14a14,14,0,1,0,14,14A14,14,0,0,0,128,34Zm64,28a14,14,0,1,0-14-14A14,14,0,0,0,192,62ZM64,90a14,14,0,1,0,14,14A14,14,0,0,0,64,90Zm64,0a14,14,0,1,0,14,14A14,14,0,0,0,128,90Zm64,0a14,14,0,1,0,14,14A14,14,0,0,0,192,90ZM64,146a14,14,0,1,0,14,14A14,14,0,0,0,64,146Zm64,0a14,14,0,1,0,14,14A14,14,0,0,0,128,146Zm0,56a14,14,0,1,0,14,14A14,14,0,0,0,128,202Zm64-56a14,14,0,1,0,14,14A14,14,0,0,0,192,146Z" />
    </Svg>
  );
});
