import { createIcon } from "../../hocs/create-icon.hoc";
import { FourKBoldIcon } from "../bold/four-k-bold.icon";
import { FourKDuotoneIcon } from "../duotone/four-k-duotone.icon";
import { FourKFillIcon } from "../fill/four-k-fill.icon";
import { FourKLightIcon } from "../light/four-k-light.icon";
import { FourKRegularIcon } from "../regular/four-k-regular.icon";
import { FourKThinIcon } from "../thin/four-k-thin.icon";

export const FourKIcon = createIcon("FourK", {
  bold: FourKBoldIcon,
  duotone: FourKDuotoneIcon,
  fill: FourKFillIcon,
  light: FourKLightIcon,
  regular: FourKRegularIcon,
  thin: FourKThinIcon,
});
