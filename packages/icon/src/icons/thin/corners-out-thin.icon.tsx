import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CornersOutThinIcon = memo(function CornersOutThin(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M212,48V88a4,4,0,0,1-8,0V52H168a4,4,0,0,1,0-8h40A4,4,0,0,1,212,48ZM88,204H52V168a4,4,0,0,0-8,0v40a4,4,0,0,0,4,4H88a4,4,0,0,0,0-8Zm120-40a4,4,0,0,0-4,4v36H168a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V168A4,4,0,0,0,208,164ZM88,44H48a4,4,0,0,0-4,4V88a4,4,0,0,0,8,0V52H88a4,4,0,0,0,0-8Z" />
    </Svg>
  );
});
