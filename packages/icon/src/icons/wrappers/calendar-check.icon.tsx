import { createIcon } from "../../hocs/create-icon.hoc";
import { CalendarCheckBoldIcon } from "../bold/calendar-check-bold.icon";
import { CalendarCheckDuotoneIcon } from "../duotone/calendar-check-duotone.icon";
import { CalendarCheckFillIcon } from "../fill/calendar-check-fill.icon";
import { CalendarCheckLightIcon } from "../light/calendar-check-light.icon";
import { CalendarCheckRegularIcon } from "../regular/calendar-check-regular.icon";
import { CalendarCheckThinIcon } from "../thin/calendar-check-thin.icon";

export const CalendarCheckIcon = createIcon("CalendarCheck", {
  bold: CalendarCheckBoldIcon,
  duotone: CalendarCheckDuotoneIcon,
  fill: CalendarCheckFillIcon,
  light: CalendarCheckLightIcon,
  regular: CalendarCheckRegularIcon,
  thin: CalendarCheckThinIcon,
});
