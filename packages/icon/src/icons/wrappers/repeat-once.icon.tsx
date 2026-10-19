import { createIcon } from "../../hocs/create-icon.hoc";
import { RepeatOnceBoldIcon } from "../bold/repeat-once-bold.icon";
import { RepeatOnceDuotoneIcon } from "../duotone/repeat-once-duotone.icon";
import { RepeatOnceFillIcon } from "../fill/repeat-once-fill.icon";
import { RepeatOnceLightIcon } from "../light/repeat-once-light.icon";
import { RepeatOnceRegularIcon } from "../regular/repeat-once-regular.icon";
import { RepeatOnceThinIcon } from "../thin/repeat-once-thin.icon";

export const RepeatOnceIcon = createIcon("RepeatOnce", {
  bold: RepeatOnceBoldIcon,
  duotone: RepeatOnceDuotoneIcon,
  fill: RepeatOnceFillIcon,
  light: RepeatOnceLightIcon,
  regular: RepeatOnceRegularIcon,
  thin: RepeatOnceThinIcon,
});
