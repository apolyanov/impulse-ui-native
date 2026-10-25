# @impulse-ui-native/select

Single- and multi-value select controls that present their options in a themed flyout bottom sheet.

## Installation

```sh
pnpm add @impulse-ui-native/select react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-worklets
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

On each opening, Select reveals its selected option. MultiSelect reveals the first selected option in list order. Lists that fit within the flyout stay at the top so all rows remain visible. Longer lists use native initial scrolling to reveal the opening selection. Options are single-line rows with a fixed `theme.components.select.option.height` (56 by default), also supplied to native `getItemLayout`. Long labels truncate at the end. Selection changes while open do not change the opening target. Set `initialScrollToSelected={false}` to retain the normal starting position.

## Field layout

Select and MultiSelect accept flex, dimension, and spacing props on the outer
field, including its label and error. No extra field wrappers are needed:

```tsx
<View flexDirection="row" gap={space.xs}>
  <Select flex={1} options={options} />
  <Select flex={1} options={options} />
</View>
```

In a column, fields stretch horizontally by default without vertical growth.
For a parent with `alignItems="center"`, use `alignSelf="stretch"` on the field
or set an explicit `width`. No default `flex` is applied.

## Field appearance

Rectangular fields support `variant="outlined" | "soft" | "filled"` and
`tone="neutral" | "primary" | "secondary"`. The default is `outlined` / `neutral`.
Outlined uses a transparent surface with a tone border; soft uses a subtle tone
surface; filled uses the tone fill with its paired foreground. Colors come from
the active theme in both schemes. Error styling overrides the selected tone;
disabled fields use neutral styling and block interaction.

Customize `components.controlContainer.colors[tone][variant][state]`,
`controlInput.colors[tone][variant][state]`, and
`controlAddon.colors[tone][variant][state]` together. These tone-aware maps replace
the previous `variants[variant][state]` maps.

## Default trailing icon

Select and MultiSelect display CaretDown while closed and CaretUp while the
options flyout is open. Icons use `Control.Icon`, inheriting the field's variant,
tone, and disabled/error appearance. Supply `SuffixIcon` to replace the caret or
`Suffix` for custom suffix content, using the same composition model as the date
pickers. A loading indicator takes precedence over the suffix while `loading`.

## Repository palette consistency

The field tone now propagates into flyout selection indicators and MultiSelect
tags. Disabled selected options and disabled tags use neutral unavailable colors;
disabled tags cannot be removed. The default is neutral. Selection indicator
tokens move from select.option.states to select.option.colors[tone].

MultiSelect selected tags use the same tone as the field: soft tags inside filled fields, and filled tags inside outlined/soft fields. Disabled tags use outlined styling and cannot be removed. This separates the selected values from the field surface without changing the shared palettes.
