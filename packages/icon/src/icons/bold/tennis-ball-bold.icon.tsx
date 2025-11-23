import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TennisBallBoldIcon = memo(function TennisBallBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M204.4,51.6a108,108,0,1,0,0,152.8A108.16,108.16,0,0,0,204.4,51.6Zm-135.82,17a83.47,83.47,0,0,1,46.2-23.52,84.09,84.09,0,0,1-69.72,69.72A83.47,83.47,0,0,1,68.58,68.58ZM44.74,139.07a107.27,107.27,0,0,0,63.45-30.88,107.27,107.27,0,0,0,30.88-63.45,83.84,83.84,0,0,1,72.19,72.19,108.11,108.11,0,0,0-94.33,94.32,83.82,83.82,0,0,1-72.19-72.18Zm142.68,48.35a83.53,83.53,0,0,1-46.2,23.52,84.09,84.09,0,0,1,69.72-69.72A83.47,83.47,0,0,1,187.42,187.42Z" />
    </Svg>
  );
});
