import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ShieldPlusLightIcon = memo(function ShieldPlusLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M166,128a6,6,0,0,1-6,6H134v26a6,6,0,0,1-12,0V134H96a6,6,0,0,1,0-12h26V96a6,6,0,0,1,12,0v26h26A6,6,0,0,1,166,128Zm56-72v56c0,51.94-25.12,83.4-46.2,100.64-22.73,18.6-45.27,24.89-46.22,25.15a6,6,0,0,1-3.16,0c-1-.26-23.49-6.55-46.22-25.15C59.12,195.4,34,163.94,34,112V56A14,14,0,0,1,48,42H208A14,14,0,0,1,222,56Zm-12,0a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2v56c0,37.75,13.94,68.39,41.44,91.06A130.83,130.83,0,0,0,128,225.72a131.06,131.06,0,0,0,40.56-22.66C196.06,180.39,210,149.75,210,112Z" />
    </Svg>
  );
});
