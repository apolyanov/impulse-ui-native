import { createIcon } from "../../hocs/create-icon.hoc";
import { RewindBoldIcon } from "../bold/rewind-bold.icon";
import { RewindDuotoneIcon } from "../duotone/rewind-duotone.icon";
import { RewindFillIcon } from "../fill/rewind-fill.icon";
import { RewindLightIcon } from "../light/rewind-light.icon";
import { RewindRegularIcon } from "../regular/rewind-regular.icon";
import { RewindThinIcon } from "../thin/rewind-thin.icon";

export const RewindIcon = createIcon("Rewind", {
  bold: RewindBoldIcon,
  duotone: RewindDuotoneIcon,
  fill: RewindFillIcon,
  light: RewindLightIcon,
  regular: RewindRegularIcon,
  thin: RewindThinIcon,
});
