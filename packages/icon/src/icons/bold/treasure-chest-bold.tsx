import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TreasureChestBold = memo(function TreasureChestBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M184,36H72A60.07,60.07,0,0,0,12,96v96a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V96A60.07,60.07,0,0,0,184,36Zm36,60v4H192V60.91A36.05,36.05,0,0,1,220,96Zm-92,60a12,12,0,0,0,12-12V124h28v64H88V124h28v20A12,12,0,0,0,128,156Zm12-56V96a12,12,0,0,0-24,0v4H88V60h80v40ZM64,60.91V100H36V96A36.05,36.05,0,0,1,64,60.91ZM36,124H64v64H36Zm156,64V124h28v64Z" />
    </Svg>
  );
});
