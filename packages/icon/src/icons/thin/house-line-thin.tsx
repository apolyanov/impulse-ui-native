import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const HouseLineThin = memo(function HouseLineThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M240,212H220V126.34l9.17,9.17a4,4,0,1,0,5.66-5.66L136.49,31.51a12,12,0,0,0-17,0L21.17,129.85a4,4,0,1,0,5.66,5.66L36,126.34V212H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM44,118.34l81.17-81.17a4,4,0,0,1,5.66,0L212,118.34V212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44ZM148,212H108V156h40Z" />
    </Svg>
  );
});
