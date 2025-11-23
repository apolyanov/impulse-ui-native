import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChartBarHorizontalLightIcon = memo(
  function ChartBarHorizontalLight(props: SvgProps) {
    return (
      <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
        <Path d="M224,98H182V56a6,6,0,0,0-6-6H54V40a6,6,0,0,0-12,0V216a6,6,0,0,0,12,0V206h90a6,6,0,0,0,6-6V158h74a6,6,0,0,0,6-6V104A6,6,0,0,0,224,98ZM170,62V98H54V62ZM138,194H54V158h84Zm80-48H54V110H218Z" />
      </Svg>
    );
  }
);
