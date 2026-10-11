import { memo, useMemo } from "react";

import { View } from "@impulse-ui-native/primitives";
import { MultiSelect, Select } from "@impulse-ui-native/select";
import { useSpace } from "@impulse-ui-native/theme";

import {
  FlatListExampleItems,
  FlatListExampleTarget,
} from "../flat-list/flat-list.constants";

export const SelectInitialScrollExample = memo(
  function SelectInitialScrollExample() {
    const space = useSpace();
    const options = useMemo(
      () =>
        FlatListExampleItems.map((item) => ({
          value: item.id,
          label: item.label,
        })),
      [],
    );

    return (
      <View padding={space.sm} gap={space.sm}>
        <Select
          label="Selected option near the end"
          options={options}
          defaultValue={String(FlatListExampleTarget)}
        />
        <MultiSelect
          label="First selected option in list order"
          options={options}
          defaultValue={["70", String(FlatListExampleTarget)]}
        />
        <Select
          label="Initial reveal disabled"
          options={options}
          defaultValue={String(FlatListExampleTarget)}
          initialScrollToSelected={false}
        />
      </View>
    );
  },
);
