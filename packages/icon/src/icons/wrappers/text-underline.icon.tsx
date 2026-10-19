import { createIcon } from "../../hocs/create-icon.hoc";
import { TextUnderlineBoldIcon } from "../bold/text-underline-bold.icon";
import { TextUnderlineDuotoneIcon } from "../duotone/text-underline-duotone.icon";
import { TextUnderlineFillIcon } from "../fill/text-underline-fill.icon";
import { TextUnderlineLightIcon } from "../light/text-underline-light.icon";
import { TextUnderlineRegularIcon } from "../regular/text-underline-regular.icon";
import { TextUnderlineThinIcon } from "../thin/text-underline-thin.icon";

export const TextUnderlineIcon = createIcon("TextUnderline", {
  bold: TextUnderlineBoldIcon,
  duotone: TextUnderlineDuotoneIcon,
  fill: TextUnderlineFillIcon,
  light: TextUnderlineLightIcon,
  regular: TextUnderlineRegularIcon,
  thin: TextUnderlineThinIcon,
});
