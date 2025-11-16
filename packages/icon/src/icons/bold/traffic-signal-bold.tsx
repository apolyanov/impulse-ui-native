import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TrafficSignalBold = memo(function TrafficSignalBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,140H204V84h12a12,12,0,0,0,0-24H204V40a20,20,0,0,0-20-20H72A20,20,0,0,0,52,40V60H40a12,12,0,0,0,0,24H52v56H40a12,12,0,0,0,0,24H52v52a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20V164h12a12,12,0,0,0,0-24Zm-36,72H76V44H180Zm-52-92A32,32,0,1,0,96,88,32,32,0,0,0,128,120Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,128,80Zm0,120a32,32,0,1,0-32-32A32,32,0,0,0,128,200Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,128,160Z" />
    </Svg>
  );
});
