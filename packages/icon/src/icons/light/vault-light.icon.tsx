import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const VaultLightIcon = memo(function VaultLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,42H40A14,14,0,0,0,26,56V192a14,14,0,0,0,14,14H58v18a6,6,0,0,0,12,0V206H186v18a6,6,0,0,0,12,0V206h18a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm0,152H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2v66H197.6a46,46,0,1,0,0,12H218v58A2,2,0,0,1,216,194Zm-51.37-72a14,14,0,1,0,0,12h20.83a34,34,0,1,1,0-12Z" />
    </Svg>
  );
});
