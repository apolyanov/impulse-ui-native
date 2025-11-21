import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BowlingBallThinIcon = memo(function BowlingBallThin(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm12-104a8,8,0,1,1-8-8A8,8,0,0,1,140,116Zm24-16a8,8,0,1,1,8-8A8,8,0,0,1,164,100Zm16,32a8,8,0,1,1-8-8A8,8,0,0,1,180,132Z" />
    </Svg>
  );
});
