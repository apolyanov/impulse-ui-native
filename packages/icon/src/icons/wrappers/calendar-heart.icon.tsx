import { createIcon } from "../../hocs/create-icon.hoc";
import { CalendarHeartBoldIcon } from "../bold/calendar-heart-bold.icon";
import { CalendarHeartDuotoneIcon } from "../duotone/calendar-heart-duotone.icon";
import { CalendarHeartFillIcon } from "../fill/calendar-heart-fill.icon";
import { CalendarHeartLightIcon } from "../light/calendar-heart-light.icon";
import { CalendarHeartRegularIcon } from "../regular/calendar-heart-regular.icon";
import { CalendarHeartThinIcon } from "../thin/calendar-heart-thin.icon";

export const CalendarHeartIcon = createIcon("CalendarHeart", {
  bold: CalendarHeartBoldIcon,
  duotone: CalendarHeartDuotoneIcon,
  fill: CalendarHeartFillIcon,
  light: CalendarHeartLightIcon,
  regular: CalendarHeartRegularIcon,
  thin: CalendarHeartThinIcon,
});
