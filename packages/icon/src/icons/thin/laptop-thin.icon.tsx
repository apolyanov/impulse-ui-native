import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const LaptopThinIcon = memo(function LaptopThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232,172H220V72a20,20,0,0,0-20-20H56A20,20,0,0,0,36,72V172H24a4,4,0,0,0-4,4v16a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V176A4,4,0,0,0,232,172ZM44,72A12,12,0,0,1,56,60H200a12,12,0,0,1,12,12V172H44ZM228,192a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V180H228ZM148,88a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h32A4,4,0,0,1,148,88Z" />
    </Svg>
  );
});
