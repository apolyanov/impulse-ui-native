import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberFourLight = memo(function NumberFourLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M184,162H166V48a6,6,0,0,0-10.69-3.75l-96,120A6,6,0,0,0,64,174h90v34a6,6,0,0,0,12,0V174h18a6,6,0,0,0,0-12Zm-30,0H76.48L154,65.1Z" />
    </Svg>
  );
});
