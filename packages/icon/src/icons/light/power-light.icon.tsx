import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const PowerLightIcon = memo(function PowerLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M122,128V48a6,6,0,0,1,12,0v80a6,6,0,0,1-12,0Zm57.28-77A6,6,0,0,0,172.72,61C196.41,76.47,210,100.88,210,128a82,82,0,0,1-164,0c0-27.12,13.59-51.53,37.28-67A6,6,0,0,0,76.72,51C49.57,68.68,34,96.75,34,128a94,94,0,0,0,188,0C222,96.75,206.43,68.68,179.28,51Z" />
    </Svg>
  );
});
