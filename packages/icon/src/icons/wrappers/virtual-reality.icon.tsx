import { createIcon } from "../../hocs/create-icon.hoc";
import { VirtualRealityBoldIcon } from "../bold/virtual-reality-bold.icon";
import { VirtualRealityDuotoneIcon } from "../duotone/virtual-reality-duotone.icon";
import { VirtualRealityFillIcon } from "../fill/virtual-reality-fill.icon";
import { VirtualRealityLightIcon } from "../light/virtual-reality-light.icon";
import { VirtualRealityRegularIcon } from "../regular/virtual-reality-regular.icon";
import { VirtualRealityThinIcon } from "../thin/virtual-reality-thin.icon";

export const VirtualRealityIcon = createIcon("VirtualReality", {
  bold: VirtualRealityBoldIcon,
  duotone: VirtualRealityDuotoneIcon,
  fill: VirtualRealityFillIcon,
  light: VirtualRealityLightIcon,
  regular: VirtualRealityRegularIcon,
  thin: VirtualRealityThinIcon,
});
