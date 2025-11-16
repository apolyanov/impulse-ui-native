import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ListThin = memo(function ListThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z" />
    </Svg>
  );
});
