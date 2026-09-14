# @impulse-ui-native/select

Single- and multi-value select controls that present their options in a themed flyout bottom sheet.

## Installation

```sh
pnpm add @impulse-ui-native/select @shopify/flash-list react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-worklets
```

Complete the Gesture Handler, Reanimated, Worklets, and Safe Area Context setup required by your React Native or Expo project. The simplest application setup is to use `ThemeProvider`, wrap the app with `GestureHandlerRootView` and `SafeAreaProvider`, and mount one `PortalsHost` inside a `PortalProvider` at the application root.

## Main exports

- `Select` chooses one primitive value.
- `MultiSelect` chooses an array of primitive values.
- `SelectOption` describes `{ label, value, disabled? }` entries.
- `SelectProps`, `MultiSelectProps`, and the supporting control/flyout types are exported for composition.

## Usage

```tsx
import {
  PortalProvider,
  PortalsHost,
  PortalStore,
} from "@impulse-ui-native/portal";
import { Select } from "@impulse-ui-native/select";

const portalStore = new PortalStore();

const options = [
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" },
  { label: "Operations", value: "operations", disabled: true },
];

export function DepartmentField() {
  const [value, setValue] = useState<string>();

  return (
    <PortalProvider store={portalStore}>
      <Select
        label="Department"
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose a department"
      />
      <PortalsHost />
    </PortalProvider>
  );
}
```

Both controls support controlled `value` and uncontrolled `defaultValue` usage. Values are limited to strings, numbers, `null`, and `undefined`; multi-select stores an array of those values.
