import { createIcon } from "../../hocs/create-icon.hoc";
import { TextTSlashBoldIcon } from "../bold/text-t-slash-bold.icon";
import { TextTSlashDuotoneIcon } from "../duotone/text-t-slash-duotone.icon";
import { TextTSlashFillIcon } from "../fill/text-t-slash-fill.icon";
import { TextTSlashLightIcon } from "../light/text-t-slash-light.icon";
import { TextTSlashRegularIcon } from "../regular/text-t-slash-regular.icon";
import { TextTSlashThinIcon } from "../thin/text-t-slash-thin.icon";

export const TextTSlashIcon = createIcon("TextTSlash", {
  bold: TextTSlashBoldIcon,
  duotone: TextTSlashDuotoneIcon,
  fill: TextTSlashFillIcon,
  light: TextTSlashLightIcon,
  regular: TextTSlashRegularIcon,
  thin: TextTSlashThinIcon,
});
