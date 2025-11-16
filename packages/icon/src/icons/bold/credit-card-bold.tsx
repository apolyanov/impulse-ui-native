import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CreditCardBold = memo(function CreditCardBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,44H32A20,20,0,0,0,12,64V192a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V64A20,20,0,0,0,224,44Zm-4,24V88H36V68ZM36,188V112H220v76Zm172-24a12,12,0,0,1-12,12H164a12,12,0,0,1,0-24h32A12,12,0,0,1,208,164Zm-68,0a12,12,0,0,1-12,12H116a12,12,0,0,1,0-24h12A12,12,0,0,1,140,164Z" />
    </Svg>
  );
});
