import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowDownRightDuotoneIcon = memo(
  function ArrowElbowDownRightDuotone(props: SvgProps) {
    return (
      <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
        <Path d="M216,176l-48,48V128Z" opacity={0.2} />
        <Path d="M221.66,170.34l-48-48A8,8,0,0,0,160,128v40H80V32a8,8,0,0,0-16,0V176a8,8,0,0,0,8,8h88v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,221.66,170.34ZM176,204.69V147.31L204.69,176Z" />
      </Svg>
    );
  }
);
