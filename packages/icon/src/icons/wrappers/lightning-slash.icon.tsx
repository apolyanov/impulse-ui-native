import { createIcon } from "../../hocs/create-icon.hoc";
import { LightningSlashBoldIcon } from "../bold/lightning-slash-bold.icon";
import { LightningSlashDuotoneIcon } from "../duotone/lightning-slash-duotone.icon";
import { LightningSlashFillIcon } from "../fill/lightning-slash-fill.icon";
import { LightningSlashLightIcon } from "../light/lightning-slash-light.icon";
import { LightningSlashRegularIcon } from "../regular/lightning-slash-regular.icon";
import { LightningSlashThinIcon } from "../thin/lightning-slash-thin.icon";

export const LightningSlashIcon = createIcon("LightningSlash", {
  bold: LightningSlashBoldIcon,
  duotone: LightningSlashDuotoneIcon,
  fill: LightningSlashFillIcon,
  light: LightningSlashLightIcon,
  regular: LightningSlashRegularIcon,
  thin: LightningSlashThinIcon,
});
