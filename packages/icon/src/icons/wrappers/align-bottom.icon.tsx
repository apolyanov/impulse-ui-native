import { createIcon } from "../../hocs/create-icon.hoc";
import { AlignBottomBoldIcon } from "../bold/align-bottom-bold.icon";
import { AlignBottomDuotoneIcon } from "../duotone/align-bottom-duotone.icon";
import { AlignBottomFillIcon } from "../fill/align-bottom-fill.icon";
import { AlignBottomLightIcon } from "../light/align-bottom-light.icon";
import { AlignBottomRegularIcon } from "../regular/align-bottom-regular.icon";
import { AlignBottomThinIcon } from "../thin/align-bottom-thin.icon";

export const AlignBottomIcon = createIcon("AlignBottom", {
  bold: AlignBottomBoldIcon,
  duotone: AlignBottomDuotoneIcon,
  fill: AlignBottomFillIcon,
  light: AlignBottomLightIcon,
  regular: AlignBottomRegularIcon,
  thin: AlignBottomThinIcon,
});
