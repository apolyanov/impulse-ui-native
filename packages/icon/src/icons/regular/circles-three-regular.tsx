import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CirclesThreeRegular = memo(function CirclesThreeRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M172,76a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,76Zm-44,28a28,28,0,1,1,28-28A28,28,0,0,1,128,104Zm60,24a44,44,0,1,0,44,44A44.05,44.05,0,0,0,188,128Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,188,200ZM68,128a44,44,0,1,0,44,44A44.05,44.05,0,0,0,68,128Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,68,200Z" />
    </Svg>
  );
});
