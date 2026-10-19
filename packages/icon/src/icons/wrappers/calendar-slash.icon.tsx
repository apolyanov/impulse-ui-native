import { createIcon } from "../../hocs/create-icon.hoc";
import { CalendarSlashBoldIcon } from "../bold/calendar-slash-bold.icon";
import { CalendarSlashDuotoneIcon } from "../duotone/calendar-slash-duotone.icon";
import { CalendarSlashFillIcon } from "../fill/calendar-slash-fill.icon";
import { CalendarSlashLightIcon } from "../light/calendar-slash-light.icon";
import { CalendarSlashRegularIcon } from "../regular/calendar-slash-regular.icon";
import { CalendarSlashThinIcon } from "../thin/calendar-slash-thin.icon";

export const CalendarSlashIcon = createIcon("CalendarSlash", {
  bold: CalendarSlashBoldIcon,
  duotone: CalendarSlashDuotoneIcon,
  fill: CalendarSlashFillIcon,
  light: CalendarSlashLightIcon,
  regular: CalendarSlashRegularIcon,
  thin: CalendarSlashThinIcon,
});
