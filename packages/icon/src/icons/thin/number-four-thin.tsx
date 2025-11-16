import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberFourThin = memo(function NumberFourThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M184,164H164V48a4,4,0,0,0-7.12-2.5l-96,120A4,4,0,0,0,64,172h92v36a4,4,0,0,0,8,0V172h20a4,4,0,0,0,0-8Zm-28,0H72.32L156,59.4Z" />
    </Svg>
  );
});
