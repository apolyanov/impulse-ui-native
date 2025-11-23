import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MagnifyingGlassMinusThinIcon = memo(
  function MagnifyingGlassMinusThin(props: SvgProps) {
    return (
      <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
        <Path d="M148,112a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h64A4,4,0,0,1,148,112Zm78.83,114.83a4,4,0,0,1-5.66,0l-52.7-52.7a84.1,84.1,0,1,1,5.66-5.66l52.7,52.7A4,4,0,0,1,226.83,226.83ZM112,188a76,76,0,1,0-76-76A76.08,76.08,0,0,0,112,188Z" />
      </Svg>
    );
  }
);
