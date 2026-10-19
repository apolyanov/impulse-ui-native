import { createIcon } from "../../hocs/create-icon.hoc";
import { PentagonBoldIcon } from "../bold/pentagon-bold.icon";
import { PentagonDuotoneIcon } from "../duotone/pentagon-duotone.icon";
import { PentagonFillIcon } from "../fill/pentagon-fill.icon";
import { PentagonLightIcon } from "../light/pentagon-light.icon";
import { PentagonRegularIcon } from "../regular/pentagon-regular.icon";
import { PentagonThinIcon } from "../thin/pentagon-thin.icon";

export const PentagonIcon = createIcon("Pentagon", {
  bold: PentagonBoldIcon,
  duotone: PentagonDuotoneIcon,
  fill: PentagonFillIcon,
  light: PentagonLightIcon,
  regular: PentagonRegularIcon,
  thin: PentagonThinIcon,
});
