import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ClosedCaptioningBoldIcon = memo(function ClosedCaptioningBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,44H32A20,20,0,0,0,12,64V192a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V64A20,20,0,0,0,224,44Zm-4,144H36V68H220ZM52,128a44,44,0,0,1,66-38.11,12,12,0,0,1-12,20.78,20,20,0,1,0,0,34.66,12,12,0,1,1,12,20.77A44,44,0,0,1,52,128Zm80,0a44,44,0,0,1,66-38.11,12,12,0,0,1-12,20.78,20,20,0,1,0,0,34.66,12,12,0,1,1,12,20.77A44,44,0,0,1,132,128Z" />
    </Svg>
  );
});
