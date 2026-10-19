import { createIcon } from "../../hocs/create-icon.hoc";
import { TextIndentBoldIcon } from "../bold/text-indent-bold.icon";
import { TextIndentDuotoneIcon } from "../duotone/text-indent-duotone.icon";
import { TextIndentFillIcon } from "../fill/text-indent-fill.icon";
import { TextIndentLightIcon } from "../light/text-indent-light.icon";
import { TextIndentRegularIcon } from "../regular/text-indent-regular.icon";
import { TextIndentThinIcon } from "../thin/text-indent-thin.icon";

export const TextIndentIcon = createIcon("TextIndent", {
  bold: TextIndentBoldIcon,
  duotone: TextIndentDuotoneIcon,
  fill: TextIndentFillIcon,
  light: TextIndentLightIcon,
  regular: TextIndentRegularIcon,
  thin: TextIndentThinIcon,
});
