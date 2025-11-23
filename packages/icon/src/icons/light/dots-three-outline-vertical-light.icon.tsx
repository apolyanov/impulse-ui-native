import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DotsThreeOutlineVerticalLightIcon = memo(
  function DotsThreeOutlineVerticalLight(props: SvgProps) {
    return (
      <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
        <Path d="M128,98a30,30,0,1,0,30,30A30,30,0,0,0,128,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,146Zm0-68A30,30,0,1,0,98,48,30,30,0,0,0,128,78Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,128,30Zm0,148a30,30,0,1,0,30,30A30,30,0,0,0,128,178Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,226Z" />
      </Svg>
    );
  }
);
