import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BellSimpleFill = memo(function BellSimpleFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm53.81-48.06C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H208a16,16,0,0,0,13.8-24.06Z" />
    </Svg>
  );
});
