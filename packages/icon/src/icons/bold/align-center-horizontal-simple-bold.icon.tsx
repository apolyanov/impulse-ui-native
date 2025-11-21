import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AlignCenterHorizontalSimpleBoldIcon = memo(
  function AlignCenterHorizontalSimpleBold(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M208,76H140V48a12,12,0,0,0-24,0V76H48A20,20,0,0,0,28,96v64a20,20,0,0,0,20,20h68v28a12,12,0,0,0,24,0V180h68a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76Zm-4,80H52V100H204Z" />
      </Svg>
    );
  }
);
