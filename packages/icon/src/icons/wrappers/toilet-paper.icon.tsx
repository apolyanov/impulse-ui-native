import { createIcon } from "../../hocs/create-icon.hoc";
import { ToiletPaperBoldIcon } from "../bold/toilet-paper-bold.icon";
import { ToiletPaperDuotoneIcon } from "../duotone/toilet-paper-duotone.icon";
import { ToiletPaperFillIcon } from "../fill/toilet-paper-fill.icon";
import { ToiletPaperLightIcon } from "../light/toilet-paper-light.icon";
import { ToiletPaperRegularIcon } from "../regular/toilet-paper-regular.icon";
import { ToiletPaperThinIcon } from "../thin/toilet-paper-thin.icon";

export const ToiletPaperIcon = createIcon("ToiletPaper", {
  bold: ToiletPaperBoldIcon,
  duotone: ToiletPaperDuotoneIcon,
  fill: ToiletPaperFillIcon,
  light: ToiletPaperLightIcon,
  regular: ToiletPaperRegularIcon,
  thin: ToiletPaperThinIcon,
});
