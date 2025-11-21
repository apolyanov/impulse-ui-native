import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ShareDuotoneIcon = memo(function ShareDuotone(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,104l-48,48V56Z" opacity={0.2} />
      <Path d="M229.66,98.34l-48-48A8,8,0,0,0,168,56V96h-3A103.94,103.94,0,0,0,64.25,174a8,8,0,0,0,15.5,4A88,88,0,0,1,165,112h3v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,229.66,98.34ZM184,132.69V75.31L212.69,104ZM200,216a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0V208H192A8,8,0,0,1,200,216Z" />
    </Svg>
  );
});
