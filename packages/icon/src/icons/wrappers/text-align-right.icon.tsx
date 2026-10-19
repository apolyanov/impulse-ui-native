import { createIcon } from "../../hocs/create-icon.hoc";
import { TextAlignRightBoldIcon } from "../bold/text-align-right-bold.icon";
import { TextAlignRightDuotoneIcon } from "../duotone/text-align-right-duotone.icon";
import { TextAlignRightFillIcon } from "../fill/text-align-right-fill.icon";
import { TextAlignRightLightIcon } from "../light/text-align-right-light.icon";
import { TextAlignRightRegularIcon } from "../regular/text-align-right-regular.icon";
import { TextAlignRightThinIcon } from "../thin/text-align-right-thin.icon";

export const TextAlignRightIcon = createIcon("TextAlignRight", {
  bold: TextAlignRightBoldIcon,
  duotone: TextAlignRightDuotoneIcon,
  fill: TextAlignRightFillIcon,
  light: TextAlignRightLightIcon,
  regular: TextAlignRightRegularIcon,
  thin: TextAlignRightThinIcon,
});
