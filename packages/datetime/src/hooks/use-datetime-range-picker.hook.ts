import { useCallback, useEffect, useId, useState } from "react";

import { useControllableState, useIsOpen } from "@impulse-ui-native/core";

import { RangeSide, TimePickerValue, TimeRange } from "../types";
import {
  applyTime,
  endOfDay,
  getInitialVisibleDate,
  isDateInMonth,
  isSameDay,
  normalizeRange,
  startOfDay,
} from "../utils";

interface UseDatetimeRangePickerStateOptions {
  value?: TimeRange | null;
  defaultValue?: TimeRange | null;
  onChange?: (value: TimeRange | null) => void;
}

export function useDatetimeRangePicker({
  value,
  defaultValue,
  onChange,
}: UseDatetimeRangePickerStateOptions) {
  const [visible, setVisible] = useState<Date>(
    getInitialVisibleDate(value, defaultValue),
  );

  const [tempRange, setTempRange] = useState<TimeRange | null>(
    value ?? defaultValue ?? null,
  );

  const [selected, setSelected] = useControllableState<TimeRange | null>({
    prop: value,
    defaultProp: defaultValue ?? null,
    onChange,
  });

  const id = useId();
  const { isOpen, isClosed, open, close } = useIsOpen();

  const onPressOpen = useCallback(() => {
    setTempRange(selected);
    open();
  }, [open, selected]);

  const syncState = useCallback(() => {
    setTempRange(selected);

    const nextVisible = selected?.start ?? selected?.end;

    if (nextVisible) {
      setVisible(nextVisible);
    }
  }, [selected]);

  const onPressApply = useCallback(() => {
    setSelected(normalizeRange(tempRange));
    close();
  }, [close, tempRange]);

  const onPressCancel = useCallback(() => {
    close();
  }, [close]);

  const onPressCalendarDay = useCallback((date: Date) => {
    setTempRange((prev) => {
      const startDate = startOfDay(date);
      const endDate = endOfDay(date);

      if (!prev?.start || prev.end) {
        return {
          start: startDate,
        };
      }

      if (isSameDay(startDate, prev.start)) {
        return null;
      }

      if (startDate < prev.start) {
        return {
          start: startDate,
          end: endOfDay(prev.start),
        };
      }

      return {
        start: prev.start,
        end: endDate,
      };
    });
  }, []);

  const onChangeStartTime = useCallback(
    (time: TimePickerValue | null) => {
      setTempRange((prev) => {
        const fallbackDate = prev?.start ?? visible;

        return normalizeRange({
          start: applyTime(fallbackDate, time),
          end: prev?.end,
        });
      });
    },
    [visible],
  );

  const onChangeEndTime = useCallback(
    (time: TimePickerValue | null) => {
      setTempRange((prev) => {
        const fallbackDate = prev?.end ?? prev?.start ?? visible;

        return normalizeRange({
          start: prev?.start,
          end: applyTime(fallbackDate, time),
        });
      });
    },
    [visible],
  );

  const onChangeTime = useCallback(
    (side: RangeSide, time: TimePickerValue | null) => {
      if (side === "start") {
        onChangeStartTime(time);
        return;
      }

      onChangeEndTime(time);
    },
    [onChangeEndTime, onChangeStartTime],
  );

  const onPressClear = useCallback(() => {
    setTempRange(null);
  }, []);

  const onPressQuickDateOption = useCallback(
    (optionValue: Date | TimeRange) => {
      if (optionValue instanceof Date) {
        const nextDate = startOfDay(optionValue);

        setTempRange({
          start: nextDate,
        });

        if (!isDateInMonth(nextDate, visible)) {
          setVisible(nextDate);
        }

        return;
      }

      const nextRange = normalizeRange(optionValue);

      setTempRange(nextRange);

      const nextVisible = nextRange?.start ?? nextRange?.end;

      if (nextVisible && !isDateInMonth(nextVisible, visible)) {
        setVisible(nextVisible);
      }
    },
    [visible],
  );

  useEffect(() => {
    if (!isOpen && isClosed) {
      setTempRange(selected);
    }
  }, [isOpen, selected, isClosed]);

  return {
    id,
    isOpen,
    visible,
    tempRange,
    selected,
    setVisible,
    setTempRange,
    setSelected,
    open,
    close,
    onPressOpen,
    onPressApply,
    onPressCancel,
    onPressCalendarDay,
    onChangeTime,
    onChangeStartTime,
    onChangeEndTime,
    onPressClear,
    onPressQuickDateOption,
    syncState,
  };
}
