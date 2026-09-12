import { StyleSheet } from "react-native";
import { Canvas } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";
import { useTheme } from "@impulse-ui-native/theme";

import { useChartCanvas } from "../hooks";
import { ChartXValue, MultiBarChartProps } from "../types";
import { MultiBarChartBody } from "./multi-bar-chart-body";

export const MultiBarChart = memo(function MultiBarChart<
  X extends ChartXValue = string,
>(props: MultiBarChartProps<X>) {
  const theme = useTheme();
  const { ref, size } = useChartCanvas();

  return (
    <Canvas ref={ref} style={styles.container}>
      <MultiBarChartBody {...props} size={size} theme={theme} />
    </Canvas>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
