import { StyleSheet } from "react-native";
import { Canvas } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";
import { useTheme } from "@impulse-ui-native/theme";

import { useChartCanvas } from "../hooks";
import { BarChartProps, ChartXValue } from "../types";
import { BarChartBody } from "./bar-chart-body";

export const BarChart = memo(function BarChart<X extends ChartXValue = string>(
  props: BarChartProps<X>,
) {
  const theme = useTheme();
  const { ref, size } = useChartCanvas();

  return (
    <Canvas ref={ref} style={styles.container}>
      <BarChartBody {...props} size={size} theme={theme} />
    </Canvas>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
