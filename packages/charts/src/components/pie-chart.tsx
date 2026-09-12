import { StyleSheet } from "react-native";
import { Canvas } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import { useChartCanvas } from "../hooks";
import { PieChartProps } from "../types";
import { PieChartBody } from "./pie-chart-body";

export const PieChart = memo(function PieChart(props: PieChartProps) {
  const { ref, size } = useChartCanvas();

  return (
    <Canvas ref={ref} style={styles.container}>
      <PieChartBody {...props} size={size} />
    </Canvas>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
