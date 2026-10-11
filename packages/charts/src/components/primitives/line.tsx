import { useMemo } from "react";
import { DashPathEffect, Path } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import {
  LineDefaultCap,
  LineDefaultCurve,
  LineDefaultJoin,
  LineDefaultOpacity,
} from "../../constants";
import { ChartXValue, LineProps } from "../../types";
import { createLinePath } from "../../utils";

export const Line = memo(function Line<X extends ChartXValue = number>(
  props: LineProps<X>,
) {
  const tokens = useComponentsTokens().charts;

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
