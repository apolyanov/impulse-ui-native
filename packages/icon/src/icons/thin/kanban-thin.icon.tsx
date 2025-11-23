import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const KanbanThinIcon = memo(function KanbanThin(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,52H40a4,4,0,0,0-4,4V208a12,12,0,0,0,12,12H88a12,12,0,0,0,12-12V156h56v20a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V56A4,4,0,0,0,216,52ZM92,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V124H92Zm0-92H44V60H92Zm64,32H100V60h56Zm56,28a4,4,0,0,1-4,4H168a4,4,0,0,1-4-4V124h48Zm0-60H164V60h48Z" />
    </Svg>
  );
});
