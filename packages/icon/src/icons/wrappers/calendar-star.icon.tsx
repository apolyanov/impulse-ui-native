import { createIcon } from "../../hocs/create-icon.hoc";
import { CalendarStarBoldIcon } from "../bold/calendar-star-bold.icon";
import { CalendarStarDuotoneIcon } from "../duotone/calendar-star-duotone.icon";
import { CalendarStarFillIcon } from "../fill/calendar-star-fill.icon";
import { CalendarStarLightIcon } from "../light/calendar-star-light.icon";
import { CalendarStarRegularIcon } from "../regular/calendar-star-regular.icon";
import { CalendarStarThinIcon } from "../thin/calendar-star-thin.icon";

export const CalendarStarIcon = createIcon("CalendarStar", {
  bold: CalendarStarBoldIcon,
  duotone: CalendarStarDuotoneIcon,
  fill: CalendarStarFillIcon,
  light: CalendarStarLightIcon,
  regular: CalendarStarRegularIcon,
  thin: CalendarStarThinIcon,
});
