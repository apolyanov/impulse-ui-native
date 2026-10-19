import { useCallback, useMemo, useState } from "react";

import { useEventCallback } from "@impulse-ui-native/core";

import { TimePickerValue, TimeRange } from "../types";
import { isDateInMonth, isSameDay } from "../utils";

import { usePickerDraft } from "./use-picker-draft.hook";

interface UseDatetimePickerStateOptions {
  value?: Date | null;
  defaultValue?: Date | null;
  onChange?: (value: Date | null) => void;
}

export function useDatetimePicker({
  value,
  defaultValue,
  onChange,
}: UseDatetimePickerStateOptions) {
  const [visible, setVisible] = useState<Date>(value ?? defaultValue ?? new Date());
  const handleCloseSync = useEventCallback((selected: Date | null) => {
    if (selected) {
      setVisible(selected);
    }
  });
  const {
    id,
    isOpen,
    draft: tempDate,
    setDraft: setTempDate,
    selected,
    setSelected,
    open,
    close,
    onPressOpen,
    onPressApply,
    onPressCancel,
    onPressClear,
    syncState,
  } = usePickerDraft<Date>({
    value,
    defaultValue,
    onChange,
    onCloseSync: handleCloseSync,
  });

  const onPressCalendarDay = useCallback((date: Date) => {
    setTempDate((prev) => {
      if (!prev) {
        return date;
      }

      if (isSameDay(date, prev)) {
        return null;
      }

      const nextDate = new Date(date);

      nextDate.setHours(prev.getHours());
      nextDate.setMinutes(prev.getMinutes());
      nextDate.setSeconds(prev.getSeconds());
      nextDate.setMilliseconds(prev.getMilliseconds());

      return nextDate;
    });
  }, []);

  const onChangeTime = useCallback(
    (time: TimePickerValue | null) => {
      setTempDate((prev) => {
        const nextDate = new Date(prev ?? visible);

        nextDate.setHours(time?.hours ?? 0);
        nextDate.setMinutes(time?.minutes ?? 0);
        nextDate.setSeconds(time?.seconds ?? 0);
        nextDate.setMilliseconds(0);

        return nextDate;
      });
    },
    [visible],
  );

  const onPressQuickDateOption = useCallback(
    (optionValue: Date | TimeRange) => {
      if (!(optionValue instanceof Date)) {
        return;
      }

      setTempDate(optionValue);

      if (!isDateInMonth(optionValue, visible)) {
        setVisible(optionValue);
      }
    },
    [visible],
  );

  return useMemo(
    () => ({
      id,
      isOpen,
      visible,
      tempDate,
      selected,
      setVisible,
      setTempDate,
      setSelected,
      open,
      close,
      onPressOpen,
      onPressApply,
      onPressCancel,
      onPressCalendarDay,
      onChangeTime,
      onPressClear,
      onPressQuickDateOption,
      syncState,
    }),
    [
      close,
      id,
      isOpen,
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
      tempDate,
      visible,
    ],
  );
}
