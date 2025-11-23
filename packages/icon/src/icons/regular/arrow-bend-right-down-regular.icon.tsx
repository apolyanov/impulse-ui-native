import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowBendRightDownRegularIcon = memo(
  function ArrowBendRightDownRegular(props: SvgProps) {
    return (
      <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
        <Path d="M205.66,181.66l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L144,204.69V128A88.1,88.1,0,0,0,56,40a8,8,0,0,1,0-16A104.11,104.11,0,0,1,160,128v76.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z" />
      </Svg>
    );
  }
);
