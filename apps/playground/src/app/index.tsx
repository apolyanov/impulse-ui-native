import { StyleSheet } from "react-native";

import { Test } from "@impulse-ui-native/charts";
import { View } from "@impulse-ui-native/toolkit";

function generateHistoricalData(
  count: number,
  intervalMs: number,
  initialValue = 100,
) {
  const endTimestamp = Date.now();
  let value = initialValue;

  return Array.from({ length: count }, (_, index) => {
    value = Math.max(0, value + (Math.random() - 0.5) * 10);

    return {
      x: endTimestamp - (count - 1 - index) * intervalMs,
      y: Number(value.toFixed(2)),
    };
  });
}

const HOUR_IN_MS = 60 * 60 * 1_000;
const historicalData = generateHistoricalData(24, HOUR_IN_MS);

export default function Index() {
  return (
    <View style={styles.container}>
      <Test data={historicalData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
