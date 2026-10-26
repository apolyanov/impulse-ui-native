import { useMemo } from "react";

import { BarChart } from "@impulse-ui-native/charts";
import { Typography, View } from "@impulse-ui-native/primitives";
import { Progress } from "@impulse-ui-native/progress";

export function MetricsRecipe() {
  const data = useMemo(
    () => [
      { x: "Jan", y: 18 },
      { x: "Feb", y: 24 },
      { x: "Mar", y: 16 },
    ],
    [],
  );
  return (
    <View gap={16}>
      <Typography.Title4>Workspace activity</Typography.Title4>
      <View height={220}>
        <BarChart data={data} />
      </View>
      <Typography.Label>Monthly target: 65%</Typography.Label>
      <Progress value={65} tone="primary" />
      <Progress variant="circular" value={65} tone="secondary" />
    </View>
  );
}
