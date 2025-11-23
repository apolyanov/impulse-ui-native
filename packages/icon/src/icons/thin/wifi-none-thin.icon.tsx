import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const WifiNoneThinIcon = memo(function WifiNoneThin(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M136,204a8,8,0,1,1-8-8A8,8,0,0,1,136,204Z" />
    </Svg>
  );
});
