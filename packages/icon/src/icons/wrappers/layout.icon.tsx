import { createIcon } from "../../hocs/create-icon.hoc";
import { LayoutBoldIcon } from "../bold/layout-bold.icon";
import { LayoutDuotoneIcon } from "../duotone/layout-duotone.icon";
import { LayoutFillIcon } from "../fill/layout-fill.icon";
import { LayoutLightIcon } from "../light/layout-light.icon";
import { LayoutRegularIcon } from "../regular/layout-regular.icon";
import { LayoutThinIcon } from "../thin/layout-thin.icon";

export const LayoutIcon = createIcon("Layout", {
  bold: LayoutBoldIcon,
  duotone: LayoutDuotoneIcon,
  fill: LayoutFillIcon,
  light: LayoutLightIcon,
  regular: LayoutRegularIcon,
  thin: LayoutThinIcon,
});
