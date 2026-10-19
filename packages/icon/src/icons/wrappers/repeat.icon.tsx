import { createIcon } from "../../hocs/create-icon.hoc";
import { RepeatBoldIcon } from "../bold/repeat-bold.icon";
import { RepeatDuotoneIcon } from "../duotone/repeat-duotone.icon";
import { RepeatFillIcon } from "../fill/repeat-fill.icon";
import { RepeatLightIcon } from "../light/repeat-light.icon";
import { RepeatRegularIcon } from "../regular/repeat-regular.icon";
import { RepeatThinIcon } from "../thin/repeat-thin.icon";

export const RepeatIcon = createIcon("Repeat", {
  bold: RepeatBoldIcon,
  duotone: RepeatDuotoneIcon,
  fill: RepeatFillIcon,
  light: RepeatLightIcon,
  regular: RepeatRegularIcon,
  thin: RepeatThinIcon,
});
