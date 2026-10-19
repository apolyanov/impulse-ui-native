import { createIcon } from "../../hocs/create-icon.hoc";
import { PhonePauseBoldIcon } from "../bold/phone-pause-bold.icon";
import { PhonePauseDuotoneIcon } from "../duotone/phone-pause-duotone.icon";
import { PhonePauseFillIcon } from "../fill/phone-pause-fill.icon";
import { PhonePauseLightIcon } from "../light/phone-pause-light.icon";
import { PhonePauseRegularIcon } from "../regular/phone-pause-regular.icon";
import { PhonePauseThinIcon } from "../thin/phone-pause-thin.icon";

export const PhonePauseIcon = createIcon("PhonePause", {
  bold: PhonePauseBoldIcon,
  duotone: PhonePauseDuotoneIcon,
  fill: PhonePauseFillIcon,
  light: PhonePauseLightIcon,
  regular: PhonePauseRegularIcon,
  thin: PhonePauseThinIcon,
});
