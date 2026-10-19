import { createIcon } from "../../hocs/create-icon.hoc";
import { CalendarDotsBoldIcon } from "../bold/calendar-dots-bold.icon";
import { CalendarDotsDuotoneIcon } from "../duotone/calendar-dots-duotone.icon";
import { CalendarDotsFillIcon } from "../fill/calendar-dots-fill.icon";
import { CalendarDotsLightIcon } from "../light/calendar-dots-light.icon";
import { CalendarDotsRegularIcon } from "../regular/calendar-dots-regular.icon";
import { CalendarDotsThinIcon } from "../thin/calendar-dots-thin.icon";

export const CalendarDotsIcon = createIcon("CalendarDots", {
  bold: CalendarDotsBoldIcon,
  duotone: CalendarDotsDuotoneIcon,
  fill: CalendarDotsFillIcon,
  light: CalendarDotsLightIcon,
  regular: CalendarDotsRegularIcon,
  thin: CalendarDotsThinIcon,
});
