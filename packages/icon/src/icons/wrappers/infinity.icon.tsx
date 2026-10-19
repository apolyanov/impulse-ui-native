import { createIcon } from "../../hocs/create-icon.hoc";
import { InfinityBoldIcon } from "../bold/infinity-bold.icon";
import { InfinityDuotoneIcon } from "../duotone/infinity-duotone.icon";
import { InfinityFillIcon } from "../fill/infinity-fill.icon";
import { InfinityLightIcon } from "../light/infinity-light.icon";
import { InfinityRegularIcon } from "../regular/infinity-regular.icon";
import { InfinityThinIcon } from "../thin/infinity-thin.icon";

export const InfinityIcon = createIcon("Infinity", {
  bold: InfinityBoldIcon,
  duotone: InfinityDuotoneIcon,
  fill: InfinityFillIcon,
  light: InfinityLightIcon,
  regular: InfinityRegularIcon,
  thin: InfinityThinIcon,
});
