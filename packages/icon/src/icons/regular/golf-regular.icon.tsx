import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const GolfRegularIcon = memo(function GolfRegular(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M176,100a12,12,0,1,1-12-12A12,12,0,0,1,176,100Zm-44,20a12,12,0,1,0,12,12A12,12,0,0,0,132,120Zm84-24A88,88,0,1,1,128,8,88.1,88.1,0,0,1,216,96Zm-16,0a72,72,0,1,0-72,72A72.08,72.08,0,0,0,200,96Zm-34.86,96.53C152,197.56,139.85,200,128,200s-24-2.44-37.14-7.47a8,8,0,1,0-5.72,14.94A125.91,125.91,0,0,0,120,215.68V248a8,8,0,0,0,16,0V215.68a125.91,125.91,0,0,0,34.86-8.21,8,8,0,1,0-5.72-14.94Z" />
    </Svg>
  );
});
