import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MicrophoneLight = memo(function MicrophoneLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,174a46.06,46.06,0,0,0,46-46V64a46,46,0,0,0-92,0v64A46.06,46.06,0,0,0,128,174ZM94,64a34,34,0,0,1,68,0v64a34,34,0,0,1-68,0Zm40,141.75V240a6,6,0,0,1-12,0V205.75A78.09,78.09,0,0,1,50,128a6,6,0,0,1,12,0,66,66,0,0,0,132,0,6,6,0,0,1,12,0A78.09,78.09,0,0,1,134,205.75Z" />
    </Svg>
  );
});
