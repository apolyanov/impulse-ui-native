import { createIcon } from "../../hocs/create-icon.hoc";
import { CalendarBoldIcon } from "../bold/calendar-bold.icon";
import { CalendarDuotoneIcon } from "../duotone/calendar-duotone.icon";
import { CalendarFillIcon } from "../fill/calendar-fill.icon";
import { CalendarLightIcon } from "../light/calendar-light.icon";
import { CalendarRegularIcon } from "../regular/calendar-regular.icon";
import { CalendarThinIcon } from "../thin/calendar-thin.icon";

export const CalendarIcon = createIcon("Calendar", {
  bold: CalendarBoldIcon,
  duotone: CalendarDuotoneIcon,
  fill: CalendarFillIcon,
  light: CalendarLightIcon,
  regular: CalendarRegularIcon,
  thin: CalendarThinIcon,
});
