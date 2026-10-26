# @impulse-ui-native/datetime

Token-driven date, time, date-time, and range controls backed by Impulse UI Native flyouts and portals.

## Installation

```sh
pnpm add @impulse-ui-native/datetime react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-worklets
```

Complete the Gesture Handler, Reanimated, Worklets, and Safe Area Context setup required by your React Native or Expo project. Render the controls inside `ThemeProvider`, wrap the app with `GestureHandlerRootView` and `SafeAreaProvider`, and mount one `PortalsHost` inside a `PortalProvider` in the application.

## Main exports

- `DatePicker` selects a calendar date.
- `DateRangePicker` selects a start and end date.
- `DatetimePicker` selects a date with time.
- `DatetimeRangePicker` selects a date-time range.
- `TimePicker` selects hours, minutes, and seconds.
- Types include `TimePickerValue`, `TimeRange`, `TimeFormat`, `QuickDateOption`, and the date-time picker prop contracts.
- Calendar and date utilities cover comparisons, selection state, range construction, calendar matrices, formatting, and date arithmetic.

## Usage

```tsx
import { DatePicker } from "@impulse-ui-native/datetime";

<DatePicker
  label="Start date"
  value={date}
  onChange={setDate}
  clearable
  quickDateOptions={[{ label: "Today", value: new Date() }]}
/>;
```

All picker controls support the shared control props for labels, errors, sizes, variants, placeholders, and addons. Date and range controls support controlled `value` and uncontrolled `defaultValue` modes.

Pickers share draft handling: opening snapshots the committed selection, Apply
commits the draft, Cancel discards it, and the draft resynchronizes after the
close animation. Date/range calculations remain specific to their picker.
The shared field trigger respects disabling for both the trigger and its addons.

## Field layout

All date, date-range, datetime, datetime-range, and time pickers accept flex,
dimension, and spacing props on the outer field. Use `flex={1}` to share row
width without extra wrappers. Columns stretch fields horizontally by default
without vertical growth; use `alignSelf="stretch"` or `width` when the parent
uses a different alignment.

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

## Repository palette consistency

The field tone (default neutral) is explicitly passed through portals into
calendar selections, range fills, month/year selects, quick-date tags, nested time
inputs, selected time rows, Clear, Cancel, and Apply. Calendar selections use the
shared filled palette and ranges use the soft palette. The field variant is inherited by month/year selects, nested time inputs, quick-date tags, and both action buttons across portals. Selected calendar days, date ranges, and time-wheel rows keep their selection-state appearance.
Custom day states move to datetimePicker.day.colors[tone], time rows to
timePicker.column.colors[tone], and clear colors to flyoutActions.colors[tone].

## Agent and design reference

Start with the [capability guide](../../docs/design-system/capabilities/datetime.md) for supported exports, props, defaults, composition rules, setup, and recipes. Use the [component chooser](../../docs/design-system/component-chooser.md) to select a package. These references describe the repository source; verify your installed package version before copying examples.

### Flyout visual hierarchy

`variant` styles the trigger field. Flyout surfaces and month/year fields remain neutral. Nested time fields use outlined/neutral styling; their wheel selections retain the parent selection tone. `tone` accents selected calendar days, time values and selected quick-date shortcuts. Unselected shortcuts are outlined/neutral; selected shortcuts are soft in the accent tone. Apply always uses filled/primary, Cancel outlined/neutral, and Clear neutral text. `pickerTone` can override the selection accent.
