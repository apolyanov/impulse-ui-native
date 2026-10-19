import { createIcon } from "../../hocs/create-icon.hoc";
import { CalendarMinusBoldIcon } from "../bold/calendar-minus-bold.icon";
import { CalendarMinusDuotoneIcon } from "../duotone/calendar-minus-duotone.icon";
import { CalendarMinusFillIcon } from "../fill/calendar-minus-fill.icon";
import { CalendarMinusLightIcon } from "../light/calendar-minus-light.icon";
import { CalendarMinusRegularIcon } from "../regular/calendar-minus-regular.icon";
import { CalendarMinusThinIcon } from "../thin/calendar-minus-thin.icon";

export const CalendarMinusIcon = createIcon("CalendarMinus", {
  bold: CalendarMinusBoldIcon,
  duotone: CalendarMinusDuotoneIcon,
  fill: CalendarMinusFillIcon,
  light: CalendarMinusLightIcon,
  regular: CalendarMinusRegularIcon,
  thin: CalendarMinusThinIcon,
});
