import { useMemo } from "react";
import { Group, Path } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import {
  PieDefaultColor,
  PieDefaultColors,
  PieDefaultCornerRadius,
  PieDefaultOpacity,
  PieDefaultStrokeWidth,
} from "../../constants";
import { PieProps } from "../../types";
import { createPieSlicePath } from "../../utils";

export const Pie = memo(function Pie(props: PieProps) {
  const {
    colors = PieDefaultColors,
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
          PieDefaultColor,
        coordinate,
        path: createPieSlicePath(coordinate, cornerRadius),
      })),
    [colors, coordinates, cornerRadius],
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
