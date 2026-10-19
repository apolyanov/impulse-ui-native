import { createIcon } from "../../hocs/create-icon.hoc";
import { OctagonBoldIcon } from "../bold/octagon-bold.icon";
import { OctagonDuotoneIcon } from "../duotone/octagon-duotone.icon";
import { OctagonFillIcon } from "../fill/octagon-fill.icon";
import { OctagonLightIcon } from "../light/octagon-light.icon";
import { OctagonRegularIcon } from "../regular/octagon-regular.icon";
import { OctagonThinIcon } from "../thin/octagon-thin.icon";

export const OctagonIcon = createIcon("Octagon", {
  bold: OctagonBoldIcon,
  duotone: OctagonDuotoneIcon,
  fill: OctagonFillIcon,
  light: OctagonLightIcon,
  regular: OctagonRegularIcon,
  thin: OctagonThinIcon,
});
