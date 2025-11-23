import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SquareSplitVerticalFillIcon = memo(
  function SquareSplitVerticalFill(props: SvgProps) {
    return (
      <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
        <Path d="M216,56v60a4,4,0,0,1-4,4H44a4,4,0,0,1-4-4V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Zm-4,80H44a4,4,0,0,0-4,4v60a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V140A4,4,0,0,0,212,136Z" />
      </Svg>
    );
  }
);
