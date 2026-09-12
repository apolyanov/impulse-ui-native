import { StyleSheet } from "react-native";
import { Canvas } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";
import { useTheme } from "@impulse-ui-native/theme";

import { useChartCanvas } from "../../hooks";
import { ChartXValue, LineChartProps } from "../../types";
import { LineChartBody } from "./line-chart-body";

export const LineChart = memo(function LineChart<
  X extends ChartXValue = number,
>(props: LineChartProps<X>) {
  const theme = useTheme();

  const { ref, size } = useChartCanvas();

  return (
    <Canvas ref={ref} style={styles.container}>
      <LineChartBody {...props} size={size} theme={theme} />
    </Canvas>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
