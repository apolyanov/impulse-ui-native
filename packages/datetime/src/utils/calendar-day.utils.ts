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

export function isDateRange(value: unknown): value is TimeRange {
  return (
    typeof value === "object" &&
    value !== null &&
    !(value instanceof Date) &&
    ("start" in value || "end" in value)
  );
}

export function getDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
