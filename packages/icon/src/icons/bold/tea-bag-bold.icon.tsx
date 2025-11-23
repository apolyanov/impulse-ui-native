import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TeaBagBoldIcon = memo(function TeaBagBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,156a12,12,0,0,1-12-12V64A60,60,0,0,0,92,64v4H76.53a20.1,20.1,0,0,0-17.15,9.71L38.85,111.92A20.07,20.07,0,0,0,36,122.22V216a20,20,0,0,0,20,20h96a20,20,0,0,0,20-20V122.22a20,20,0,0,0-2.85-10.29L148.62,77.71A20.1,20.1,0,0,0,131.47,68H116V64a36,36,0,0,1,72,0v80a36,36,0,0,0,36,36,12,12,0,0,0,0-24ZM129.21,92,148,123.32V212H60V123.32L78.79,92H92v44a12,12,0,0,0,24,0V92Z" />
    </Svg>
  );
});
