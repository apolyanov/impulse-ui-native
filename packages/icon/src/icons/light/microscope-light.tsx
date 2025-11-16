import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MicroscopeLight = memo(function MicroscopeLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,210H199.53A85.2,85.2,0,0,0,222,152a86.1,86.1,0,0,0-80-85.77V32a14,14,0,0,0-14-14H80A14,14,0,0,0,66,32V136a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V78.26A74,74,0,0,1,182,210H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12Zm-94-74a2,2,0,0,1-2,2H80a2,2,0,0,1-2-2V32a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2ZM72,182a6,6,0,0,1,0-12h64a6,6,0,0,1,0,12Z" />
    </Svg>
  );
});
