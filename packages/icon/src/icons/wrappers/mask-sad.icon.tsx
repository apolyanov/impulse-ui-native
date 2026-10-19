import { createIcon } from "../../hocs/create-icon.hoc";
import { MaskSadBoldIcon } from "../bold/mask-sad-bold.icon";
import { MaskSadDuotoneIcon } from "../duotone/mask-sad-duotone.icon";
import { MaskSadFillIcon } from "../fill/mask-sad-fill.icon";
import { MaskSadLightIcon } from "../light/mask-sad-light.icon";
import { MaskSadRegularIcon } from "../regular/mask-sad-regular.icon";
import { MaskSadThinIcon } from "../thin/mask-sad-thin.icon";

export const MaskSadIcon = createIcon("MaskSad", {
  bold: MaskSadBoldIcon,
  duotone: MaskSadDuotoneIcon,
  fill: MaskSadFillIcon,
  light: MaskSadLightIcon,
  regular: MaskSadRegularIcon,
  thin: MaskSadThinIcon,
});
