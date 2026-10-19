import { createIcon } from "../../hocs/create-icon.hoc";
import { CrosshairBoldIcon } from "../bold/crosshair-bold.icon";
import { CrosshairDuotoneIcon } from "../duotone/crosshair-duotone.icon";
import { CrosshairFillIcon } from "../fill/crosshair-fill.icon";
import { CrosshairLightIcon } from "../light/crosshair-light.icon";
import { CrosshairRegularIcon } from "../regular/crosshair-regular.icon";
import { CrosshairThinIcon } from "../thin/crosshair-thin.icon";

export const CrosshairIcon = createIcon("Crosshair", {
  bold: CrosshairBoldIcon,
  duotone: CrosshairDuotoneIcon,
  fill: CrosshairFillIcon,
  light: CrosshairLightIcon,
  regular: CrosshairRegularIcon,
  thin: CrosshairThinIcon,
});
