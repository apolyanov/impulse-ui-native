import { createIcon } from "../../hocs/create-icon.hoc";
import { DesktopBoldIcon } from "../bold/desktop-bold.icon";
import { DesktopDuotoneIcon } from "../duotone/desktop-duotone.icon";
import { DesktopFillIcon } from "../fill/desktop-fill.icon";
import { DesktopLightIcon } from "../light/desktop-light.icon";
import { DesktopRegularIcon } from "../regular/desktop-regular.icon";
import { DesktopThinIcon } from "../thin/desktop-thin.icon";

export const DesktopIcon = createIcon("Desktop", {
  bold: DesktopBoldIcon,
  duotone: DesktopDuotoneIcon,
  fill: DesktopFillIcon,
  light: DesktopLightIcon,
  regular: DesktopRegularIcon,
  thin: DesktopThinIcon,
});
