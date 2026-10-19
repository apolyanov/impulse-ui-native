import { createIcon } from "../../hocs/create-icon.hoc";
import { CornersOutBoldIcon } from "../bold/corners-out-bold.icon";
import { CornersOutDuotoneIcon } from "../duotone/corners-out-duotone.icon";
import { CornersOutFillIcon } from "../fill/corners-out-fill.icon";
import { CornersOutLightIcon } from "../light/corners-out-light.icon";
import { CornersOutRegularIcon } from "../regular/corners-out-regular.icon";
import { CornersOutThinIcon } from "../thin/corners-out-thin.icon";

export const CornersOutIcon = createIcon("CornersOut", {
  bold: CornersOutBoldIcon,
  duotone: CornersOutDuotoneIcon,
  fill: CornersOutFillIcon,
  light: CornersOutLightIcon,
  regular: CornersOutRegularIcon,
  thin: CornersOutThinIcon,
});
