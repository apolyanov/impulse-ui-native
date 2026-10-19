import { createIcon } from "../../hocs/create-icon.hoc";
import { ClipboardBoldIcon } from "../bold/clipboard-bold.icon";
import { ClipboardDuotoneIcon } from "../duotone/clipboard-duotone.icon";
import { ClipboardFillIcon } from "../fill/clipboard-fill.icon";
import { ClipboardLightIcon } from "../light/clipboard-light.icon";
import { ClipboardRegularIcon } from "../regular/clipboard-regular.icon";
import { ClipboardThinIcon } from "../thin/clipboard-thin.icon";

export const ClipboardIcon = createIcon("Clipboard", {
  bold: ClipboardBoldIcon,
  duotone: ClipboardDuotoneIcon,
  fill: ClipboardFillIcon,
  light: ClipboardLightIcon,
  regular: ClipboardRegularIcon,
  thin: ClipboardThinIcon,
});
