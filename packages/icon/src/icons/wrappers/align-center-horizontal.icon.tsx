import { createIcon } from "../../hocs/create-icon.hoc";
import { AlignCenterHorizontalBoldIcon } from "../bold/align-center-horizontal-bold.icon";
import { AlignCenterHorizontalDuotoneIcon } from "../duotone/align-center-horizontal-duotone.icon";
import { AlignCenterHorizontalFillIcon } from "../fill/align-center-horizontal-fill.icon";
import { AlignCenterHorizontalLightIcon } from "../light/align-center-horizontal-light.icon";
import { AlignCenterHorizontalRegularIcon } from "../regular/align-center-horizontal-regular.icon";
import { AlignCenterHorizontalThinIcon } from "../thin/align-center-horizontal-thin.icon";

export const AlignCenterHorizontalIcon = createIcon("AlignCenterHorizontal", {
  bold: AlignCenterHorizontalBoldIcon,
  duotone: AlignCenterHorizontalDuotoneIcon,
  fill: AlignCenterHorizontalFillIcon,
  light: AlignCenterHorizontalLightIcon,
  regular: AlignCenterHorizontalRegularIcon,
  thin: AlignCenterHorizontalThinIcon,
});
