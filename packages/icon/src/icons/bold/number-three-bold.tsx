import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberThreeBold = memo(function NumberThreeBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M180,160A60,60,0,0,1,80,204.72a12,12,0,1,1,16-17.88A36,36,0,1,0,120,124a12,12,0,0,1-9.6-19.2L144,60H88a12,12,0,0,1,0-24h80a12,12,0,0,1,9.6,19.2l-36.48,48.64A60.11,60.11,0,0,1,180,160Z" />
    </Svg>
  );
});
