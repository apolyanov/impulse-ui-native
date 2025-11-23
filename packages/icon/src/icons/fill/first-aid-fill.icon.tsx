import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FirstAidFillIcon = memo(function FirstAidFill(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232,108v40a16,16,0,0,1-16,16H164v52a16,16,0,0,1-16,16H108a16,16,0,0,1-16-16V164H40a16,16,0,0,1-16-16V108A16,16,0,0,1,40,92H92V40a16,16,0,0,1,16-16h40a16,16,0,0,1,16,16V92h52A16,16,0,0,1,232,108Z" />
    </Svg>
  );
});
