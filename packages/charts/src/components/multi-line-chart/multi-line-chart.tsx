import { StyleSheet } from "react-native";
import { Canvas } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";
import { useTheme } from "@impulse-ui-native/theme";

import { useChartCanvas } from "../../hooks";
import { ChartXValue, MultiLineChartProps } from "../../types";
import { MultiLineChartBody } from "./multi-line-chart-body";

export const MultiLineChart = memo(function MultiLineChart<
  X extends ChartXValue = number,
>(props: MultiLineChartProps<X>) {
  const theme = useTheme();

  const { ref, size } = useChartCanvas();

  return (
    <Canvas ref={ref} style={styles.container}>
      <MultiLineChartBody {...props} size={size} theme={theme} />
    </Canvas>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
