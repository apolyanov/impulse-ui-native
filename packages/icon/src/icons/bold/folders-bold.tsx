import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FoldersBold = memo(function FoldersBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M228,56H160L133.33,36a20.12,20.12,0,0,0-12-4H76A20,20,0,0,0,56,52V72H36A20,20,0,0,0,16,92V204a20,20,0,0,0,20,20H188.89A19.13,19.13,0,0,0,208,204.89V184h20.89A19.13,19.13,0,0,0,248,164.89V76A20,20,0,0,0,228,56ZM184,200H40V96H80l28.8,21.6A12,12,0,0,0,116,120h68Zm40-40H208V116a20,20,0,0,0-20-20H120L93.33,76a20.12,20.12,0,0,0-12-4H80V56h40l28.8,21.6A12,12,0,0,0,156,80h68Z" />
    </Svg>
  );
});
