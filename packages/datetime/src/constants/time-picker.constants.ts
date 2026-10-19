import type { TimePickerValue } from "../types";
import { createInfiniteRange } from "../utils/datetime.utils";

export const DefaultTimePickerValue: TimePickerValue = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export const TimePickerRangeRepeats = 4;
export const HourValues = createInfiniteRange(24, TimePickerRangeRepeats);
export const MinuteSecondValues = createInfiniteRange(60, TimePickerRangeRepeats);
