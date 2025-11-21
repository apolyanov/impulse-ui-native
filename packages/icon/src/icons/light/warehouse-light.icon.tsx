import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const WarehouseLightIcon = memo(function WarehouseLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M240,186H230V56.28l11.26-2.41a6,6,0,1,0-2.52-11.74l-224,48a6,6,0,0,0,2.52,11.74L26,100v86H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM38,97.42,218,58.85V186H190V128a6,6,0,0,0-6-6H72a6,6,0,0,0-6,6v58H38ZM178,154H78V134H178ZM78,166H178v20H78Z" />
    </Svg>
  );
});
