import { createIcon } from "../../hocs/create-icon.hoc";
import { FaceMaskBoldIcon } from "../bold/face-mask-bold.icon";
import { FaceMaskDuotoneIcon } from "../duotone/face-mask-duotone.icon";
import { FaceMaskFillIcon } from "../fill/face-mask-fill.icon";
import { FaceMaskLightIcon } from "../light/face-mask-light.icon";
import { FaceMaskRegularIcon } from "../regular/face-mask-regular.icon";
import { FaceMaskThinIcon } from "../thin/face-mask-thin.icon";

export const FaceMaskIcon = createIcon("FaceMask", {
  bold: FaceMaskBoldIcon,
  duotone: FaceMaskDuotoneIcon,
  fill: FaceMaskFillIcon,
  light: FaceMaskLightIcon,
  regular: FaceMaskRegularIcon,
  thin: FaceMaskThinIcon,
});
