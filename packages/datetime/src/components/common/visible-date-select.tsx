import { memo, useCallback, useMemo } from "react";

import { CalendarDotsIcon } from "@impulse-ui-native/icon";
import { View } from "@impulse-ui-native/primitives";
import { Select, SelectOption } from "@impulse-ui-native/select";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { getMonthNames, getYears } from "../../utils";

interface VisibleDateSelectProps {
  value: Date;
  defaultValue?: Date;
  onChange: (value: Date) => void;
}

export const VisibleDateSelect = memo(function VisibleDateSelect(
  props: VisibleDateSelectProps,
) {
  const tokens = useComponentsTokens();

  const monthOptions = useMemo<SelectOption<number>[]>(() => {
    return getMonthNames().map((month, index) => ({
      label: month,
      value: index,
    }));
  }, []);

  const yearOptions = useMemo<SelectOption<number>[]>(() => {
    return getYears().map((year) => ({
      label: String(year),
      value: year,
    }));
  }, []);

  const onChangeVisibleMonth = useCallback(
    (month: number | undefined) => {
      if (month !== undefined && month !== props.value.getMonth()) {
        const newDate = new Date(props.value);
        newDate.setMonth(month);

        props.onChange(newDate);
      }
    },
    [props.value, props.onChange],
  );

  const onChangeVisibleYear = useCallback(
    (year: number | undefined) => {
      if (year !== undefined && year !== props.value.getFullYear()) {
        const newDate = new Date(props.value);
        newDate.setFullYear(year);

        props.onChange(newDate);
      }
    },
    [props.value, props.onChange],
  );

  return (
    <View flexDirection="row" gap={tokens.datetimePicker.visibleDateSelect.gap}>
      <View flex={1}>
        <Select
          options={monthOptions}
          value={props.value.getMonth()}
          defaultValue={
            props.defaultValue?.getMonth() ?? props.value.getMonth()
          }
          PrefixIcon={CalendarDotsIcon}
          onChange={onChangeVisibleMonth}
          placeholder="Month"
        />
      </View>

      <View flex={1}>
        <Select
          options={yearOptions}
          value={props.value.getFullYear()}
          defaultValue={
            props.defaultValue?.getFullYear() ?? props.value.getFullYear()
          }
          PrefixIcon={CalendarDotsIcon}
          onChange={onChangeVisibleYear}
          placeholder="Year"
        />
      </View>
    </View>
  );
});
