import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CurrencyDollarSimpleThinIcon = memo(
  function CurrencyDollarSimpleThin(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M196,168a44.05,44.05,0,0,1-44,44H132v20a4,4,0,0,1-8,0V212H104a44.05,44.05,0,0,1-44-44,4,4,0,0,1,8,0,36,36,0,0,0,36,36h48a36,36,0,0,0,0-72H112a44,44,0,0,1,0-88h12V24a4,4,0,0,1,8,0V44h12a44.05,44.05,0,0,1,44,44,4,4,0,0,1-8,0,36,36,0,0,0-36-36H112a36,36,0,0,0,0,72h40A44.05,44.05,0,0,1,196,168Z" />
      </Svg>
    );
  }
);
