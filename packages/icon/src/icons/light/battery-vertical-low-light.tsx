import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BatteryVerticalLowLight = memo(function BatteryVerticalLowLight(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M90,8a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H96A6,6,0,0,1,90,8ZM198,56V224a22,22,0,0,1-22,22H80a22,22,0,0,1-22-22V56A22,22,0,0,1,80,34h96A22,22,0,0,1,198,56Zm-12,0a10,10,0,0,0-10-10H80A10,10,0,0,0,70,56V224a10,10,0,0,0,10,10h96a10,10,0,0,0,10-10ZM160,194H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Z" />
    </Svg>
  );
});
