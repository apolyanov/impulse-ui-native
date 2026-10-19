import { createIcon } from "../../hocs/create-icon.hoc";
import { BrainBoldIcon } from "../bold/brain-bold.icon";
import { BrainDuotoneIcon } from "../duotone/brain-duotone.icon";
import { BrainFillIcon } from "../fill/brain-fill.icon";
import { BrainLightIcon } from "../light/brain-light.icon";
import { BrainRegularIcon } from "../regular/brain-regular.icon";
import { BrainThinIcon } from "../thin/brain-thin.icon";

export const BrainIcon = createIcon("Brain", {
  bold: BrainBoldIcon,
  duotone: BrainDuotoneIcon,
  fill: BrainFillIcon,
  light: BrainLightIcon,
  regular: BrainRegularIcon,
  thin: BrainThinIcon,
});
