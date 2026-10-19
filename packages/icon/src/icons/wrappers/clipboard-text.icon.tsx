import { createIcon } from "../../hocs/create-icon.hoc";
import { ClipboardTextBoldIcon } from "../bold/clipboard-text-bold.icon";
import { ClipboardTextDuotoneIcon } from "../duotone/clipboard-text-duotone.icon";
import { ClipboardTextFillIcon } from "../fill/clipboard-text-fill.icon";
import { ClipboardTextLightIcon } from "../light/clipboard-text-light.icon";
import { ClipboardTextRegularIcon } from "../regular/clipboard-text-regular.icon";
import { ClipboardTextThinIcon } from "../thin/clipboard-text-thin.icon";

export const ClipboardTextIcon = createIcon("ClipboardText", {
  bold: ClipboardTextBoldIcon,
  duotone: ClipboardTextDuotoneIcon,
  fill: ClipboardTextFillIcon,
  light: ClipboardTextLightIcon,
  regular: ClipboardTextRegularIcon,
  thin: ClipboardTextThinIcon,
});
