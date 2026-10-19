import { createIcon } from "../../hocs/create-icon.hoc";
import { PaperclipBoldIcon } from "../bold/paperclip-bold.icon";
import { PaperclipDuotoneIcon } from "../duotone/paperclip-duotone.icon";
import { PaperclipFillIcon } from "../fill/paperclip-fill.icon";
import { PaperclipLightIcon } from "../light/paperclip-light.icon";
import { PaperclipRegularIcon } from "../regular/paperclip-regular.icon";
import { PaperclipThinIcon } from "../thin/paperclip-thin.icon";

export const PaperclipIcon = createIcon("Paperclip", {
  bold: PaperclipBoldIcon,
  duotone: PaperclipDuotoneIcon,
  fill: PaperclipFillIcon,
  light: PaperclipLightIcon,
  regular: PaperclipRegularIcon,
  thin: PaperclipThinIcon,
});
