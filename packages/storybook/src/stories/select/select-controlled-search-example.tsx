import { memo, useMemo, useState } from "react";

import { View } from "@impulse-ui-native/primitives";
import { MultiSelect, Select } from "@impulse-ui-native/select";

import { SelectStoryOptions } from "./select.examples";

export const SelectControlledSearchExample = memo(
  function SelectControlledSearchExample() {
    const [search, setSearch] = useState("");

    // The caller supplies results; a backend can match aliases absent from labels.
    const options = useMemo(() => {
      const query = search.trim().toLowerCase();
      return SelectStoryOptions.filter((option) =>
        `${option.label} ${option.value === "engineering" ? "software" : ""}`
          .toLowerCase()
          .includes(query),
      );
    }, [search]);

    return (
      <View gap={16}>
        <Select
          label="External search (try software)"
          searchable
          searchValue={search}
          onSearchChange={setSearch}
          options={options}
        />
        <MultiSelect
          label="Shared external query"
          searchable
          searchValue={search}
          onSearchChange={setSearch}
          options={options}
        />
      </View>
    );
  },
);
