import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BagBoldIcon = memo(function BagBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,60H179.83A52,52,0,0,0,76.17,60H40A20,20,0,0,0,20,80V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V80A20,20,0,0,0,216,60ZM128,36a28,28,0,0,1,27.71,24H100.29A28,28,0,0,1,128,36Zm84,160H44V84H76V96a12,12,0,0,0,24,0V84h56V96a12,12,0,0,0,24,0V84h32Z" />
    </Svg>
  );
});
