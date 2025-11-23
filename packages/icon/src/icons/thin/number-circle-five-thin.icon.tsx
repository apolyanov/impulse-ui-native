import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberCircleFiveThinIcon = memo(function NumberCircleFiveThin(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM115.39,84l-5.87,35.21A33.26,33.26,0,0,1,124,116a32,32,0,0,1,0,64,31.62,31.62,0,0,1-22.86-9.2,4,4,0,1,1,5.72-5.6A23.67,23.67,0,0,0,124,172a24,24,0,0,0,0-48,23.67,23.67,0,0,0-17.14,6.8,4,4,0,0,1-6.81-3.46l8-48A4,4,0,0,1,112,76h40a4,4,0,0,1,0,8Z" />
    </Svg>
  );
});
