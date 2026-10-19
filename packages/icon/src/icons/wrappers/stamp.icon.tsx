import { createIcon } from "../../hocs/create-icon.hoc";
import { StampBoldIcon } from "../bold/stamp-bold.icon";
import { StampDuotoneIcon } from "../duotone/stamp-duotone.icon";
import { StampFillIcon } from "../fill/stamp-fill.icon";
import { StampLightIcon } from "../light/stamp-light.icon";
import { StampRegularIcon } from "../regular/stamp-regular.icon";
import { StampThinIcon } from "../thin/stamp-thin.icon";

export const StampIcon = createIcon("Stamp", {
  bold: StampBoldIcon,
  duotone: StampDuotoneIcon,
  fill: StampFillIcon,
  light: StampLightIcon,
  regular: StampRegularIcon,
  thin: StampThinIcon,
});
