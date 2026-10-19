import { createIcon } from "../../hocs/create-icon.hoc";
import { CalendarXBoldIcon } from "../bold/calendar-x-bold.icon";
import { CalendarXDuotoneIcon } from "../duotone/calendar-x-duotone.icon";
import { CalendarXFillIcon } from "../fill/calendar-x-fill.icon";
import { CalendarXLightIcon } from "../light/calendar-x-light.icon";
import { CalendarXRegularIcon } from "../regular/calendar-x-regular.icon";
import { CalendarXThinIcon } from "../thin/calendar-x-thin.icon";

export const CalendarXIcon = createIcon("CalendarX", {
  bold: CalendarXBoldIcon,
  duotone: CalendarXDuotoneIcon,
  fill: CalendarXFillIcon,
  light: CalendarXLightIcon,
  regular: CalendarXRegularIcon,
  thin: CalendarXThinIcon,
});
