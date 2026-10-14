import { useMemo } from "react";
import {
  Circle,
  DashPathEffect,
  Group,
  Path,
} from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import {
  LineDefaultCap,
  LineDefaultCurve,
  LineDefaultJoin,
  LineDefaultOpacity,
} from "../../constants";
import { ChartXValue, LineProps } from "../../types";
import { createLinePath } from "../../utils";
import { getIsolatedLineCoordinates } from "../../utils/line-coordinates.util";

export const Line = memo(function Line<X extends ChartXValue = number>(
  props: LineProps<X>,
) {
  const tokens = props.theme.components.charts;

  const {
    cap = LineDefaultCap,
    color = tokens.palette[0],
    coordinates,
    curve = LineDefaultCurve,
    dash,
    join = LineDefaultJoin,
    opacity = LineDefaultOpacity,
    visible = true,
    width = tokens.line.width,
  } = props;

  const path = useMemo(
    () => (visible ? createLinePath(coordinates, curve) : null),
    [coordinates, curve, visible],
  );

  const isolated = useMemo(
    () => (visible ? getIsolatedLineCoordinates(coordinates) : []),
    [coordinates, visible],
  );

  if (!visible) {
    return null;
  }

  return (
    <Group>
      {path ? (
        <Path
          path={path}
          color={color}
          opacity={opacity}
          strokeWidth={width}
          style="stroke"
          strokeCap={cap}
          strokeJoin={join}
        >
          {dash?.length ? <DashPathEffect intervals={[...dash]} /> : null}
        </Path>
      ) : null}
      {isolated.map((coordinate) => (
        <Circle
          key={coordinate.index}
          cx={coordinate.x!}
          cy={coordinate.y!}
          r={Math.max(0, width / 2)}
          color={color}
          opacity={opacity}
        />
      ))}
    </Group>
  );
});
