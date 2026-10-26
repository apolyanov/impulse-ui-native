import { useCallback, useEffect, useMemo, useState } from "react";

import type { ComponentTone, FieldVariant } from "@impulse-ui-native/theme";
import { Control, Typography, View } from "@impulse-ui-native/primitives";

import type { TimeRange } from "../../../../datetime/src/types";
import { DateControl } from "../../../../datetime/src/components/common/date-control";
import { DatetimeRangePickerFlyout } from "../../../../datetime/src/components/datetime/datetime-range-picker.flyout";

// Internal design fixture: compare editor hierarchy without changing public defaults.
export function PickerComparisonPreview({
  variant = "outlined",
  tone = "primary",
}: {
  variant?: FieldVariant;
  tone?: ComponentTone;
}) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(() => new Date(2026, 9, 15));
  const [value, setValue] = useState<TimeRange>(() => ({
    start: new Date(2026, 9, 15, 9),
    end: new Date(2026, 9, 18, 17),
  }));
  const quickDateOptions = useMemo(
    () => [
      { label: "Project dates", value },
      {
        label: "Next week",
        value: {
          start: new Date(2026, 9, 19, 9),
          end: new Date(2026, 9, 23, 17),
        },
      },
    ],
    [value],
  );
  const show = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  const clear = useCallback(() => setValue({}), []);
  const selectQuickOption = useCallback((option: Date | TimeRange) => {
    if (!(option instanceof Date)) setValue(option);
  }, []);

  useEffect(() => {
    const timer = setTimeout(show, 500);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <View flex={1} padding={16} gap={12}>
      <Typography.Title5>Consistent editor</Typography.Title5>
      <Typography.Body>
        {variant} / {tone} trigger
      </Typography.Body>
      <DateControl
        label="Project dates"
        variant={variant}
        tone={tone}
        onPress={show}
      >
        <Control.Value>15–18 Oct 2026</Control.Value>
      </DateControl>
      <Typography.Caption>
        Reopen the picker by pressing the field.
      </Typography.Caption>
      <DatetimeRangePickerFlyout
        id="picker-comparison"
        title="Project dates"
        open={open}
        tone={tone}
        value={value}
        visible={visible}
        clearable
        quickDateOptions={quickDateOptions}
        onChangeVisible={setVisible}
        onPressCalendarDay={setVisible}
        onPressQuickDateOption={selectQuickOption}
        onClose={close}
        onPressApply={close}
        onPressCancel={close}
        onPressClear={clear}
      />
    </View>
  );
}
