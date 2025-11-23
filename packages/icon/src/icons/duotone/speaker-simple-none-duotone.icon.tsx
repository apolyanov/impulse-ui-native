import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SpeakerSimpleNoneDuotoneIcon = memo(
  function SpeakerSimpleNoneDuotone(props: SvgProps) {
    return (
      <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
        <Path
          d="M160,32V224L88,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H88Z"
          opacity={0.2}
        />
        <Path d="M163.51,24.81a8,8,0,0,0-8.42.88L85.25,80H40A16,16,0,0,0,24,96v64a16,16,0,0,0,16,16H85.25l69.84,54.31A8,8,0,0,0,168,224V32A8,8,0,0,0,163.51,24.81ZM152,207.64,92.91,161.69A7.94,7.94,0,0,0,88,160H40V96H88a7.94,7.94,0,0,0,4.91-1.69L152,48.36Z" />
      </Svg>
    );
  }
);
