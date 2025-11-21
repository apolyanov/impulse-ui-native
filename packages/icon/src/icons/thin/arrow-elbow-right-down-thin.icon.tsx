import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowRightDownThinIcon = memo(
  function ArrowElbowRightDownThin(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M226.83,162.83l-48,48a4,4,0,0,1-5.66,0l-48-48a4,4,0,1,1,5.66-5.66L172,198.34V68H32a4,4,0,0,1,0-8H176a4,4,0,0,1,4,4V198.34l41.17-41.17a4,4,0,0,1,5.66,5.66Z" />
      </Svg>
    );
  }
);
