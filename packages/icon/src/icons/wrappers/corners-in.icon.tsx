import { createIcon } from "../../hocs/create-icon.hoc";
import { CornersInBoldIcon } from "../bold/corners-in-bold.icon";
import { CornersInDuotoneIcon } from "../duotone/corners-in-duotone.icon";
import { CornersInFillIcon } from "../fill/corners-in-fill.icon";
import { CornersInLightIcon } from "../light/corners-in-light.icon";
import { CornersInRegularIcon } from "../regular/corners-in-regular.icon";
import { CornersInThinIcon } from "../thin/corners-in-thin.icon";

export const CornersInIcon = createIcon("CornersIn", {
  bold: CornersInBoldIcon,
  duotone: CornersInDuotoneIcon,
  fill: CornersInFillIcon,
  light: CornersInLightIcon,
  regular: CornersInRegularIcon,
  thin: CornersInThinIcon,
});
