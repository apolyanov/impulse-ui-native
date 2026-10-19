import { useCallback, useMemo, useState } from "react";

import { useEventCallback } from "@impulse-ui-native/core";

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

import { usePickerDraft } from "./use-picker-draft.hook";

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
  const handleCloseSync = useEventCallback((selected: TimeRange | null) => {
    const nextVisible = selected?.start ?? selected?.end;

    if (nextVisible) {
      setVisible(nextVisible);
    }
  });
  const {
    id,
    isOpen,
    draft: tempRange,
    setDraft: setTempRange,
    selected,
    setSelected,
    open,
    close,
    onPressOpen,
    onPressApply,
    onPressCancel,
    onPressClear,
    syncState,
  } = usePickerDraft<TimeRange>({
    value,
    defaultValue,
    onChange,
    onCloseSync: handleCloseSync,
    normalize: normalizeRange,
  });

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

  return useMemo(
    () => ({
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
    }),
    [
      close,
      id,
      isOpen,
      onChangeEndTime,
      onChangeStartTime,
      onChangeTime,
      onPressApply,
      onPressCalendarDay,
      onPressCancel,
      onPressClear,
      onPressOpen,
      onPressQuickDateOption,
      open,
      selected,
      setSelected,
      syncState,
      tempRange,
      visible,
    ],
  );
}
