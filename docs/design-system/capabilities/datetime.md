# @impulse-ui-native/datetime: capability guide

Pick a date, time, date-time or range.

## Setup

- ThemeProvider, GestureHandlerRootView and SafeAreaProvider.
- PortalProvider with a stable PortalStore and a mounted PortalsHost; configure Gesture Handler, Reanimated and Worklets.

## Capabilities

- Five convenience pickers; value/defaultValue/onChange.
- Draft selection with Apply/Cancel, Clear, quick options, month/year Selects and nested time fields.

## Boundaries and composition

- Fields default to outlined/neutral. Trigger appearance stays on the trigger; internal month/year/time fields are always outlined/neutral. Tone accents selections and selected quick tags; actions retain their own hierarchy.
- Calendar/range and wheel selection states keep their own state styling. Values are Date/time objects, not arbitrary strings.

Exact contracts: [API reference](../api/datetime.md). Machine facts: [package JSON](datetime.json) or [full catalog](../capabilities.json).

## Recipes

- [filters](../recipes.md#filters)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer           | Range    | Optional |
| -------------- | -------- | -------- |
| `react`        | `>=18`   | No       |
| `react-native` | `>=0.73` | No       |

### DatePicker

Source: `packages/datetime/src/components/date/date-picker.tsx:10`. Direct defaults: `clearable=true`, `tone="neutral"`, `variant="outlined"`, `pickerTone=tone`.

- **valueContract**: Stage a draft in the flyout; Apply commits, Cancel discards. Clear edits the draft.
- **inheritance**: Variant styles the trigger only. Flyout surfaces stay neutral; month/year and time fields always use outlined/neutral; tone accents calendar/wheel selections and selected soft quick-option tags. Nested time fields are outlined/neutral and retain the selection accent in their own flyouts. Apply is filled/primary; Cancel is outlined/primary; Clear uses primary text.

| Prop               | Required | Type / choices                                             |
| ------------------ | -------- | ---------------------------------------------------------- |
| `clearable`        | No       | `boolean \| undefined`                                     |
| `defaultValue`     | No       | `Date \| null \| undefined`                                |
| `disabled`         | No       | `boolean \| undefined`                                     |
| `error`            | No       | `string \| undefined`                                      |
| `label`            | No       | `string \| undefined`                                      |
| `onChange`         | No       | `((value: Date \| null) => void) \| undefined`             |
| `onPressPrefix`    | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPressSuffix`    | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `pickerTone`       | No       | `neutral / primary / secondary`                            |
| `placeholder`      | No       | `string \| undefined`                                      |
| `Prefix`           | No       | `ComponentType \| undefined`                               |
| `PrefixIcon`       | No       | `ComponentType<SvgProps> \| undefined`                     |
| `quickDateOptions` | No       | `QuickDateOption<Date>[] \| undefined`                     |
| `size`             | No       | `large / medium / small`                                   |
| `Suffix`           | No       | `ComponentType \| undefined`                               |
| `SuffixIcon`       | No       | `ComponentType<SvgProps> \| undefined`                     |
| `tone`             | No       | `neutral / primary / secondary`                            |
| `value`            | No       | `Date \| null \| undefined`                                |
| `variant`          | No       | `filled / outlined / soft`                                 |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### DateRangePicker

Source: `packages/datetime/src/components/date/date-range-picker.tsx:10`. Direct defaults: `tone="neutral"`, `variant="outlined"`, `pickerTone=tone`, `clearable=true`.

- **valueContract**: Stage a draft in the flyout; Apply commits, Cancel discards. Clear edits the draft.
- **inheritance**: Variant styles the trigger only. Flyout surfaces stay neutral; month/year and time fields always use outlined/neutral; tone accents calendar/wheel selections and selected soft quick-option tags. Nested time fields are outlined/neutral and retain the selection accent in their own flyouts. Apply is filled/primary; Cancel is outlined/primary; Clear uses primary text.

| Prop               | Required | Type / choices                                             |
| ------------------ | -------- | ---------------------------------------------------------- |
| `clearable`        | No       | `boolean \| undefined`                                     |
| `defaultValue`     | No       | `TimeRange \| null \| undefined`                           |
| `disabled`         | No       | `boolean \| undefined`                                     |
| `error`            | No       | `string \| undefined`                                      |
| `label`            | No       | `string \| undefined`                                      |
| `onChange`         | No       | `((value: TimeRange \| null) => void) \| undefined`        |
| `onPressPrefix`    | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPressSuffix`    | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `pickerTone`       | No       | `neutral / primary / secondary`                            |
| `placeholder`      | No       | `string \| undefined`                                      |
| `Prefix`           | No       | `ComponentType \| undefined`                               |
| `PrefixIcon`       | No       | `ComponentType<SvgProps> \| undefined`                     |
| `quickDateOptions` | No       | `QuickDateOption<TimeRange>[] \| undefined`                |
| `size`             | No       | `large / medium / small`                                   |
| `Suffix`           | No       | `ComponentType \| undefined`                               |
| `SuffixIcon`       | No       | `ComponentType<SvgProps> \| undefined`                     |
| `tone`             | No       | `neutral / primary / secondary`                            |
| `value`            | No       | `TimeRange \| null \| undefined`                           |
| `variant`          | No       | `filled / outlined / soft`                                 |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### DatetimePicker

Source: `packages/datetime/src/components/datetime/datetime-picker.tsx:10`. Direct defaults: `clearable=true`, `tone="neutral"`, `variant="outlined"`, `pickerTone=tone`.

- **valueContract**: Stage a draft in the flyout; Apply commits, Cancel discards. Clear edits the draft.
- **inheritance**: Variant styles the trigger only. Flyout surfaces stay neutral; month/year and time fields always use outlined/neutral; tone accents calendar/wheel selections and selected soft quick-option tags. Nested time fields are outlined/neutral and retain the selection accent in their own flyouts. Apply is filled/primary; Cancel is outlined/primary; Clear uses primary text.

| Prop               | Required | Type / choices                                             |
| ------------------ | -------- | ---------------------------------------------------------- |
| `clearable`        | No       | `boolean \| undefined`                                     |
| `defaultValue`     | No       | `Date \| null \| undefined`                                |
| `disabled`         | No       | `boolean \| undefined`                                     |
| `error`            | No       | `string \| undefined`                                      |
| `label`            | No       | `string \| undefined`                                      |
| `onChange`         | No       | `((value: Date \| null) => void) \| undefined`             |
| `onPressPrefix`    | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPressSuffix`    | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `pickerTone`       | No       | `neutral / primary / secondary`                            |
| `placeholder`      | No       | `string \| undefined`                                      |
| `Prefix`           | No       | `ComponentType \| undefined`                               |
| `PrefixIcon`       | No       | `ComponentType<SvgProps> \| undefined`                     |
| `quickDateOptions` | No       | `QuickDateOption<Date>[] \| undefined`                     |
| `size`             | No       | `large / medium / small`                                   |
| `Suffix`           | No       | `ComponentType \| undefined`                               |
| `SuffixIcon`       | No       | `ComponentType<SvgProps> \| undefined`                     |
| `tone`             | No       | `neutral / primary / secondary`                            |
| `value`            | No       | `Date \| null \| undefined`                                |
| `variant`          | No       | `filled / outlined / soft`                                 |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### DatetimeRangePicker

Source: `packages/datetime/src/components/datetime/datetime-range-picker.tsx:10`. Direct defaults: `clearable=true`, `tone="neutral"`, `variant="outlined"`, `pickerTone=tone`.

- **valueContract**: Stage a draft in the flyout; Apply commits, Cancel discards. Clear edits the draft.
- **inheritance**: Variant styles the trigger only. Flyout surfaces stay neutral; month/year and time fields always use outlined/neutral; tone accents calendar/wheel selections and selected soft quick-option tags. Nested time fields are outlined/neutral and retain the selection accent in their own flyouts. Apply is filled/primary; Cancel is outlined/primary; Clear uses primary text.

| Prop               | Required | Type / choices                                             |
| ------------------ | -------- | ---------------------------------------------------------- |
| `clearable`        | No       | `boolean \| undefined`                                     |
| `defaultValue`     | No       | `TimeRange \| null \| undefined`                           |
| `disabled`         | No       | `boolean \| undefined`                                     |
| `error`            | No       | `string \| undefined`                                      |
| `label`            | No       | `string \| undefined`                                      |
| `onChange`         | No       | `((value: TimeRange \| null) => void) \| undefined`        |
| `onPressPrefix`    | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPressSuffix`    | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `pickerTone`       | No       | `neutral / primary / secondary`                            |
| `placeholder`      | No       | `string \| undefined`                                      |
| `Prefix`           | No       | `ComponentType \| undefined`                               |
| `PrefixIcon`       | No       | `ComponentType<SvgProps> \| undefined`                     |
| `quickDateOptions` | No       | `QuickDateOption<TimeRange>[] \| undefined`                |
| `size`             | No       | `large / medium / small`                                   |
| `Suffix`           | No       | `ComponentType \| undefined`                               |
| `SuffixIcon`       | No       | `ComponentType<SvgProps> \| undefined`                     |
| `tone`             | No       | `neutral / primary / secondary`                            |
| `value`            | No       | `TimeRange \| null \| undefined`                           |
| `variant`          | No       | `filled / outlined / soft`                                 |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

### TimePicker

Source: `packages/datetime/src/components/time/time-picker.tsx:12`. Direct defaults: `tone="neutral"`, `variant="outlined"`, `pickerTone=tone`, `clearable=true`, `PrefixIcon=ClockIcon`.

- **valueContract**: Stage a draft in the flyout; Apply commits, Cancel discards. Clear edits the draft.
- **inheritance**: Variant styles the trigger only. Flyout surfaces stay neutral; month/year and time fields always use outlined/neutral; tone accents calendar/wheel selections and selected soft quick-option tags. Nested time fields are outlined/neutral and retain the selection accent in their own flyouts. Apply is filled/primary; Cancel is outlined/primary; Clear uses primary text.

| Prop            | Required | Type / choices                                             |
| --------------- | -------- | ---------------------------------------------------------- |
| `clearable`     | No       | `boolean \| undefined`                                     |
| `defaultValue`  | No       | `TimePickerValue \| null \| undefined`                     |
| `disabled`      | No       | `boolean \| undefined`                                     |
| `error`         | No       | `string \| undefined`                                      |
| `label`         | No       | `string \| undefined`                                      |
| `onChange`      | No       | `((value: TimePickerValue \| null) => void) \| undefined`  |
| `onPressPrefix` | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `onPressSuffix` | No       | `((event: GestureResponderEvent) => unknown) \| undefined` |
| `pickerTone`    | No       | `neutral / primary / secondary`                            |
| `placeholder`   | No       | `string \| undefined`                                      |
| `Prefix`        | No       | `ComponentType \| undefined`                               |
| `PrefixIcon`    | No       | `ComponentType<SvgProps> \| undefined`                     |
| `size`          | No       | `large / medium / small`                                   |
| `Suffix`        | No       | `ComponentType \| undefined`                               |
| `SuffixIcon`    | No       | `ComponentType<SvgProps> \| undefined`                     |
| `tone`          | No       | `neutral / primary / secondary`                            |
| `value`         | No       | `TimePickerValue \| null \| undefined`                     |
| `variant`       | No       | `filled / outlined / soft`                                 |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `bottom`, `columnGap`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `top`, `width`, `zIndex`. Additional inherited native props: 0. See exact API types for these inherited contracts.

## Public exports

- `addDays` (value)
  - `(date: Date, days: number): Date`
- `applyTime` (value)
  - `(date: Date, time: TimePickerValue \| null): Date`
- `CalendarDayState` (type)
- `createCalendarRange` (value)
  - `(date: Date, previousRange?: TimeRange): TimeRange \| undefined`
- `createInfiniteRange` (value)
  - `(max: number, repeats: number): any[]`
- `DatePicker` (value)
  - `(props: DatetimePickerProps): import("react").ReactNode`
- `DateRangePicker` (value)
  - `(props: DatetimeRangePickerProps): import("react").ReactNode`
- `DatetimePicker` (value)
  - `(props: DatetimePickerProps): import("react").ReactNode`
- `DatetimePickerCommonProps` (type)
- `DatetimePickerFlyoutCommonProps` (type)
- `DatetimePickerProps` (type)
- `DatetimeRangePicker` (value)
  - `(props: DatetimeRangePickerProps): import("react").ReactNode`
- `DatetimeRangePickerProps` (type)
- `endOfDay` (value)
  - `(date: Date): Date`
- `endOfWeek` (value)
  - `(date: Date): Date`
- `formatTimepickerValue` (value)
  - `(value: TimePickerValue): string`
- `getCalendarDayState` (value)
  - `({ date, visible, value, }: GetCalendarDayStateOptions): CalendarDayState`
- `GetCalendarDayStateOptions` (type)
- `getClosestIndexByValue` (value)
  - `(data: number[], value: number, currentIndex: number): number`
- `getDateKey` (value)
  - `(date: Date): string`
- `getDayNames` (value)
  - `(locale?: string, format?: "long" \| "short" \| "narrow"): string[]`
- `getInfiniteRangeInitialIndex` (value)
  - `(max: number, targetValue: number, repeats: number): number`
- `getInitialVisibleDate` (value)
  - `(value?: TimeRange \| null, defaultValue?: TimeRange \| null): Date`
- `getMonthCalendarMatrix` (value)
  - `(year: number, month: number): Date[][]`
- `getMonthNames` (value)
  - `(locale?: string, format?: "long" \| "short" \| "narrow"): string[]`
- `getQuickOptionKey` (value)
  - `(value: Date \| TimeRange): string \| undefined`
- `getYears` (value)
  - `(): number[]`
- `InfiniteRangeItem` (type)
- `isAfterDay` (value)
  - `(left: Date, right: Date): boolean`
- `isBeforeDay` (value)
  - `(left: Date, right: Date): boolean`
- `isDateInMonth` (value)
  - `(date: Date, monthDate: Date): boolean`
- `isDateRange` (value)
  - `(value: unknown): value is TimeRange`
- `isInRange` (value)
  - `(date: Date, rangeStart?: Date \| null, rangeEnd?: Date \| null): boolean`
- `isRangeEnd` (value)
  - `(date: Date, rangeEnd?: Date \| null): boolean`
- `isRangeStart` (value)
  - `(date: Date, rangeStart?: Date \| null): boolean`
- `isSameDay` (value)
  - `(left: Date, right: Date): boolean`
- `isSelected` (value)
  - `(date: Date, selected?: Date \| null, rangeStart?: Date \| null, rangeEnd?: Date \| null): boolean`
- `isTimeRange` (value)
  - `(value: unknown): value is TimeRange`
- `normalizeRange` (value)
  - `(range: TimeRange \| null): TimeRange \| null`
- `PickerColumnType` (type)
- `PickerFlyoutActions` (type)
- `QuickDateOption` (type)
- `RangeSide` (type)
- `startOfDay` (value)
  - `(date: Date): Date`
- `startOfWeek` (value)
  - `(date: Date): Date`
- `TimeFormat` (type)
- `TimePicker` (value)
  - `(props: TimePickerProps): import("react").ReactNode`
- `TimePickerProps` (type)
- `TimePickerValue` (type)
- `TimeRange` (type)
