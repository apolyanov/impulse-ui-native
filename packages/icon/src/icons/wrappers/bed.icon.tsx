import { createIcon } from "../../hocs/create-icon.hoc";
import { BedBoldIcon } from "../bold/bed-bold.icon";
import { BedDuotoneIcon } from "../duotone/bed-duotone.icon";
import { BedFillIcon } from "../fill/bed-fill.icon";
import { BedLightIcon } from "../light/bed-light.icon";
import { BedRegularIcon } from "../regular/bed-regular.icon";
import { BedThinIcon } from "../thin/bed-thin.icon";

export const BedIcon = createIcon("Bed", {
  bold: BedBoldIcon,
  duotone: BedDuotoneIcon,
  fill: BedFillIcon,
  light: BedLightIcon,
  regular: BedRegularIcon,
  thin: BedThinIcon,
});
