import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowUDownLeftDuotoneIcon = memo(function ArrowUDownLeftDuotone(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M80,120v96L32,168Z" opacity={0.2} />
      <Path d="M168,48H80a8,8,0,0,0,0,16h88a48,48,0,0,1,0,96H88V120a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,88,216V176h80a64,64,0,0,0,0-128ZM72,196.69,43.31,168,72,139.31Z" />
    </Svg>
  );
});
