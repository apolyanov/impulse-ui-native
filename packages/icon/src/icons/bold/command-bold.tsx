import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CommandBold = memo(function CommandBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M180,140H164V116h16a40,40,0,1,0-40-40V92H116V76a40,40,0,1,0-40,40H92v24H76a40,40,0,1,0,40,40V164h24v16a40,40,0,1,0,40-40ZM164,76a16,16,0,1,1,16,16H164ZM60,76a16,16,0,0,1,32,0V92H76A16,16,0,0,1,60,76ZM92,180a16,16,0,1,1-16-16H92Zm24-64h24v24H116Zm64,80a16,16,0,0,1-16-16V164h16a16,16,0,0,1,0,32Z" />
    </Svg>
  );
});
