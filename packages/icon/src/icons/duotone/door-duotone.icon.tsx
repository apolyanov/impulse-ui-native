import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DoorDuotoneIcon = memo(function DoorDuotone(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path
        d="M200,40V224H56V40a8,8,0,0,1,8-8H192A8,8,0,0,1,200,40Z"
        opacity={0.2}
      />
      <Path d="M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM64,40H192V216H64Zm104,92a12,12,0,1,1-12-12A12,12,0,0,1,168,132Z" />
    </Svg>
  );
});
