import {
  AxisLayout,
  AxisTick,
  ChartRect,
  CreateAxisLayoutProps,
  CreateYAxisLayoutProps,
  LineChartScale,
} from "../types";

export function createAxisTicks<Value>(
  values: readonly Value[],
  scale: LineChartScale<Value>,
): AxisTick<Value>[] {
  return values.reduce<AxisTick<Value>[]>((ticks, value) => {
    const position = scale(value);

    if (position !== undefined && Number.isFinite(position)) {
      ticks.push({ value, position });
    }

    return ticks;
  }, []);
}

export function createXAxisLayout<Value>(
  props: CreateAxisLayoutProps<Value>,
): AxisLayout<Value> {
  const ticks = createAxisTicks(props.values, props.scale);
  const axisY = props.plot.y + props.plot.height;
  const labelOffset = props.tickLength + props.labelGap;

  return {
    line: {
      start: { x: props.plot.x, y: axisY },
      end: { x: props.plot.x + props.plot.width, y: axisY },
    },
    ticks: ticks.map((tick, index) => ({
      ...tick,
      start: { x: tick.position, y: axisY },
      end: { x: tick.position, y: axisY + props.tickLength },
      labelRect: createXAxisLabelRect(ticks, index, props.region, labelOffset),
    })),
  };
}

export function createYAxisLayout(
  props: CreateYAxisLayoutProps,
): AxisLayout<number> {
  const ticks = createAxisTicks(props.values, props.scale);
  const axisX = props.plot.x;
  const labelWidth = props.region.width - props.tickLength - props.labelGap;

  return {
    line: {
      start: { x: axisX, y: props.plot.y },
      end: { x: axisX, y: props.plot.y + props.plot.height },
    },
    ticks: ticks.map((tick) => ({
      ...tick,
      start: { x: axisX - props.tickLength, y: tick.position },
      end: { x: axisX, y: tick.position },
      labelRect: createYAxisLabelRect(
        tick.position,
        props.region,
        labelWidth,
        props.fontSize,
      ),
    })),
  };
}

export function createXAxisLabelRect(
  ticks: readonly AxisTick<unknown>[],
  index: number,
  region: ChartRect,
  offset: number,
): ChartRect {
  const tick = ticks[index]!;
  const previous = ticks[index - 1];
  const next = ticks[index + 1];
  const previousSpacing = previous
    ? Math.abs(tick.position - previous.position)
    : next
      ? Math.abs(next.position - tick.position)
      : region.width;
  const nextSpacing = next
    ? Math.abs(next.position - tick.position)
    : previous
      ? Math.abs(tick.position - previous.position)
      : region.width;
  const width = Math.max(0, Math.min(previousSpacing, nextSpacing));

  return {
    x: tick.position - width / 2,
    y: region.y + offset,
    width,
    height: Math.max(0, region.height - offset),
  };
}

export function createYAxisLabelRect(
  position: number,
  region: ChartRect,
  width: number,
  fontSize: number,
): ChartRect {
  return {
    x: region.x,
    y: position - fontSize,
    width: Math.max(0, width),
    height: fontSize * 2,
  };
}

export function formatAxisTick<Value>(
  value: Value,
  format?: (value: Value) => string,
): string {
  return format ? format(value) : String(value);
}
