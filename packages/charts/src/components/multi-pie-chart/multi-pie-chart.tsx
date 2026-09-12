import { StyleSheet } from "react-native";
import { Canvas } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import { useChartCanvas } from "../../hooks";
import { MultiPieChartProps } from "../../types";
import { MultiPieChartBody } from "./multi-pie-chart-body";

export const MultiPieChart = memo(function MultiPieChart(
  props: MultiPieChartProps,
) {
  const { ref, size } = useChartCanvas();

  return (
    <Canvas ref={ref} style={styles.container}>
      <MultiPieChartBody {...props} size={size} />
    </Canvas>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
