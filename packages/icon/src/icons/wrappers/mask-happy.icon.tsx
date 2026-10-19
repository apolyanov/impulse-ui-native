import { createIcon } from "../../hocs/create-icon.hoc";
import { MaskHappyBoldIcon } from "../bold/mask-happy-bold.icon";
import { MaskHappyDuotoneIcon } from "../duotone/mask-happy-duotone.icon";
import { MaskHappyFillIcon } from "../fill/mask-happy-fill.icon";
import { MaskHappyLightIcon } from "../light/mask-happy-light.icon";
import { MaskHappyRegularIcon } from "../regular/mask-happy-regular.icon";
import { MaskHappyThinIcon } from "../thin/mask-happy-thin.icon";

export const MaskHappyIcon = createIcon("MaskHappy", {
  bold: MaskHappyBoldIcon,
  duotone: MaskHappyDuotoneIcon,
  fill: MaskHappyFillIcon,
  light: MaskHappyLightIcon,
  regular: MaskHappyRegularIcon,
  thin: MaskHappyThinIcon,
});
