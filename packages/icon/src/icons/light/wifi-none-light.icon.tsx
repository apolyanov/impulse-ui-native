import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const WifiNoneLightIcon = memo(function WifiNoneLight(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M138,204a10,10,0,1,1-10-10A10,10,0,0,1,138,204Z" />
    </Svg>
  );
});
