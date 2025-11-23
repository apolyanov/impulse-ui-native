import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowRightDownFillIcon = memo(
  function ArrowElbowRightDownFill(props: SvgProps) {
    return (
      <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
        <Path d="M229.66,165.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,128,152h40V72H32a8,8,0,0,1,0-16H176a8,8,0,0,1,8,8v88h40a8,8,0,0,1,5.66,13.66Z" />
      </Svg>
    );
  }
);
