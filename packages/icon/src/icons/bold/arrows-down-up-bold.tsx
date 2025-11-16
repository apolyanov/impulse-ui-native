import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowsDownUpBold = memo(function ArrowsDownUpBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M120.49,167.51a12,12,0,0,1,0,17l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,1,1,17-17L68,179V48a12,12,0,0,1,24,0V179l11.51-11.52A12,12,0,0,1,120.49,167.51Zm96-96-32-32a12,12,0,0,0-17,0l-32,32a12,12,0,0,0,17,17L164,77V208a12,12,0,0,0,24,0V77l11.51,11.52a12,12,0,0,0,17-17Z" />
    </Svg>
  );
});
