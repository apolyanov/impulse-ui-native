import type {
  DatetimePickerCommonProps,
  TimePickerValue,
} from "./common.types";

export interface TimePickerProps extends DatetimePickerCommonProps {
  value?: TimePickerValue | null;
  defaultValue?: TimePickerValue | null;
  onChange?: (value: TimePickerValue | null) => void;
}
