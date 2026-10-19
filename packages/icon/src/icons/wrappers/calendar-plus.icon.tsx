import { createIcon } from "../../hocs/create-icon.hoc";
import { CalendarPlusBoldIcon } from "../bold/calendar-plus-bold.icon";
import { CalendarPlusDuotoneIcon } from "../duotone/calendar-plus-duotone.icon";
import { CalendarPlusFillIcon } from "../fill/calendar-plus-fill.icon";
import { CalendarPlusLightIcon } from "../light/calendar-plus-light.icon";
import { CalendarPlusRegularIcon } from "../regular/calendar-plus-regular.icon";
import { CalendarPlusThinIcon } from "../thin/calendar-plus-thin.icon";

export const CalendarPlusIcon = createIcon("CalendarPlus", {
  bold: CalendarPlusBoldIcon,
  duotone: CalendarPlusDuotoneIcon,
  fill: CalendarPlusFillIcon,
  light: CalendarPlusLightIcon,
  regular: CalendarPlusRegularIcon,
  thin: CalendarPlusThinIcon,
});
