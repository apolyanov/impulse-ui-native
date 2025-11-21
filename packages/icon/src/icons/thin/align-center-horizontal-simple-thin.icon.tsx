import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AlignCenterHorizontalSimpleThinIcon = memo(
  function AlignCenterHorizontalSimpleThin(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M208,84H132V48a4,4,0,0,0-8,0V84H48A12,12,0,0,0,36,96v64a12,12,0,0,0,12,12h76v36a4,4,0,0,0,8,0V172h76a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84Zm4,76a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z" />
      </Svg>
    );
  }
);
