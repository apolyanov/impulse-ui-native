import { useMemo } from "react";
import { DashPathEffect, Group, Path } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import { GridDefaultXVisible, GridDefaultYVisible } from "../../constants";
import { ChartXValue, GridProps } from "../../types";
import {
  createHorizontalGridPath,
  createVerticalGridPath,
  resolveGridLineOptions,
} from "../../utils";

export const Grid = memo(function Grid<X extends ChartXValue = number>(
  props: GridProps<X>,
) {
  const { options, plot, theme, xScale, xTicks, yScale, yTicks } = props;

  const xStyle = useMemo(
    () =>
      resolveGridLineOptions(
        options?.x,
        GridDefaultXVisible,
        theme.colors.border.subtle.value,
      ),
    [options?.x, theme.colors.border.subtle.value],
  );

  const yStyle = useMemo(
    () =>
      resolveGridLineOptions(
        options?.y,
        GridDefaultYVisible,
        theme.colors.border.subtle.value,
      ),
    [options?.y, theme.colors.border.subtle.value],
  );

  const xPath = useMemo(
    () => createVerticalGridPath(xTicks, xScale, plot),
    [plot, xScale, xTicks],
  );

  const yPath = useMemo(
    () => createHorizontalGridPath(yTicks, yScale, plot),
    [plot, yScale, yTicks],
  );

  return (
    <Group>
      {xStyle.visible && xPath ? (
        <Path
          path={xPath}
          color={xStyle.color}
          opacity={xStyle.opacity}
          strokeWidth={xStyle.width}
          style="stroke"
        >
          {xStyle.dash?.length ? (
            <DashPathEffect intervals={[...xStyle.dash]} />
          ) : null}
        </Path>
      ) : null}

      {yStyle.visible && yPath ? (
        <Path
          path={yPath}
          color={yStyle.color}
          opacity={yStyle.opacity}
          strokeWidth={yStyle.width}
          style="stroke"
        >
          {yStyle.dash?.length ? (
            <DashPathEffect intervals={[...yStyle.dash]} />
          ) : null}
        </Path>
      ) : null}
    </Group>
  );
});
