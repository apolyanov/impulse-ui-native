import { createIcon } from "../../hocs/create-icon.hoc";
import { BabyBoldIcon } from "../bold/baby-bold.icon";
import { BabyDuotoneIcon } from "../duotone/baby-duotone.icon";
import { BabyFillIcon } from "../fill/baby-fill.icon";
import { BabyLightIcon } from "../light/baby-light.icon";
import { BabyRegularIcon } from "../regular/baby-regular.icon";
import { BabyThinIcon } from "../thin/baby-thin.icon";

export const BabyIcon = createIcon("Baby", {
  bold: BabyBoldIcon,
  duotone: BabyDuotoneIcon,
  fill: BabyFillIcon,
  light: BabyLightIcon,
  regular: BabyRegularIcon,
  thin: BabyThinIcon,
});
