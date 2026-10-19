import { createIcon } from "../../hocs/create-icon.hoc";
import { AlarmBoldIcon } from "../bold/alarm-bold.icon";
import { AlarmDuotoneIcon } from "../duotone/alarm-duotone.icon";
import { AlarmFillIcon } from "../fill/alarm-fill.icon";
import { AlarmLightIcon } from "../light/alarm-light.icon";
import { AlarmRegularIcon } from "../regular/alarm-regular.icon";
import { AlarmThinIcon } from "../thin/alarm-thin.icon";

export const AlarmIcon = createIcon("Alarm", {
  bold: AlarmBoldIcon,
  duotone: AlarmDuotoneIcon,
  fill: AlarmFillIcon,
  light: AlarmLightIcon,
  regular: AlarmRegularIcon,
  thin: AlarmThinIcon,
});
