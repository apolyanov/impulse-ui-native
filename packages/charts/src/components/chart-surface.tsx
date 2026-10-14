import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import { Canvas, Circle, Group } from "@shopify/react-native-skia";

import type { AppTheme } from "@impulse-ui-native/theme";
import { memo } from "@impulse-ui-native/core";
import { Pressable, View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { ChartSurfaceProps } from "../types/chart-surface.types";
import { useChartGesture } from "../hooks/use-chart-gesture.hook";
import { createChartStrokeClip } from "../utils/chart-layout.util";
import {
  createChartHitIndex,
  getChartSelectedTargets,
} from "../utils/chart-selection.util";
import { ChartLegend } from "./chart-legend";
import { ChartTooltip } from "./chart-tooltip";

export const ChartSurface = memo(function ChartSurface({
  frame,
  children,
  targets,
  legendItems,
}: ChartSurfaceProps) {
  const styles = useThemedStyles(themedStyles);
  const { theme, tokens, canvas, layout, presentation, options } = frame;
  const { interactive = false, tooltip = true, legend, emptyContent } = options;
  const hasPlot = layout.plot.width > 0 && layout.plot.height > 0;
  const selectionRadius = tokens.selection?.radius ?? theme.space.xxs;
  const selectionWidth = tokens.selection?.width ?? theme.borderSize.md;

  const selectionClip = useMemo(
    () =>
      createChartStrokeClip(
        layout.plot,
        selectionRadius * 2 + selectionWidth,
        layout.size,
      ),
    [layout.plot, layout.size, selectionRadius, selectionWidth],
  );

  const index = useMemo(
    () => createChartHitIndex(targets, layout.plot),
    [targets, layout.plot],
  );
  const selected = useMemo(
    () => getChartSelectedTargets(index, presentation.selection),
    [index, presentation.selection],
  );

  const gesture = useChartGesture({
    interactive,
    targets,
    plot: layout.plot,
    selectAt: presentation.selectAt,
    selectedTargets: selected,
    clearSelection: presentation.clearSelection,
  });

  return (
    <View style={styles.container}>
      <View style={styles.canvasContainer} onLayout={canvas.onLayout}>
        <GestureDetector gesture={gesture}>
          <View style={styles.canvas} collapsable={false}>
            <Canvas ref={canvas.ref} style={styles.canvas}>
              {hasPlot ? children : null}
              {hasPlot && selected.length > 0 ? (
                <Group clip={selectionClip}>
                  {selected.map((target) => (
                    <Circle
                      key={
                        (target.selection.seriesId ?? "") +
                        ":" +
                        target.selection.datumIndex
                      }
                      cx={target.x}
                      cy={target.y}
                      r={selectionRadius}
                      color={target.color}
                      style="stroke"
                      strokeWidth={selectionWidth}
                    />
                  ))}
                </Group>
              ) : null}
            </Canvas>
          </View>
        </GestureDetector>
        {hasPlot &&
        targets.length === 0 &&
        emptyContent !== undefined &&
        emptyContent !== null ? (
          <View pointerEvents="none" style={styles.empty}>
            {emptyContent}
          </View>
        ) : null}
        {selected.length > 0 && tooltip !== false ? (
          <View pointerEvents="box-none" style={styles.tooltip}>
            {typeof tooltip === "function" ? (
              tooltip(selected)
            ) : (
              <Pressable onPress={presentation.clearSelection}>
                <ChartTooltip details={selected} />
              </Pressable>
            )}
          </View>
        ) : null}
      </View>
      {legend && legendItems ? (
        <ChartLegend
          items={legendItems}
          hiddenIds={presentation.hiddenIds}
          onToggle={presentation.toggle}
        />
      ) : null}
    </View>
  );
});

function themedStyles(theme: AppTheme) {
  const tooltip = theme.components.charts.tooltip;
  const offset = tooltip?.offset ?? theme.space.xs;

  return StyleSheet.create({
    container: { flex: 1 },
    canvasContainer: { flex: 1 },
    canvas: { flex: 1 },
    empty: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      alignItems: "center",
      justifyContent: "center",
    },
    tooltip: {
      position: "absolute",
      top: offset,
      right: offset,
      maxWidth: tooltip?.maxWidth ?? "90%",
    },
  });
}
