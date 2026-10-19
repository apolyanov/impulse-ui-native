import { createIcon } from "../../hocs/create-icon.hoc";
import { ToiletBoldIcon } from "../bold/toilet-bold.icon";
import { ToiletDuotoneIcon } from "../duotone/toilet-duotone.icon";
import { ToiletFillIcon } from "../fill/toilet-fill.icon";
import { ToiletLightIcon } from "../light/toilet-light.icon";
import { ToiletRegularIcon } from "../regular/toilet-regular.icon";
import { ToiletThinIcon } from "../thin/toilet-thin.icon";

export const ToiletIcon = createIcon("Toilet", {
  bold: ToiletBoldIcon,
  duotone: ToiletDuotoneIcon,
  fill: ToiletFillIcon,
  light: ToiletLightIcon,
  regular: ToiletRegularIcon,
  thin: ToiletThinIcon,
});
