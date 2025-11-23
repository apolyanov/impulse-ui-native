import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DoorThinIcon = memo(function DoorThin(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232,220H204V40a12,12,0,0,0-12-12H64A12,12,0,0,0,52,40V220H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM60,40a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4V220H60Zm104,92a8,8,0,1,1-8-8A8,8,0,0,1,164,132Z" />
    </Svg>
  );
});
