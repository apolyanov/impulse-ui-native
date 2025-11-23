import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BatteryFullBoldIcon = memo(function BatteryFullBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M196,52H28A28,28,0,0,0,0,80v96a28,28,0,0,0,28,28H196a28,28,0,0,0,28-28V80A28,28,0,0,0,196,52Zm4,124a4,4,0,0,1-4,4H28a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H196a4,4,0,0,1,4,4Zm-16-72v48a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm-40,0v48a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm-40,0v48a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm-40,0v48a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm192,0v48a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z" />
    </Svg>
  );
});
