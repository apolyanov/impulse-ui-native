import { createIcon } from "../../hocs/create-icon.hoc";
import { LightningABoldIcon } from "../bold/lightning-a-bold.icon";
import { LightningADuotoneIcon } from "../duotone/lightning-a-duotone.icon";
import { LightningAFillIcon } from "../fill/lightning-a-fill.icon";
import { LightningALightIcon } from "../light/lightning-a-light.icon";
import { LightningARegularIcon } from "../regular/lightning-a-regular.icon";
import { LightningAThinIcon } from "../thin/lightning-a-thin.icon";

export const LightningAIcon = createIcon("LightningA", {
  bold: LightningABoldIcon,
  duotone: LightningADuotoneIcon,
  fill: LightningAFillIcon,
  light: LightningALightIcon,
  regular: LightningARegularIcon,
  thin: LightningAThinIcon,
});
