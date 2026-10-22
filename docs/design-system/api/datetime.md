# @impulse-ui-native/datetime

Local package version: 11.0.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

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

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/datetime/src/components/date/date-picker.tsx

```tsx
import { memo } from "react";

import { Control } from "@impulse-ui-native/primitives";

import { useDatetimePicker } from "../../hooks";
import { DatetimePickerProps } from "../../types";
import { DateControl } from "../common/date-control";
import { DatePickerFlyout } from "./date-picker.flyout";

export const DatePicker = memo(function DatePicker(props: DatetimePickerProps) {
  const {
    value,
    defaultValue,
    clearable = true,
    onChange,
    placeholder,
    quickDateOptions,
    ...rest
  } = props;

  const {
    id,
    isOpen,
    visible,
    tempDate,
    selected,
    setVisible,
    close,
    onPressOpen,
    onPressApply,
    onPressCancel,
    onPressCalendarDay,
    onPressClear,
    onPressQuickDateOption,
    syncState,
  } = useDatetimePicker({ value, defaultValue, onChange });

  return (
    <DateControl {...rest} onPress={onPressOpen}>
      {selected === null ? (
        <Control.Placeholder>{placeholder}</Control.Placeholder>
      ) : null}

      {selected !== null ? (
        <Control.Value>{selected.toDateString()}</Control.Value>
      ) : null}

      <DatePickerFlyout
        id={id}
        open={isOpen}
        title="Date"
        visible={visible}
        value={tempDate}
        clearable={clearable}
        quickDateOptions={quickDateOptions}
        onClose={close}
        onCloseFinished={syncState}
        onPressQuickDateOption={onPressQuickDateOption}
        onChangeVisible={setVisible}
        onPressCalendarDay={onPressCalendarDay}
        onPressApply={onPressApply}
        onPressCancel={onPressCancel}
        onPressClear={onPressClear}
      />
    </DateControl>
  );
});
```

### packages/datetime/src/components/date/date-range-picker.tsx

```tsx
import { memo } from "react";

import { Control } from "@impulse-ui-native/primitives";

import { useDatetimeRangePicker } from "../../hooks";
import { DatetimeRangePickerProps } from "../../types";
import { DateControl } from "../common/date-control";
import { DatePickerFlyout } from "./date-picker.flyout";

export const DateRangePicker = memo(function DateRangePicker(
  props: DatetimeRangePickerProps,
) {
  const {
    value,
    defaultValue,
    onChange,
    placeholder,
    quickDateOptions,
    clearable = true,
    ...rest
  } = props;

  const {
    id,
    isOpen,
    visible,
    tempRange,
    selected,
    setVisible,
    close,
    onPressOpen,
    onPressApply,
    onPressCancel,
    onPressCalendarDay,
    onPressClear,
    onPressQuickDateOption,
    syncState,
  } = useDatetimeRangePicker({ value, defaultValue, onChange });

  return (
    <DateControl {...rest} onPress={onPressOpen}>
      {selected === null ? (
        <Control.Placeholder>{placeholder}</Control.Placeholder>
      ) : null}

      {selected !== null ? (
        <Control.Value>
          {selected.start?.toDateString()} - {selected.end?.toDateString()}
        </Control.Value>
      ) : null}

      <DatePickerFlyout
        id={id}
        open={isOpen}
        title="Date"
        visible={visible}
        value={tempRange}
        clearable={clearable}
        quickDateOptions={quickDateOptions}
        onClose={close}
        onCloseFinished={syncState}
        onPressQuickDateOption={onPressQuickDateOption}
        onChangeVisible={setVisible}
        onPressCalendarDay={onPressCalendarDay}
        onPressApply={onPressApply}
        onPressCancel={onPressCancel}
        onPressClear={onPressClear}
      />
    </DateControl>
  );
});
```

### packages/datetime/src/components/datetime/datetime-picker.tsx

```tsx
import { memo } from "react";

import { Control } from "@impulse-ui-native/primitives";

import { useDatetimePicker } from "../../hooks";
import { DatetimePickerProps } from "../../types";
import { DateControl } from "../common/date-control";
import { DatetimePickerFlyout } from "./datetime-picker.flyout";

export const DatetimePicker = memo(function DatetimePicker(
  props: DatetimePickerProps,
) {
  const {
    value,
    defaultValue,
    clearable = true,
    onChange,
    placeholder,
    quickDateOptions,
    ...rest
  } = props;

  const {
    id,
    isOpen,
    visible,
    tempDate,
    selected,
    setVisible,
    close,
    onPressOpen,
    onPressApply,
    onPressCancel,
    onPressCalendarDay,
    onChangeTime,
    onPressClear,
    onPressQuickDateOption,
    syncState,
  } = useDatetimePicker({ value, defaultValue, onChange });

  return (
    <DateControl {...rest} onPress={onPressOpen}>
      {selected === null ? (
        <Control.Placeholder>{placeholder}</Control.Placeholder>
      ) : null}

      {selected !== null ? (
        <Control.Value>{selected.toLocaleString()}</Control.Value>
      ) : null}

      <DatetimePickerFlyout
        id={id}
        open={isOpen}
        title="Date"
        visible={visible}
        value={tempDate}
        clearable={clearable}
        quickDateOptions={quickDateOptions}
        onClose={close}
        onCloseFinished={syncState}
        onPressQuickDateOption={onPressQuickDateOption}
        onChangeVisible={setVisible}
        onPressCalendarDay={onPressCalendarDay}
        onChangeTime={onChangeTime}
        onPressApply={onPressApply}
        onPressCancel={onPressCancel}
        onPressClear={onPressClear}
      />
    </DateControl>
  );
});
```

### packages/datetime/src/components/datetime/datetime-range-picker.tsx

```tsx
import { memo } from "react";

import { Control } from "@impulse-ui-native/primitives";

import { useDatetimeRangePicker } from "../../hooks";
import { DatetimeRangePickerProps } from "../../types";
import { DateControl } from "../common/date-control";
import { DatetimeRangePickerFlyout } from "./datetime-range-picker.flyout";

export const DatetimeRangePicker = memo(function DatetimeRangePicker(
  props: DatetimeRangePickerProps,
) {
  const {
    value,
    defaultValue,
    clearable = true,
    onChange,
    placeholder,
    quickDateOptions,
    ...rest
  } = props;

  const {
    id,
    isOpen,
    visible,
    tempRange,
    selected,
    setVisible,
    close,
    onPressOpen,
    onPressApply,
    onPressCancel,
    onPressCalendarDay,
    onChangeStartTime,
    onChangeEndTime,
    onPressClear,
    onPressQuickDateOption,
    syncState,
  } = useDatetimeRangePicker({ value, defaultValue, onChange });

  return (
    <DateControl {...rest} onPress={onPressOpen}>
      {selected === null ? (
        <Control.Placeholder>{placeholder}</Control.Placeholder>
      ) : null}

      {selected !== null ? (
        <Control.Value>
          {selected.start?.toLocaleString()} - {selected.end?.toLocaleString()}
        </Control.Value>
      ) : null}

      <DatetimeRangePickerFlyout
        id={id}
        open={isOpen}
        title="Date"
        visible={visible}
        value={tempRange}
        clearable={clearable}
        quickDateOptions={quickDateOptions}
        onClose={close}
        onCloseFinished={syncState}
        onPressQuickDateOption={onPressQuickDateOption}
        onChangeVisible={setVisible}
        onPressCalendarDay={onPressCalendarDay}
        onChangeStartTime={onChangeStartTime}
        onChangeEndTime={onChangeEndTime}
        onPressApply={onPressApply}
        onPressCancel={onPressCancel}
        onPressClear={onPressClear}
      />
    </DateControl>
  );
});
```

### packages/datetime/src/components/index.ts

```tsx
export { DatePicker } from "./date/date-picker";
export { DateRangePicker } from "./date/date-range-picker";

export { DatetimePicker } from "./datetime/datetime-picker";
export { DatetimeRangePicker } from "./datetime/datetime-range-picker";

export { TimePicker } from "./time/time-picker";
```

### packages/datetime/src/components/time/time-picker.tsx

```tsx
import { memo } from "react";

import { ClockIcon } from "@impulse-ui-native/icon/icons/clock";
import { Control } from "@impulse-ui-native/primitives";

import type { TimePickerProps, TimePickerValue } from "../../types";
import { usePickerDraft } from "../../hooks/use-picker-draft.hook";
import { formatTimepickerValue } from "../../utils";
import { DateControl } from "../common/date-control";
import { TimePickerFlyout } from "./time-picker.flyout";

export const TimePicker = memo(function TimePicker({
  value,
  defaultValue,
  placeholder,
  clearable = true,
  onChange,
  PrefixIcon = ClockIcon,
  ...props
}: TimePickerProps) {
  const {
    id,
    isOpen,
    draft,
    selected,
    setDraft,
    close,
    onPressOpen,
    onPressApply,
    onPressCancel,
    onPressClear,
    syncState,
  } = usePickerDraft<TimePickerValue>({ value, defaultValue, onChange });
  const showPlaceholder = selected === null && placeholder;

  return (
    <DateControl {...props} PrefixIcon={PrefixIcon} onPress={onPressOpen}>
      {showPlaceholder ? (
        <Control.Placeholder>{placeholder}</Control.Placeholder>
      ) : null}
      {selected !== null ? (
        <Control.Value>{formatTimepickerValue(selected)}</Control.Value>
      ) : null}
      <TimePickerFlyout
        id={id}
        title="Time"
        open={isOpen}
        value={draft}
        clearable={clearable}
        onClose={close}
        onCloseFinished={syncState}
        onChange={setDraft}
        onPressApply={onPressApply}
        onPressClear={onPressClear}
        onPressCancel={onPressCancel}
      />
    </DateControl>
  );
});
```

### packages/datetime/src/index.ts

```tsx
export * from "./components";
export * from "./types";
export * from "./utils";
```

### packages/datetime/src/types/common.types.ts

```tsx
import { FlyoutProps } from "@impulse-ui-native/flyout";
import {
  ControlComponentCommonProps,
  ControlComponentProps,
  PressableCoreProps,
} from "@impulse-ui-native/primitives";

export interface TimePickerValue {
  hours: number;
  minutes: number;
  seconds: number;
}

export type RangeSide = "start" | "end";

export type TimeFormat = "12h" | "24h";

export type PickerColumnType = "hour" | "minute" | "second";

export interface TimeRange {
  start?: Date;
  end?: Date;
}

export interface InfiniteRangeItem {
  key: string;
  value: number;
  index: number;
}

export interface QuickDateOption<Value> {
  label: string;
  value: Value;
}

export interface PickerFlyoutActions {
  clearable?: boolean;
  onPressApply?: PressableCoreProps["onPress"];
  onPressCancel?: PressableCoreProps["onPress"];
  onPressClear?: PressableCoreProps["onPress"];
}

export interface DatetimePickerCommonProps
  extends Partial<ControlComponentProps>, ControlComponentCommonProps {
  clearable?: boolean;
}

export interface DatetimePickerFlyoutCommonProps
  extends FlyoutProps, PickerFlyoutActions {
  visible: Date;
  quickDateOptions?: QuickDateOption<Date | TimeRange>[];
  onPressQuickDateOption?: (value: Date | TimeRange) => void;
  onChangeVisible: (date: Date) => void;
  onPressCalendarDay: (date: Date) => void;
}
```

### packages/datetime/src/types/datetime-picker.types.ts

```tsx
import { DatetimePickerCommonProps, QuickDateOption } from "./common.types";

export interface DatetimePickerProps extends DatetimePickerCommonProps {
  value?: Date | null;
  defaultValue?: Date | null;
  onChange?: (value: Date | null) => void;
  quickDateOptions?: QuickDateOption<Date>[];
}
```

### packages/datetime/src/types/datetime-range-picker.types.ts

```tsx
import {
  DatetimePickerCommonProps,
  QuickDateOption,
  TimeRange,
} from "./common.types";

export interface DatetimeRangePickerProps extends DatetimePickerCommonProps {
  value?: TimeRange | null;
  defaultValue?: TimeRange | null;
  onChange?: (value: TimeRange | null) => void;
  quickDateOptions?: QuickDateOption<TimeRange>[];
}
```

### packages/datetime/src/types/index.ts

```tsx
export * from "./common.types";
export * from "./datetime-picker.types";
export * from "./datetime-range-picker.types";

export * from "./time-picker.types";
```

### packages/datetime/src/types/time-picker.types.ts

```tsx
import type {
  DatetimePickerCommonProps,
  TimePickerValue,
} from "./common.types";

export interface TimePickerProps extends DatetimePickerCommonProps {
  value?: TimePickerValue | null;
  defaultValue?: TimePickerValue | null;
  onChange?: (value: TimePickerValue | null) => void;
}
```

### packages/datetime/src/utils/calendar-day.utils.ts

```tsx
import { TimeRange } from "../types";
import { startOfDay } from "./datetime.utils";

export interface CalendarDayState {
  isSelected: boolean;
  isRangeStart: boolean;
  isInRange: boolean;
  isRangeEnd: boolean;
  isCurrentMonth: boolean;
}

export interface GetCalendarDayStateOptions {
  date: Date;
  visible: Date;
  value?: Date | TimeRange | null;
}

export function isTimeRange(value: unknown): value is TimeRange {
  return (
    typeof value === "object" &&
    value !== null &&
    !(value instanceof Date) &&
    ("start" in value || "end" in value)
  );
}

export function isSameDay(left: Date, right: Date) {
  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  );
}

export function isDateInMonth(date: Date, monthDate: Date) {
  return (
    date.getFullYear() === monthDate.getFullYear() &&
    date.getMonth() === monthDate.getMonth()
  );
}

export function isBeforeDay(left: Date, right: Date) {
  return startOfDay(left).getTime() < startOfDay(right).getTime();
}

export function isAfterDay(left: Date, right: Date) {
  return startOfDay(left).getTime() > startOfDay(right).getTime();
}

export function isRangeStart(date: Date, rangeStart?: Date | null) {
  if (!rangeStart) {
    return false;
  }

  return isSameDay(date, rangeStart);
}

export function isRangeEnd(date: Date, rangeEnd?: Date | null) {
  if (!rangeEnd) {
    return false;
  }

  return isSameDay(date, rangeEnd);
}

export function isInRange(
  date: Date,
  rangeStart?: Date | null,
  rangeEnd?: Date | null,
) {
  if (!rangeStart || !rangeEnd) {
    return false;
  }

  const currentTime = startOfDay(date).getTime();
  const startTime = startOfDay(rangeStart).getTime();
  const endTime = startOfDay(rangeEnd).getTime();

  return currentTime > startTime && currentTime < endTime;
}

export function isSelected(
  date: Date,
  selected?: Date | null,
  rangeStart?: Date | null,
  rangeEnd?: Date | null,
) {
  if (selected && isSameDay(date, selected)) {
    return true;
  }

  if (rangeStart && isSameDay(date, rangeStart)) {
    return true;
  }

  if (rangeEnd && isSameDay(date, rangeEnd)) {
    return true;
  }

  return false;
}

export function getCalendarDayState({
  date,
  visible,
  value,
}: GetCalendarDayStateOptions): CalendarDayState {
  const selected = value instanceof Date ? value : undefined;
  const range = isTimeRange(value) ? value : undefined;

  const rangeStart = range?.start;
  const rangeEnd = range?.end;

  return {
    isSelected: isSelected(date, selected, rangeStart, rangeEnd),
    isRangeStart: isRangeStart(date, rangeStart),
    isInRange: isInRange(date, rangeStart, rangeEnd),
    isRangeEnd: isRangeEnd(date, rangeEnd),
    isCurrentMonth: isDateInMonth(date, visible),
  };
}

export function createCalendarRange(
  date: Date,
  previousRange?: TimeRange,
): TimeRange | undefined {
  if (!previousRange?.start || previousRange?.end) {
    return {
      start: date,
    };
  }

  if (isSameDay(date, previousRange.start)) {
    return undefined;
  }

  if (isBeforeDay(date, previousRange.start)) {
    return {
      start: date,
      end: previousRange.start,
    };
  }

  return {
    start: previousRange.start,
    end: date,
  };
}

export function getQuickOptionKey(value: Date | TimeRange) {
  if ("start" in value && "end" in value) {
    return `${value.start?.toISOString()}-${value.end?.toISOString()}`;
  }

  if (value instanceof Date) {
    return value.toISOString();
  }
}

export const isDateRange = isTimeRange;

export function getDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
```

### packages/datetime/src/utils/datetime.utils.ts

```tsx
import { TimePickerValue, TimeRange } from "../types";

export function getMonthNames(
  locale = "en-US",
  format: "long" | "short" | "narrow" = "long",
) {
  return Array.from({ length: 12 }, (_, monthIndex) =>
    new Intl.DateTimeFormat(locale, {
      month: format,
    }).format(new Date(2026, monthIndex, 1)),
  );
}

export function getDayNames(
  locale = "en-US",
  format: "long" | "short" | "narrow" = "long",
) {
  const formatter = new Intl.DateTimeFormat(locale, {
    weekday: format,
  });

  const monday = new Date(2024, 0, 1);

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(monday);

    date.setDate(monday.getDate() + index);

    return formatter.format(date);
  });
}

export function getYears() {
  const start = new Date().getFullYear();
  let current = start;

  const years = [];

  while (current >= start - 150) {
    years.push(current--);
  }

  return years;
}

export function getMonthCalendarMatrix(year: number, month: number) {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const firstDayWeekday = firstDayOfMonth.getDay();
  const mondayOffset = firstDayWeekday === 0 ? -6 : 1 - firstDayWeekday;

  const gridStartDate = new Date(firstDayOfMonth);

  gridStartDate.setDate(firstDayOfMonth.getDate() + mondayOffset);

  const lastDayWeekday = lastDayOfMonth.getDay();
  const sundayOffset = lastDayWeekday === 0 ? 0 : 7 - lastDayWeekday;

  const gridEndDate = new Date(lastDayOfMonth);

  gridEndDate.setDate(lastDayOfMonth.getDate() + sundayOffset);

  const weeks: Date[][] = [];
  const currentDate = new Date(gridStartDate);

  while (currentDate <= gridEndDate) {
    const week: Date[] = [];

    for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
      week.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    weeks.push(week);
  }

  return weeks;
}

export function createInfiniteRange(max: number, repeats: number) {
  const half = Math.floor(max / 2);
  const base = Array.from({ length: max }, (_, i) => i);

  return [
    ...base.slice(half),
    ...Array(repeats).fill(base).flat(),
    ...base.slice(0, half),
  ];
}

export function getInfiniteRangeInitialIndex(
  max: number,
  targetValue: number,
  repeats: number,
) {
  const half = Math.floor(max / 2);
  const middleSetIndex = Math.floor(repeats / 2);

  return half + middleSetIndex * max + targetValue;
}

export function getClosestIndexByValue(
  data: number[],
  value: number,
  currentIndex: number,
) {
  let closestIndex = -1;
  let closestDistance = Number.MAX_SAFE_INTEGER;

  for (let index = 0; index < data.length; index += 1) {
    if (data[index] !== value) {
      continue;
    }

    const distance = Math.abs(index - currentIndex);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  }

  return closestIndex;
}

export function formatTimepickerValue(value: TimePickerValue) {
  const hours = String(value.hours).padStart(2, "0");
  const minutes = String(value.minutes).padStart(2, "0");
  const seconds = String(value.seconds).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

export function applyTime(date: Date, time: TimePickerValue | null) {
  const nextDate = new Date(date);

  nextDate.setHours(time?.hours ?? 0);
  nextDate.setMinutes(time?.minutes ?? 0);
  nextDate.setSeconds(time?.seconds ?? 0);
  nextDate.setMilliseconds(0);

  return nextDate;
}

export function getInitialVisibleDate(
  value?: TimeRange | null,
  defaultValue?: TimeRange | null,
) {
  return (
    value?.start ??
    value?.end ??
    defaultValue?.start ??
    defaultValue?.end ??
    new Date()
  );
}

export function normalizeRange(range: TimeRange | null): TimeRange | null {
  if (!range?.start && !range?.end) {
    return null;
  }

  if (range.start && range.end && range.start > range.end) {
    return {
      start: range.end,
      end: range.start,
    };
  }

  return range;
}

export function endOfDay(date: Date) {
  const nextDate = new Date(date);

  nextDate.setHours(23);
  nextDate.setMinutes(59);
  nextDate.setSeconds(59);
  nextDate.setMilliseconds(999);

  return nextDate;
}

export function addDays(date: Date, days: number) {
  const nextDate = new Date(date);

  nextDate.setDate(nextDate.getDate() + days);

  return nextDate;
}

export function startOfWeek(date: Date) {
  const nextDate = startOfDay(date);
  const day = nextDate.getDay();
  const diff = day === 0 ? -6 : 1 - day;

  nextDate.setDate(nextDate.getDate() + diff);

  return nextDate;
}

export function endOfWeek(date: Date) {
  const nextDate = startOfWeek(date);

  nextDate.setDate(nextDate.getDate() + 6);
  nextDate.setHours(23);
  nextDate.setMinutes(59);
  nextDate.setSeconds(59);
  nextDate.setMilliseconds(999);

  return nextDate;
}

export function startOfDay(date: Date) {
  const nextDate = new Date(date);

  nextDate.setHours(0);
  nextDate.setMinutes(0);
  nextDate.setSeconds(0);
  nextDate.setMilliseconds(0);

  return nextDate;
}
```

### packages/datetime/src/utils/index.ts

```tsx
export * from "./datetime.utils";
export * from "./calendar-day.utils";
```
