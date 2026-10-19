import { createIcon } from "../../hocs/create-icon.hoc";
import { TextHBoldIcon } from "../bold/text-h-bold.icon";
import { TextHDuotoneIcon } from "../duotone/text-h-duotone.icon";
import { TextHFillIcon } from "../fill/text-h-fill.icon";
import { TextHLightIcon } from "../light/text-h-light.icon";
import { TextHRegularIcon } from "../regular/text-h-regular.icon";
import { TextHThinIcon } from "../thin/text-h-thin.icon";

export const TextHIcon = createIcon("TextH", {
  bold: TextHBoldIcon,
  duotone: TextHDuotoneIcon,
  fill: TextHFillIcon,
  light: TextHLightIcon,
  regular: TextHRegularIcon,
  thin: TextHThinIcon,
});
