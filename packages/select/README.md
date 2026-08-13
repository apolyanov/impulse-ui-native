# @impulse-ui-native/select

Single- and multi-value select controls that present their options in a themed flyout bottom sheet.

## Installation

```sh
pnpm add @impulse-ui-native/select
```

The package relies on the theme, layer, flyout, gesture, animation, safe-area, and list infrastructure. The simplest setup is to use `ThemeProvider` and mount one `LayerCenter` at the application root.

## Main exports

- `Select` chooses one primitive value.
- `MultiSelect` chooses an array of primitive values.
- `SelectOption` describes `{ label, value, disabled? }` entries.
- `SelectProps`, `MultiSelectProps`, and the supporting control/flyout types are exported for composition.

## Usage

```tsx
import { LayerCenter } from "@impulse-ui-native/layers";
import { Select } from "@impulse-ui-native/select";

const options = [
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" },
  { label: "Operations", value: "operations", disabled: true },
];

export function DepartmentField() {
  const [value, setValue] = useState<string>();

  return (
    <>
      <Select
        label="Department"
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose a department"
      />
      <LayerCenter />
    </>
  );
}
```

Both controls support controlled `value` and uncontrolled `defaultValue` usage. Values are limited to strings, numbers, `null`, and `undefined`; multi-select stores an array of those values.
