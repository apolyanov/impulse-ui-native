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

export const Grid = memo(function Grid<
  X extends ChartXValue = number,
  Y extends ChartXValue = number,
>(props: GridProps<X, Y>) {
  const { options, plot, theme, xScale, xTicks, yScale, yTicks } = props;

  const xStyle = useMemo(
    () =>
      resolveGridLineOptions(
        options?.x,
        GridDefaultXVisible,
        theme.colors.border.subtle.value,
        theme.components.charts.grid.width,
      ),
    [
      options?.x,
      theme.colors.border.subtle.value,
      theme.components.charts.grid.width,
    ],
  );

  const yStyle = useMemo(
    () =>
      resolveGridLineOptions(
        options?.y,
        GridDefaultYVisible,
        theme.colors.border.subtle.value,
        theme.components.charts.grid.width,
      ),
    [
      options?.y,
      theme.colors.border.subtle.value,
      theme.components.charts.grid.width,
    ],
  );

  const xPath = useMemo(
    () =>
      xStyle.visible ? createVerticalGridPath(xTicks, xScale, plot) : null,
    [plot, xScale, xTicks, xStyle.visible],
  );

  const yPath = useMemo(
    () =>
      yStyle.visible ? createHorizontalGridPath(yTicks, yScale, plot) : null,
    [plot, yScale, yTicks, yStyle.visible],
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
