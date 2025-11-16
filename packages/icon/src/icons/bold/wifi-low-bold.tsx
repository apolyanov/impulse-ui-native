import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const WifiLowBold = memo(function WifiLowBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M144,204a16,16,0,1,1-16-16A16,16,0,0,1,144,204Zm31.06-48.7a80,80,0,0,0-94.12,0,12,12,0,1,0,14.13,19.4,56,56,0,0,1,65.86,0,12,12,0,1,0,14.13-19.4Z" />
    </Svg>
  );
});
