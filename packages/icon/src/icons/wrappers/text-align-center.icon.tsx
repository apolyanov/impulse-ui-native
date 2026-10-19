import { createIcon } from "../../hocs/create-icon.hoc";
import { TextAlignCenterBoldIcon } from "../bold/text-align-center-bold.icon";
import { TextAlignCenterDuotoneIcon } from "../duotone/text-align-center-duotone.icon";
import { TextAlignCenterFillIcon } from "../fill/text-align-center-fill.icon";
import { TextAlignCenterLightIcon } from "../light/text-align-center-light.icon";
import { TextAlignCenterRegularIcon } from "../regular/text-align-center-regular.icon";
import { TextAlignCenterThinIcon } from "../thin/text-align-center-thin.icon";

export const TextAlignCenterIcon = createIcon("TextAlignCenter", {
  bold: TextAlignCenterBoldIcon,
  duotone: TextAlignCenterDuotoneIcon,
  fill: TextAlignCenterFillIcon,
  light: TextAlignCenterLightIcon,
  regular: TextAlignCenterRegularIcon,
  thin: TextAlignCenterThinIcon,
});
