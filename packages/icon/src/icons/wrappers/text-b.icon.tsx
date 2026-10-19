import { createIcon } from "../../hocs/create-icon.hoc";
import { TextBBoldIcon } from "../bold/text-b-bold.icon";
import { TextBDuotoneIcon } from "../duotone/text-b-duotone.icon";
import { TextBFillIcon } from "../fill/text-b-fill.icon";
import { TextBLightIcon } from "../light/text-b-light.icon";
import { TextBRegularIcon } from "../regular/text-b-regular.icon";
import { TextBThinIcon } from "../thin/text-b-thin.icon";

export const TextBIcon = createIcon("TextB", {
  bold: TextBBoldIcon,
  duotone: TextBDuotoneIcon,
  fill: TextBFillIcon,
  light: TextBLightIcon,
  regular: TextBRegularIcon,
  thin: TextBThinIcon,
});
