import { createIcon } from "../../hocs/create-icon.hoc";
import { SubtractBoldIcon } from "../bold/subtract-bold.icon";
import { SubtractDuotoneIcon } from "../duotone/subtract-duotone.icon";
import { SubtractFillIcon } from "../fill/subtract-fill.icon";
import { SubtractLightIcon } from "../light/subtract-light.icon";
import { SubtractRegularIcon } from "../regular/subtract-regular.icon";
import { SubtractThinIcon } from "../thin/subtract-thin.icon";

export const SubtractIcon = createIcon("Subtract", {
  bold: SubtractBoldIcon,
  duotone: SubtractDuotoneIcon,
  fill: SubtractFillIcon,
  light: SubtractLightIcon,
  regular: SubtractRegularIcon,
  thin: SubtractThinIcon,
});
