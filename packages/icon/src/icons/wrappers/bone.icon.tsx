import { createIcon } from "../../hocs/create-icon.hoc";
import { BoneBoldIcon } from "../bold/bone-bold.icon";
import { BoneDuotoneIcon } from "../duotone/bone-duotone.icon";
import { BoneFillIcon } from "../fill/bone-fill.icon";
import { BoneLightIcon } from "../light/bone-light.icon";
import { BoneRegularIcon } from "../regular/bone-regular.icon";
import { BoneThinIcon } from "../thin/bone-thin.icon";

export const BoneIcon = createIcon("Bone", {
  bold: BoneBoldIcon,
  duotone: BoneDuotoneIcon,
  fill: BoneFillIcon,
  light: BoneLightIcon,
  regular: BoneRegularIcon,
  thin: BoneThinIcon,
});
