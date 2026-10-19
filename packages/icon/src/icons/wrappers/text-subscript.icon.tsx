import { createIcon } from "../../hocs/create-icon.hoc";
import { TextSubscriptBoldIcon } from "../bold/text-subscript-bold.icon";
import { TextSubscriptDuotoneIcon } from "../duotone/text-subscript-duotone.icon";
import { TextSubscriptFillIcon } from "../fill/text-subscript-fill.icon";
import { TextSubscriptLightIcon } from "../light/text-subscript-light.icon";
import { TextSubscriptRegularIcon } from "../regular/text-subscript-regular.icon";
import { TextSubscriptThinIcon } from "../thin/text-subscript-thin.icon";

export const TextSubscriptIcon = createIcon("TextSubscript", {
  bold: TextSubscriptBoldIcon,
  duotone: TextSubscriptDuotoneIcon,
  fill: TextSubscriptFillIcon,
  light: TextSubscriptLightIcon,
  regular: TextSubscriptRegularIcon,
  thin: TextSubscriptThinIcon,
});
