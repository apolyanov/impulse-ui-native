import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BookOpenLight = memo(function BookOpenLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232,50H160a38,38,0,0,0-32,17.55A38,38,0,0,0,96,50H24a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H96a26,26,0,0,1,26,26,6,6,0,0,0,12,0,26,26,0,0,1,26-26h72a6,6,0,0,0,6-6V56A6,6,0,0,0,232,50ZM96,194H30V62H96a26,26,0,0,1,26,26V204.31A37.86,37.86,0,0,0,96,194Zm130,0H160a37.87,37.87,0,0,0-26,10.32V88a26,26,0,0,1,26-26h66Z" />
    </Svg>
  );
});
