import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SuitcaseThinIcon = memo(function SuitcaseThin(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,60H172V48a20,20,0,0,0-20-20H104A20,20,0,0,0,84,48V60H40A12,12,0,0,0,28,72V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V72A12,12,0,0,0,216,60ZM84,204H40a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4H84Zm80,0H92V68h72Zm0-144H92V48a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12Zm56,140a4,4,0,0,1-4,4H172V68h44a4,4,0,0,1,4,4Z" />
    </Svg>
  );
});
