import { createIcon } from "../../hocs/create-icon.hoc";
import { TextItalicBoldIcon } from "../bold/text-italic-bold.icon";
import { TextItalicDuotoneIcon } from "../duotone/text-italic-duotone.icon";
import { TextItalicFillIcon } from "../fill/text-italic-fill.icon";
import { TextItalicLightIcon } from "../light/text-italic-light.icon";
import { TextItalicRegularIcon } from "../regular/text-italic-regular.icon";
import { TextItalicThinIcon } from "../thin/text-italic-thin.icon";

export const TextItalicIcon = createIcon("TextItalic", {
  bold: TextItalicBoldIcon,
  duotone: TextItalicDuotoneIcon,
  fill: TextItalicFillIcon,
  light: TextItalicLightIcon,
  regular: TextItalicRegularIcon,
  thin: TextItalicThinIcon,
});
