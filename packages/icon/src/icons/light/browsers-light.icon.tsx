import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BrowsersLightIcon = memo(function BrowsersLight(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,42H72A14,14,0,0,0,58,56V74H40A14,14,0,0,0,26,88V200a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V182h18a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,86H184a2,2,0,0,1,2,2v18H38V88A2,2,0,0,1,40,86ZM186,200a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V118H186Zm32-32a2,2,0,0,1-2,2H198V88a14,14,0,0,0-14-14H70V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Z" />
    </Svg>
  );
});
