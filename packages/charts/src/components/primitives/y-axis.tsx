import { Fragment, useMemo } from "react";
import {
  DashPathEffect,
  Group,
  Line as SkiaLine,
} from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import {
  AxisDefaultLabelGap,
  AxisDefaultOpacity,
  AxisDefaultTickLength,
  AxisDefaultWidth,
} from "../../constants";
import { YAxisProps } from "../../types";
import { createYAxisLayout, formatAxisTick } from "../../utils";
import { Label } from "./label";

export const YAxis = memo(function YAxis(props: YAxisProps) {
  const {
    fontManager,
    lineVisible = true,
    options,
    plot,
    region,
    scale,
    theme,
    ticks,
    tickVisible = true,
  } = props;

  const line = options?.line;
  const tick = options?.tick;
  const label = options?.label;
  const tickLength = tick?.length ?? AxisDefaultTickLength;
  const labelGap = label?.gap ?? AxisDefaultLabelGap;
  const fontSize = label?.fontSize ?? theme.fontSize.xs;

  const layout = useMemo(
    () =>
      createYAxisLayout({
        values: ticks,
        scale,
        plot,
        region,
        tickLength,
        labelGap,
        fontSize,
      }),
    [fontSize, labelGap, plot, region, scale, tickLength, ticks],
  );

  return (
    <Group>
      {lineVisible && line?.visible !== false ? (
        <SkiaLine
          p1={layout.line.start}
          p2={layout.line.end}
          color={line?.color ?? theme.colors.border.default.value}
          opacity={line?.opacity ?? AxisDefaultOpacity}
          strokeWidth={line?.width ?? AxisDefaultWidth}
        >
          {line?.dash?.length ? (
            <DashPathEffect intervals={[...line.dash]} />
          ) : null}
        </SkiaLine>
      ) : null}

      {layout.ticks.map((tick, index) => (
        <Fragment key={`${tick.value}-${index}`}>
          {tickVisible && options?.tick?.visible !== false ? (
            <SkiaLine
              p1={tick.start}
              p2={tick.end}
              color={options?.tick?.color ?? theme.colors.border.default.value}
              opacity={options?.tick?.opacity ?? AxisDefaultOpacity}
              strokeWidth={options?.tick?.width ?? AxisDefaultWidth}
            >
              {options?.tick?.dash?.length ? (
                <DashPathEffect intervals={[...options.tick.dash]} />
              ) : null}
            </SkiaLine>
          ) : null}
          {label?.visible !== false ? (
            <Label
              text={formatAxisTick(tick.value, options?.format)}
              rect={tick.labelRect}
              horizontalAlign="right"
              verticalAlign="center"
              color={label?.color}
              fontSize={fontSize}
              fontFamily={label?.fontFamily}
              fontWeight={label?.fontWeight}
              fontManager={fontManager}
              maxLines={label?.maxLines}
              rotation={label?.rotation}
              theme={theme}
              tnum
            />
          ) : null}
        </Fragment>
      ))}
    </Group>
  );
});
