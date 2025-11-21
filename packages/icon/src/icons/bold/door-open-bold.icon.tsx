import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DoorOpenBoldIcon = memo(function DoorOpenBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232,212H212V40a20,20,0,0,0-20-20H64A20,20,0,0,0,44,40V212H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24Zm-44,0H172V44h16ZM68,44h80V212H68Zm68,84a16,16,0,1,1-16-16A16,16,0,0,1,136,128Z" />
    </Svg>
  );
});
