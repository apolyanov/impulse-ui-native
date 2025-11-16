import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AlignCenterHorizontalSimpleFill = memo(
  function AlignCenterHorizontalSimpleFill(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M224,96v64a16,16,0,0,1-16,16H136v32a8,8,0,0,1-16,0V176H48a16,16,0,0,1-16-16V96A16,16,0,0,1,48,80h72V48a8,8,0,0,1,16,0V80h72A16,16,0,0,1,224,96Z" />
      </Svg>
    );
  },
);
