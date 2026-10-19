import { createIcon } from "../../hocs/create-icon.hoc";
import { XBoldIcon } from "../bold/x-bold.icon";
import { XDuotoneIcon } from "../duotone/x-duotone.icon";
import { XFillIcon } from "../fill/x-fill.icon";
import { XLightIcon } from "../light/x-light.icon";
import { XRegularIcon } from "../regular/x-regular.icon";
import { XThinIcon } from "../thin/x-thin.icon";

export const XIcon = createIcon("X", {
  bold: XBoldIcon,
  duotone: XDuotoneIcon,
  fill: XFillIcon,
  light: XLightIcon,
  regular: XRegularIcon,
  thin: XThinIcon,
});
