import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FloppyDiskBackLightIcon = memo(function FloppyDiskBackLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,34H83.31a13.94,13.94,0,0,0-9.9,4.1L38.1,73.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM86,46h84V80a2,2,0,0,1-2,2H88a2,2,0,0,1-2-2ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V83.31a2,2,0,0,1,.59-1.41L74,54.48V80A14,14,0,0,0,88,94h80a14,14,0,0,0,14-14V46h26a2,2,0,0,1,2,2Zm-82-94a38,38,0,1,0,38,38A38,38,0,0,0,128,114Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,178Z" />
    </Svg>
  );
});
