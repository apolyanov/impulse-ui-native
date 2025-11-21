import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SquareSplitVerticalLightIcon = memo(
  function SquareSplitVerticalLight(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M200,42H56A14,14,0,0,0,42,56V200a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42ZM56,54H200a2,2,0,0,1,2,2v66H54V56A2,2,0,0,1,56,54ZM200,202H56a2,2,0,0,1-2-2V134H202v66A2,2,0,0,1,200,202Z" />
      </Svg>
    );
  }
);
