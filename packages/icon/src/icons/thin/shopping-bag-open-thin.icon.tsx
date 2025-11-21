import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ShoppingBagOpenThinIcon = memo(function ShoppingBagOpenThin(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V76H36V56A4,4,0,0,1,40,52ZM216,204H40a4,4,0,0,1-4-4V84H220V200A4,4,0,0,1,216,204Zm-44-92a44,44,0,0,1-88,0,4,4,0,0,1,8,0,36,36,0,0,0,72,0,4,4,0,0,1,8,0Z" />
    </Svg>
  );
});
