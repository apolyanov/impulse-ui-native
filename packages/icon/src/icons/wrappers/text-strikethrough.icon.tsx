import { createIcon } from "../../hocs/create-icon.hoc";
import { TextStrikethroughBoldIcon } from "../bold/text-strikethrough-bold.icon";
import { TextStrikethroughDuotoneIcon } from "../duotone/text-strikethrough-duotone.icon";
import { TextStrikethroughFillIcon } from "../fill/text-strikethrough-fill.icon";
import { TextStrikethroughLightIcon } from "../light/text-strikethrough-light.icon";
import { TextStrikethroughRegularIcon } from "../regular/text-strikethrough-regular.icon";
import { TextStrikethroughThinIcon } from "../thin/text-strikethrough-thin.icon";

export const TextStrikethroughIcon = createIcon("TextStrikethrough", {
  bold: TextStrikethroughBoldIcon,
  duotone: TextStrikethroughDuotoneIcon,
  fill: TextStrikethroughFillIcon,
  light: TextStrikethroughLightIcon,
  regular: TextStrikethroughRegularIcon,
  thin: TextStrikethroughThinIcon,
});
