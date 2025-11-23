import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MapPinSimpleLightIcon = memo(function MapPinSimpleLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M182,72a54,54,0,1,0-60,53.66V232a6,6,0,0,0,12,0V125.66A54.07,54.07,0,0,0,182,72Zm-54,42a42,42,0,1,1,42-42A42,42,0,0,1,128,114Z" />
    </Svg>
  );
});
