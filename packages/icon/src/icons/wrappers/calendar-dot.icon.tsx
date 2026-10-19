import { createIcon } from "../../hocs/create-icon.hoc";
import { CalendarDotBoldIcon } from "../bold/calendar-dot-bold.icon";
import { CalendarDotDuotoneIcon } from "../duotone/calendar-dot-duotone.icon";
import { CalendarDotFillIcon } from "../fill/calendar-dot-fill.icon";
import { CalendarDotLightIcon } from "../light/calendar-dot-light.icon";
import { CalendarDotRegularIcon } from "../regular/calendar-dot-regular.icon";
import { CalendarDotThinIcon } from "../thin/calendar-dot-thin.icon";

export const CalendarDotIcon = createIcon("CalendarDot", {
  bold: CalendarDotBoldIcon,
  duotone: CalendarDotDuotoneIcon,
  fill: CalendarDotFillIcon,
  light: CalendarDotLightIcon,
  regular: CalendarDotRegularIcon,
  thin: CalendarDotThinIcon,
});
