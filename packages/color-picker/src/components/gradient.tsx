import { memo, useId, useMemo } from "react";
import Svg, {
  Defs,
  LinearGradient,
  Pattern,
  Rect,
  Stop,
} from "react-native-svg";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { ColorGradientProps } from "../types/color-gradient.types";
import { parseHexColor, rgbaToHex } from "../utils/color.utils";

export const ColorGradient = memo(function ColorGradient({
  colors,
  checkerboard = false,
  vertical = false,
}: ColorGradientProps) {
  const id = useId().replace(/:/g, "");
  const tokens = useComponentsTokens().colorPicker;
  const stops = useMemo(
    () =>
      colors.map((color) => {
        const rgba = parseHexColor(color);

        return {
          color: rgba ? rgbaToHex({ ...rgba, a: 1 }) : color,
          opacity: rgba?.a ?? 1,
        };
      }),
    [colors],
  );

  const checkerFill = "url(#" + id + "-checker)";
  const gradientFill = "url(#" + id + ")";

  return (
    <Svg width="100%" height="100%">
      <Defs>
        <LinearGradient
          id={id}
          x1="0%"
          y1="0%"
          x2={vertical ? "0%" : "100%"}
          y2={vertical ? "100%" : "0%"}
        >
          {stops.map((stop, index) => {
            const offset = index / Math.max(1, stops.length - 1);

            return (
              <Stop
                key={index}
                offset={offset}
                stopColor={stop.color}
                stopOpacity={stop.opacity}
              />
            );
          })}
        </LinearGradient>
        {checkerboard ? (
          <Pattern
            id={id + "-checker"}
            width={tokens.checkerSize * 2}
            height={tokens.checkerSize * 2}
            patternUnits="userSpaceOnUse"
          >
            <Rect
              width={tokens.checkerSize * 2}
              height={tokens.checkerSize * 2}
              fill={tokens.checkerLightColor}
            />
            <Rect
              width={tokens.checkerSize}
              height={tokens.checkerSize}
              fill={tokens.checkerDarkColor}
            />
            <Rect
              x={tokens.checkerSize}
              y={tokens.checkerSize}
              width={tokens.checkerSize}
              height={tokens.checkerSize}
              fill={tokens.checkerDarkColor}
            />
          </Pattern>
        ) : null}
      </Defs>
      {checkerboard ? (
        <Rect width="100%" height="100%" fill={checkerFill} />
      ) : null}
      <Rect width="100%" height="100%" fill={gradientFill} />
    </Svg>
  );
});
