import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SubtractSquareRegularIcon = memo(function SubtractSquareRegular(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,160V96a8,8,0,0,0-8-8H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V160a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V160Zm-60.69,48-40-40h33.38l40,40ZM168,156.69V123.31l40,40v33.38Zm40-16L171.31,104H208ZM48,48H152v56h0v48H48Zm56,123.31L140.69,208H104Z" />
    </Svg>
  );
});
