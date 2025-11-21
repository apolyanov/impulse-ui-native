import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SimCardThinIcon = memo(function SimCardThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM204,216a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h94.35L204,89.66ZM76,120v72a4,4,0,0,0,4,4h96a4,4,0,0,0,4-4V120a4,4,0,0,0-4-4H80A4,4,0,0,0,76,120Zm8,4h88v64H148V152a4,4,0,0,0-8,0v36H116V152a4,4,0,0,0-8,0v36H84Z" />
    </Svg>
  );
});
