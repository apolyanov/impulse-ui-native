import { useMemo } from "react";
import { Group, Path } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import {
  PieDefaultCornerRadius,
  PieDefaultOpacity,
  PieDefaultStrokeWidth,
} from "../../constants";
import { PieProps } from "../../types";
import { createPieSlicePath } from "../../utils";

export const Pie = memo(function Pie(props: PieProps) {
  const tokens = useComponentsTokens().charts;

  const {
    colors = tokens.palette,
    coordinates,
    cornerRadius = PieDefaultCornerRadius,
    opacity = PieDefaultOpacity,
    strokeColor,
    strokeWidth = PieDefaultStrokeWidth,
    visible = true,
  } = props;

  const slices = useMemo(
    () =>
      coordinates.map((coordinate) => ({
        color:
          coordinate.datum.color ??
          colors[coordinate.index % colors.length] ??
          tokens.palette[0],
        coordinate,
        path: createPieSlicePath(coordinate, cornerRadius),
      })),
    [colors, coordinates, cornerRadius, tokens.palette],
  );

  if (!visible) {
    return null;
  }

  return (
    <Group>
      {slices.map(({ color, coordinate, path }) =>
        path ? (
          <Group
            key={coordinate.datum.id}
            transform={[
              { translateX: coordinate.center.x },
              { translateY: coordinate.center.y },
            ]}
          >
            <Path path={path} color={color} opacity={opacity} />
            {strokeColor && strokeWidth > 0 ? (
              <Path
                path={path}
                color={strokeColor}
                opacity={opacity}
                style="stroke"
                strokeWidth={strokeWidth}
              />
            ) : null}
          </Group>
        ) : null,
      )}
    </Group>
  );
});
