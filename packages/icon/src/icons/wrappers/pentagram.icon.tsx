import { createIcon } from "../../hocs/create-icon.hoc";
import { PentagramBoldIcon } from "../bold/pentagram-bold.icon";
import { PentagramDuotoneIcon } from "../duotone/pentagram-duotone.icon";
import { PentagramFillIcon } from "../fill/pentagram-fill.icon";
import { PentagramLightIcon } from "../light/pentagram-light.icon";
import { PentagramRegularIcon } from "../regular/pentagram-regular.icon";
import { PentagramThinIcon } from "../thin/pentagram-thin.icon";

export const PentagramIcon = createIcon("Pentagram", {
  bold: PentagramBoldIcon,
  duotone: PentagramDuotoneIcon,
  fill: PentagramFillIcon,
  light: PentagramLightIcon,
  regular: PentagramRegularIcon,
  thin: PentagramThinIcon,
});
