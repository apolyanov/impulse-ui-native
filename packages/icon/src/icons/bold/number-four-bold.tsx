import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberFourBold = memo(function NumberFourBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M184,156H172V48a12,12,0,0,0-21.37-7.5l-96,120A12,12,0,0,0,64,180h84v28a12,12,0,0,0,24,0V180h12a12,12,0,0,0,0-24Zm-36,0H89l59-73.79Z" />
    </Svg>
  );
});
