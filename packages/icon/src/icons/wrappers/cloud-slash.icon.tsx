import { createIcon } from "../../hocs/create-icon.hoc";
import { CloudSlashBoldIcon } from "../bold/cloud-slash-bold.icon";
import { CloudSlashDuotoneIcon } from "../duotone/cloud-slash-duotone.icon";
import { CloudSlashFillIcon } from "../fill/cloud-slash-fill.icon";
import { CloudSlashLightIcon } from "../light/cloud-slash-light.icon";
import { CloudSlashRegularIcon } from "../regular/cloud-slash-regular.icon";
import { CloudSlashThinIcon } from "../thin/cloud-slash-thin.icon";

export const CloudSlashIcon = createIcon("CloudSlash", {
  bold: CloudSlashBoldIcon,
  duotone: CloudSlashDuotoneIcon,
  fill: CloudSlashFillIcon,
  light: CloudSlashLightIcon,
  regular: CloudSlashRegularIcon,
  thin: CloudSlashThinIcon,
});
