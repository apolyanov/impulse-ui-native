import { useMemo, useState } from "react";

import { DateRangePicker } from "@impulse-ui-native/datetime";
import { Typography, View } from "@impulse-ui-native/primitives";
import { SegmentedControl } from "@impulse-ui-native/segmented-control";
import { MultiSelect, Select } from "@impulse-ui-native/select";
import { RangeSlider } from "@impulse-ui-native/slider";

export function FiltersRecipe() {
  const [period, setPeriod] = useState("month");
  const options = useMemo(
    () => [
      { label: "Design", value: "design" },
      { label: "Engineering", value: "engineering" },
    ],
    [],
  );

  return (
    <View gap={16}>
      <Typography.Title4>Filter activity</Typography.Title4>
      <SegmentedControl.Root value={period} onValueChange={setPeriod}>
        <SegmentedControl.Item value="week">Week</SegmentedControl.Item>
        <SegmentedControl.Item value="month">Month</SegmentedControl.Item>
      </SegmentedControl.Root>
      <Select
        options={options}
        label="Department"
        placeholder="Any department"
      />
      <MultiSelect options={options} defaultValue={["design"]} label="Teams" />
      <DateRangePicker label="Date range" placeholder="Choose dates" />
      <Typography.Label>Budget</Typography.Label>
      <RangeSlider
        min={0}
        max={100}
        step={5}
        defaultValue={[20, 80]}
        showMinMax
      />
    </View>
  );
}
