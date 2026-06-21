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
