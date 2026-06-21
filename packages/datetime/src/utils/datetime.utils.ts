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
