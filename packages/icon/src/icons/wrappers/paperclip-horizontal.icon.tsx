import { createIcon } from "../../hocs/create-icon.hoc";
import { PaperclipHorizontalBoldIcon } from "../bold/paperclip-horizontal-bold.icon";
import { PaperclipHorizontalDuotoneIcon } from "../duotone/paperclip-horizontal-duotone.icon";
import { PaperclipHorizontalFillIcon } from "../fill/paperclip-horizontal-fill.icon";
import { PaperclipHorizontalLightIcon } from "../light/paperclip-horizontal-light.icon";
import { PaperclipHorizontalRegularIcon } from "../regular/paperclip-horizontal-regular.icon";
import { PaperclipHorizontalThinIcon } from "../thin/paperclip-horizontal-thin.icon";

export const PaperclipHorizontalIcon = createIcon("PaperclipHorizontal", {
  bold: PaperclipHorizontalBoldIcon,
  duotone: PaperclipHorizontalDuotoneIcon,
  fill: PaperclipHorizontalFillIcon,
  light: PaperclipHorizontalLightIcon,
  regular: PaperclipHorizontalRegularIcon,
  thin: PaperclipHorizontalThinIcon,
});
