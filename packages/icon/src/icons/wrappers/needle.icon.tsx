import { createIcon } from "../../hocs/create-icon.hoc";
import { NeedleBoldIcon } from "../bold/needle-bold.icon";
import { NeedleDuotoneIcon } from "../duotone/needle-duotone.icon";
import { NeedleFillIcon } from "../fill/needle-fill.icon";
import { NeedleLightIcon } from "../light/needle-light.icon";
import { NeedleRegularIcon } from "../regular/needle-regular.icon";
import { NeedleThinIcon } from "../thin/needle-thin.icon";

export const NeedleIcon = createIcon("Needle", {
  bold: NeedleBoldIcon,
  duotone: NeedleDuotoneIcon,
  fill: NeedleFillIcon,
  light: NeedleLightIcon,
  regular: NeedleRegularIcon,
  thin: NeedleThinIcon,
});
