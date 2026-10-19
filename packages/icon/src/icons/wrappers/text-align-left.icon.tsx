import { createIcon } from "../../hocs/create-icon.hoc";
import { TextAlignLeftBoldIcon } from "../bold/text-align-left-bold.icon";
import { TextAlignLeftDuotoneIcon } from "../duotone/text-align-left-duotone.icon";
import { TextAlignLeftFillIcon } from "../fill/text-align-left-fill.icon";
import { TextAlignLeftLightIcon } from "../light/text-align-left-light.icon";
import { TextAlignLeftRegularIcon } from "../regular/text-align-left-regular.icon";
import { TextAlignLeftThinIcon } from "../thin/text-align-left-thin.icon";

export const TextAlignLeftIcon = createIcon("TextAlignLeft", {
  bold: TextAlignLeftBoldIcon,
  duotone: TextAlignLeftDuotoneIcon,
  fill: TextAlignLeftFillIcon,
  light: TextAlignLeftLightIcon,
  regular: TextAlignLeftRegularIcon,
  thin: TextAlignLeftThinIcon,
});
