import { createIcon } from "../../hocs/create-icon.hoc";
import { TextHTwoBoldIcon } from "../bold/text-h-two-bold.icon";
import { TextHTwoDuotoneIcon } from "../duotone/text-h-two-duotone.icon";
import { TextHTwoFillIcon } from "../fill/text-h-two-fill.icon";
import { TextHTwoLightIcon } from "../light/text-h-two-light.icon";
import { TextHTwoRegularIcon } from "../regular/text-h-two-regular.icon";
import { TextHTwoThinIcon } from "../thin/text-h-two-thin.icon";

export const TextHTwoIcon = createIcon("TextHTwo", {
  bold: TextHTwoBoldIcon,
  duotone: TextHTwoDuotoneIcon,
  fill: TextHTwoFillIcon,
  light: TextHTwoLightIcon,
  regular: TextHTwoRegularIcon,
  thin: TextHTwoThinIcon,
});
