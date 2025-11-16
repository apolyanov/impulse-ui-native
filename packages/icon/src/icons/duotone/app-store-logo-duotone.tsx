import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AppStoreLogoDuotone = memo(function AppStoreLogoDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M179.64,160H76.36L128,72.62Z" opacity={0.2} />
      <Path d="M64.34,196.07l-9.45,16a8,8,0,1,1-13.78-8.14l9.46-16a8,8,0,1,1,13.77,8.14ZM232,152H184.2l-30.73-52a8,8,0,1,0-13.77,8.14l61.41,103.93a8,8,0,0,0,13.78-8.14L193.66,168H232a8,8,0,0,0,0-16Zm-89.53,0H90.38L158.89,36.07a8,8,0,0,0-13.78-8.14L128,56.89l-17.11-29a8,8,0,1,0-13.78,8.14l21.6,36.55L71.8,152H24a8,8,0,0,0,0,16H142.47a8,8,0,1,0,0-16Z" />
    </Svg>
  );
});
