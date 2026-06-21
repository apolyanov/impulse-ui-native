import { useCallback, useEffect, useId, useState } from "react";

import { useControllableState, useIsOpen } from "@impulse-ui-native/core";

import { TimePickerValue, TimeRange } from "../types";
import { isDateInMonth, isSameDay } from "../utils";

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
  const [visible, setVisible] = useState<Date>(
    value ?? defaultValue ?? new Date(),
  );

  const [tempDate, setTempDate] = useState<Date | null>(
    value ?? defaultValue ?? null,
  );

  const [selected, setSelected] = useControllableState<Date | null>({
    prop: value,
    defaultProp: defaultValue ?? null,
    onChange,
  });

  const id = useId();
  const { isOpen, isClosed, open, close } = useIsOpen();

  const onPressOpen = useCallback(() => {
    setTempDate(selected);
    open();
  }, [open, selected]);

  const syncState = useCallback(() => {
    setTempDate(selected);

    if (selected) {
      setVisible(selected);
    }
  }, [selected]);

  const onPressApply = useCallback(() => {
    setSelected(tempDate);
    close();
  }, [close, tempDate]);

  const onPressCancel = useCallback(() => {
    close();
  }, [close]);

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

  const onPressClear = useCallback(() => {
    setTempDate(null);
  }, []);

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

  useEffect(() => {
    if (!isOpen && isClosed) {
      setTempDate(selected);
    }
  }, [isOpen, selected, isClosed]);

  return {
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
  };
}
