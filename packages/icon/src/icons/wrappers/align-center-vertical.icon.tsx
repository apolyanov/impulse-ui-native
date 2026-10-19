import { createIcon } from "../../hocs/create-icon.hoc";
import { AlignCenterVerticalBoldIcon } from "../bold/align-center-vertical-bold.icon";
import { AlignCenterVerticalDuotoneIcon } from "../duotone/align-center-vertical-duotone.icon";
import { AlignCenterVerticalFillIcon } from "../fill/align-center-vertical-fill.icon";
import { AlignCenterVerticalLightIcon } from "../light/align-center-vertical-light.icon";
import { AlignCenterVerticalRegularIcon } from "../regular/align-center-vertical-regular.icon";
import { AlignCenterVerticalThinIcon } from "../thin/align-center-vertical-thin.icon";

export const AlignCenterVerticalIcon = createIcon("AlignCenterVertical", {
  bold: AlignCenterVerticalBoldIcon,
  duotone: AlignCenterVerticalDuotoneIcon,
  fill: AlignCenterVerticalFillIcon,
  light: AlignCenterVerticalLightIcon,
  regular: AlignCenterVerticalRegularIcon,
  thin: AlignCenterVerticalThinIcon,
});
