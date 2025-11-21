import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TabsBoldIcon = memo(function TabsBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M255.49,164.55h0l0-.06a.29.29,0,0,0,0-.09L233.2,90.25A19.87,19.87,0,0,0,214.05,76H204a12,12,0,0,0,0,24h7.07l16.8,56H196.93L177.2,90.25A19.87,19.87,0,0,0,158.05,76H148a12,12,0,0,0,0,24h7.07l16.8,56H140.93L121.2,90.25A19.87,19.87,0,0,0,102.05,76H42A19.87,19.87,0,0,0,22.8,90.25L.55,164.4a.29.29,0,0,0,0,.09l0,.06a5.68,5.68,0,0,0-.16.62A12,12,0,0,0,12,180H244a12,12,0,0,0,11.49-15.45ZM44.93,100H99.07l16.8,56H28.13Z" />
    </Svg>
  );
});
