import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowLeftDownRegularIcon = memo(
  function ArrowElbowLeftDownRegular(props: SvgProps) {
    return (
      <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
        <Path d="M240,72a8,8,0,0,1-8,8H96V196.69l34.34-34.35a8,8,0,0,1,11.32,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L80,196.69V72a8,8,0,0,1,8-8H232A8,8,0,0,1,240,72Z" />
      </Svg>
    );
  }
);
