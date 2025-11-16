import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DotsThreeCircleVerticalRegular = memo(
  function DotsThreeCircleVerticalRegular(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm12-88a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm0-44a12,12,0,1,1-12-12A12,12,0,0,1,140,84Zm0,88a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z" />
      </Svg>
    );
  },
);
