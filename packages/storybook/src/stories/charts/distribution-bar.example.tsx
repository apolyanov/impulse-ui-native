import { DistributionBar } from "@impulse-ui-native/charts";
import { View } from "@impulse-ui-native/primitives";

export function DistributionBarExample() {
  return (
    <View gap="md" padding="md">
      <DistributionBar
        data={[
          { id: "food", value: 32 },
          { id: "travel", value: 47 },
          { id: "other", value: 18 },
        ]}
      />
      <DistributionBar
        radius={0}
        data={[
          { id: "food", value: 32 },
          { id: "travel", value: 47 },
          { id: "other", value: 18 },
        ]}
      />
      <DistributionBar data={[{ id: "only", value: 100 }]} />
      <DistributionBar data={[]} />
    </View>
  );
}
