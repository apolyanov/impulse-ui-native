import { createIcon } from "../../hocs/create-icon.hoc";
import { LightningBoldIcon } from "../bold/lightning-bold.icon";
import { LightningDuotoneIcon } from "../duotone/lightning-duotone.icon";
import { LightningFillIcon } from "../fill/lightning-fill.icon";
import { LightningLightIcon } from "../light/lightning-light.icon";
import { LightningRegularIcon } from "../regular/lightning-regular.icon";
import { LightningThinIcon } from "../thin/lightning-thin.icon";

export const LightningIcon = createIcon("Lightning", {
  bold: LightningBoldIcon,
  duotone: LightningDuotoneIcon,
  fill: LightningFillIcon,
  light: LightningLightIcon,
  regular: LightningRegularIcon,
  thin: LightningThinIcon,
});
