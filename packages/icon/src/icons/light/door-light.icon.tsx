import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DoorLightIcon = memo(function DoorLight(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232,218H206V40a14,14,0,0,0-14-14H64A14,14,0,0,0,50,40V218H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM62,40a2,2,0,0,1,2-2H192a2,2,0,0,1,2,2V218H62Zm104,92a10,10,0,1,1-10-10A10,10,0,0,1,166,132Z" />
    </Svg>
  );
});
