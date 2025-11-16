import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const WaveSquareLight = memo(function WaveSquareLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M238,128v56a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V78H30v50a6,6,0,0,1-12,0V72a6,6,0,0,1,6-6H128a6,6,0,0,1,6,6V178h92V128a6,6,0,0,1,12,0Z" />
    </Svg>
  );
});
