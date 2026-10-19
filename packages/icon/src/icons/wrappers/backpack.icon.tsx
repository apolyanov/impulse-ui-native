import { createIcon } from "../../hocs/create-icon.hoc";
import { BackpackBoldIcon } from "../bold/backpack-bold.icon";
import { BackpackDuotoneIcon } from "../duotone/backpack-duotone.icon";
import { BackpackFillIcon } from "../fill/backpack-fill.icon";
import { BackpackLightIcon } from "../light/backpack-light.icon";
import { BackpackRegularIcon } from "../regular/backpack-regular.icon";
import { BackpackThinIcon } from "../thin/backpack-thin.icon";

export const BackpackIcon = createIcon("Backpack", {
  bold: BackpackBoldIcon,
  duotone: BackpackDuotoneIcon,
  fill: BackpackFillIcon,
  light: BackpackLightIcon,
  regular: BackpackRegularIcon,
  thin: BackpackThinIcon,
});
