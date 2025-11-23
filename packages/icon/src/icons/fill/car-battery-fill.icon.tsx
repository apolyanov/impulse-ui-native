import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CarBatteryFillIcon = memo(function CarBatteryFill(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,72H208V56a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16V72H112V56A16,16,0,0,0,96,40H64A16,16,0,0,0,48,56V72H32A16,16,0,0,0,16,88v96a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V88A16,16,0,0,0,224,72ZM64,56H96V72H64Zm40,88H72a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Zm80,0h-8v8a8,8,0,0,1-16,0v-8h-8a8,8,0,0,1,0-16h8v-8a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm8-72H160V56h32Z" />
    </Svg>
  );
});
