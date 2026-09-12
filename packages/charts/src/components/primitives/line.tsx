import { useMemo } from "react";
import { DashPathEffect, Path } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import {
  LineDefaultCap,
  LineDefaultColor,
  LineDefaultCurve,
  LineDefaultJoin,
  LineDefaultOpacity,
  LineDefaultWidth,
} from "../../constants";
import { ChartXValue, LineProps } from "../../types";
import { createLinePath } from "../../utils";

export const Line = memo(function Line<X extends ChartXValue = number>(
  props: LineProps<X>,
) {
  const {
    cap = LineDefaultCap,
    color = LineDefaultColor,
    coordinates,
    curve = LineDefaultCurve,
    dash,
    join = LineDefaultJoin,
    opacity = LineDefaultOpacity,
    visible = true,
    width = LineDefaultWidth,
  } = props;

  const path = useMemo(
    () => createLinePath(coordinates, curve),
    [coordinates, curve],
  );

  if (!visible || !path) {
    return null;
  }

  return (
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
  );
});
