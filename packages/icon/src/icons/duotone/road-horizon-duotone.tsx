import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const RoadHorizonDuotone = memo(function RoadHorizonDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232,192H24L96,64h64Z" opacity={0.2} />
      <Path d="M235.92,199A8,8,0,0,1,225,195.92L155.32,72H136v8a8,8,0,0,1-16,0V72H100.68L31,195.92A8,8,0,0,1,17,188.08L82.32,72H24a8,8,0,0,1,0-16H232a8,8,0,0,1,0,16H173.68L239,188.08A8,8,0,0,1,235.92,199ZM128,112a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V120A8,8,0,0,0,128,112Zm0,56a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V176A8,8,0,0,0,128,168Z" />
    </Svg>
  );
});
