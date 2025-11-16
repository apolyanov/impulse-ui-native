import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const WaveSquareThin = memo(function WaveSquareThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M236,128v56a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V76H28v52a4,4,0,0,1-8,0V72a4,4,0,0,1,4-4H128a4,4,0,0,1,4,4V180h96V128a4,4,0,0,1,8,0Z" />
    </Svg>
  );
});
