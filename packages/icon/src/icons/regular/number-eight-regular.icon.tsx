import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberEightRegularIcon = memo(function NumberEightRegular(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M155.55,119.27a48,48,0,1,0-55.1,0,56,56,0,1,0,55.1,0ZM96,80a32,32,0,1,1,32,32A32,32,0,0,1,96,80Zm32,128a40,40,0,1,1,40-40A40,40,0,0,1,128,208Z" />
    </Svg>
  );
});
