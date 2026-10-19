import { createIcon } from "../../hocs/create-icon.hoc";
import { CrosshairSimpleBoldIcon } from "../bold/crosshair-simple-bold.icon";
import { CrosshairSimpleDuotoneIcon } from "../duotone/crosshair-simple-duotone.icon";
import { CrosshairSimpleFillIcon } from "../fill/crosshair-simple-fill.icon";
import { CrosshairSimpleLightIcon } from "../light/crosshair-simple-light.icon";
import { CrosshairSimpleRegularIcon } from "../regular/crosshair-simple-regular.icon";
import { CrosshairSimpleThinIcon } from "../thin/crosshair-simple-thin.icon";

export const CrosshairSimpleIcon = createIcon("CrosshairSimple", {
  bold: CrosshairSimpleBoldIcon,
  duotone: CrosshairSimpleDuotoneIcon,
  fill: CrosshairSimpleFillIcon,
  light: CrosshairSimpleLightIcon,
  regular: CrosshairSimpleRegularIcon,
  thin: CrosshairSimpleThinIcon,
});
