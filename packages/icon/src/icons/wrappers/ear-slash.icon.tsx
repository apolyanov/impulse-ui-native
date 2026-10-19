import { createIcon } from "../../hocs/create-icon.hoc";
import { EarSlashBoldIcon } from "../bold/ear-slash-bold.icon";
import { EarSlashDuotoneIcon } from "../duotone/ear-slash-duotone.icon";
import { EarSlashFillIcon } from "../fill/ear-slash-fill.icon";
import { EarSlashLightIcon } from "../light/ear-slash-light.icon";
import { EarSlashRegularIcon } from "../regular/ear-slash-regular.icon";
import { EarSlashThinIcon } from "../thin/ear-slash-thin.icon";

export const EarSlashIcon = createIcon("EarSlash", {
  bold: EarSlashBoldIcon,
  duotone: EarSlashDuotoneIcon,
  fill: EarSlashFillIcon,
  light: EarSlashLightIcon,
  regular: EarSlashRegularIcon,
  thin: EarSlashThinIcon,
});
