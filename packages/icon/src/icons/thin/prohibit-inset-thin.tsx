import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ProhibitInsetThin = memo(function ProhibitInsetThin(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M162.83,157.17a4,4,0,0,1-5.66,5.66l-64-64a4,4,0,0,1,5.66-5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" />
    </Svg>
  );
});
