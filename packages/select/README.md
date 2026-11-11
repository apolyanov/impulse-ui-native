# @impulse-ui-native/select

Single- and multi-value select controls that present their options in a themed flyout bottom sheet.

## Installation

```sh
pnpm add @impulse-ui-native/select react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-worklets react-native-keyboard-controller
```

Wrap the application and its Portal/Overlay hosts in `KeyboardProvider` from `react-native-keyboard-controller` and rebuild the native app after installation. The options body uses Flyout.KeyboardAwareView so searchable options stay above the keyboard.

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

Set `searchable` on either control to show a search field above the options:

```tsx
<Select options={options} searchable />
<MultiSelect options={options} searchable />
```

Search matches option labels case-insensitively and ignores surrounding whitespace. Filtering preserves selected values and disabled options. A query with no matches displays “No options found”. An uncontrolled query resets on each opening. Search is disabled by default; the search field uses the standard outlined/neutral Input appearance.

### External search and option loading

Provide `searchValue` and `onSearchChange` to control the query. With `searchValue` supplied (including an empty string), the flyout displays `options` as provided without local filtering. The caller owns fetching, debouncing, request cancellation, and resetting the controlled query.

```tsx
<Select
  searchable
  searchValue={search}
  onSearchChange={setSearch}
  options={results}
  optionsLoading={isFetching}
/>
```

`optionsLoading` shows a spinner above the current results and suppresses the empty result message while fetching. Search and existing results remain interactive. It is independent of the trigger's `loading` prop and also works without `searchable`. Using `onSearchChange` alone observes an uncontrolled query and retains local filtering.

Selection values are preserved when results change, but their labels still come from `options`. Keep selected records in the supplied options if their labels must remain visible; selected-option caching is not built in.

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

## Agent and design reference

Start with the [capability guide](../../docs/design-system/capabilities/select.md) for supported exports, props, defaults, composition rules, setup, and recipes. Use the [component chooser](../../docs/design-system/component-chooser.md) to select a package. These references describe the repository source; verify your installed package version before copying examples.

Opening the options scrolls explicitly to the current selection when `initialScrollToSelected` is enabled. Search changes reset the list position without remounting the options or search input.
