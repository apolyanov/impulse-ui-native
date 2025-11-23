import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ListDashesLightIcon = memo(function ListDashesLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M90,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H96A6,6,0,0,1,90,64Zm126,58H96a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,64H96a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12ZM56,58H40a6,6,0,0,0,0,12H56a6,6,0,0,0,0-12Zm0,64H40a6,6,0,0,0,0,12H56a6,6,0,0,0,0-12Zm0,64H40a6,6,0,0,0,0,12H56a6,6,0,0,0,0-12Z" />
    </Svg>
  );
});
