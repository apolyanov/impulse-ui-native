# @impulse-ui-native/datetime

Token-driven date, time, date-time, and range controls backed by Impulse UI Native flyouts and portals.

## Installation

```sh
pnpm add @impulse-ui-native/datetime @shopify/flash-list react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-worklets
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
