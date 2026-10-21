import { memo } from "react";

import { DatePicker, TimePicker } from "@impulse-ui-native/datetime";
import { Input, Textarea } from "@impulse-ui-native/input";
import { Typography, View } from "@impulse-ui-native/primitives";
import { MultiSelect, Select } from "@impulse-ui-native/select";
import { useTheme } from "@impulse-ui-native/theme";

import { SelectStoryOptions } from "./select.examples";

export const SelectLayoutExample = memo(function SelectLayoutExample() {
  const { space } = useTheme();

  return (
    <View gap={space.sm}>
      <Typography.Label>
        Columns stretch without vertical growth
      </Typography.Label>
      <Select label="Department" options={SelectStoryOptions} />
      <Input label="Name" placeholder="Enter a name" />
      <Typography.Label>Equal widths without field wrappers</Typography.Label>
      <View flexDirection="row" gap={space.xs}>
        <Select flex={1} label="First" options={SelectStoryOptions} />
        <Select flex={1} label="Second" options={SelectStoryOptions} />
      </View>
      <Typography.Label>Mixed controls and unequal widths</Typography.Label>
      <View flexDirection="row" gap={space.xs}>
        <Input flex={1} label="Name" error="Required" />
        <MultiSelect
          flex={2}
          label="Departments"
          options={SelectStoryOptions}
        />
      </View>
      <View flexDirection="row" gap={space.xs}>
        <DatePicker flex={1} label="Date" />
        <TimePicker flex={1} label="Time" />
      </View>
      <Textarea label="Notes" placeholder="Additional details" />
      <View alignItems="center" gap={space.xs}>
        <Select width={160} label="Fixed width" options={SelectStoryOptions} />
        <Select
          alignSelf="stretch"
          label="Explicit stretch"
          options={SelectStoryOptions}
        />
      </View>
    </View>
  );
});
