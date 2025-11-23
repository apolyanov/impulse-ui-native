import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BedThinIcon = memo(function BedThin(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,76H28V48a4,4,0,0,0-8,0V208a4,4,0,0,0,8,0V172H244v36a4,4,0,0,0,8,0V112A36,36,0,0,0,216,76ZM28,84h80v80H28Zm88,80V84H216a28,28,0,0,1,28,28v52Z" />
    </Svg>
  );
});
