import { Fragment, useMemo } from "react";
import { Group } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import type { ChartAxisProps } from "../../types/chart-axis.types";
import { AxisDefaultOpacity } from "../../constants/axis.constants";
import {
  createXAxisLayout,
  createYAxisLayout,
  formatAxisTick,
} from "../../utils/axis.util";
import { normalizeChartNumber } from "../../utils/chart-number.util";
import { resolveChartLabelTokens } from "../../utils/chart-theme.util";
import { ChartStroke } from "./chart-stroke";
import { Label } from "./label";

export const ChartAxis = memo(function ChartAxis<Value>({
  fontManager,
  lineVisible = true,
  options,
  orientation,
  plot,
  region,
  scale,
  theme,
  ticks,
  tickVisible = true,
}: ChartAxisProps<Value>) {
  const tokens = theme.components.charts.axis;
  const typography = resolveChartLabelTokens(theme);
  const line = options?.line;
  const tick = options?.tick;
  const label = options?.label;
  const showTicks = tickVisible && tick?.visible !== false;
  const tickLength = showTicks
    ? normalizeChartNumber(tick?.length, tokens.tickLength)
    : 0;
  const labelGap = normalizeChartNumber(label?.gap, tokens.labelGap);
  const fontSize = normalizeChartNumber(
    label?.fontSize,
    typography.fontSize,
    1,
  );

  const layout = useMemo(
    () =>
      orientation === "horizontal"
        ? createXAxisLayout({
            values: ticks,
            scale,
            plot,
            region,
            tickLength,
            labelGap,
          })
        : createYAxisLayout({
            values: ticks,
            scale,
            plot,
            region,
            tickLength,
            labelGap,
            fontSize,
          }),
    [orientation, ticks, scale, plot, region, tickLength, labelGap, fontSize],
  );

  const showLine = lineVisible && line?.visible !== false;

  return (
    <Group>
      <ChartStroke
        start={layout.line.start}
        end={layout.line.end}
        visible={showLine}
        color={line?.color ?? theme.colors.border.default.value}
        width={line?.width ?? tokens.width}
        opacity={line?.opacity ?? AxisDefaultOpacity}
        dash={line?.dash}
      />
      {layout.ticks.map((entry, index) => (
        <Fragment key={index}>
          <ChartStroke
            start={entry.start}
            end={entry.end}
            visible={showTicks}
            color={tick?.color ?? theme.colors.border.default.value}
            width={tick?.width ?? tokens.width}
            opacity={tick?.opacity ?? AxisDefaultOpacity}
            dash={tick?.dash}
          />
          {label?.visible !== false ? (
            <Label
              text={formatAxisTick(entry.value, options?.format)}
              rect={entry.labelRect}
              horizontalAlign={
                orientation === "horizontal" ? "center" : "right"
              }
              verticalAlign={orientation === "horizontal" ? "top" : "center"}
              color={label?.color}
              fontSize={fontSize}
              fontFamily={label?.fontFamily}
              fontWeight={label?.fontWeight}
              fontManager={fontManager}
              maxLines={label?.maxLines}
              rotation={label?.rotation}
              theme={theme}
              tnum={typeof entry.value === "number"}
            />
          ) : null}
        </Fragment>
      ))}
    </Group>
  );
});
