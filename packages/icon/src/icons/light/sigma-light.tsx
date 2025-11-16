import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SigmaLight = memo(function SigmaLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M186,72V54H76.48l56.21,70.25a6,6,0,0,1,0,7.5L76.48,202H186V184a6,6,0,0,1,12,0v24a6,6,0,0,1-6,6H64a6,6,0,0,1-4.69-9.75l61-76.25-61-76.25A6,6,0,0,1,64,42H192a6,6,0,0,1,6,6V72a6,6,0,0,1-12,0Z" />
    </Svg>
  );
});
