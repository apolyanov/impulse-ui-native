import { DatetimePickerCommonProps, QuickDateOption } from "./common.types";

export interface DatetimePickerProps extends DatetimePickerCommonProps {
  value?: Date | null;
  defaultValue?: Date | null;
  onChange?: (value: Date | null) => void;
  quickDateOptions?: QuickDateOption<Date>[];
}
