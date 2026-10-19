import { createIcon } from "../../hocs/create-icon.hoc";
import { AlignTopBoldIcon } from "../bold/align-top-bold.icon";
import { AlignTopDuotoneIcon } from "../duotone/align-top-duotone.icon";
import { AlignTopFillIcon } from "../fill/align-top-fill.icon";
import { AlignTopLightIcon } from "../light/align-top-light.icon";
import { AlignTopRegularIcon } from "../regular/align-top-regular.icon";
import { AlignTopThinIcon } from "../thin/align-top-thin.icon";

export const AlignTopIcon = createIcon("AlignTop", {
  bold: AlignTopBoldIcon,
  duotone: AlignTopDuotoneIcon,
  fill: AlignTopFillIcon,
  light: AlignTopLightIcon,
  regular: AlignTopRegularIcon,
  thin: AlignTopThinIcon,
});
