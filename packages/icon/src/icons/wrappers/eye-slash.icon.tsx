import { createIcon } from "../../hocs/create-icon.hoc";
import { EyeSlashBoldIcon } from "../bold/eye-slash-bold.icon";
import { EyeSlashDuotoneIcon } from "../duotone/eye-slash-duotone.icon";
import { EyeSlashFillIcon } from "../fill/eye-slash-fill.icon";
import { EyeSlashLightIcon } from "../light/eye-slash-light.icon";
import { EyeSlashRegularIcon } from "../regular/eye-slash-regular.icon";
import { EyeSlashThinIcon } from "../thin/eye-slash-thin.icon";

export const EyeSlashIcon = createIcon("EyeSlash", {
  bold: EyeSlashBoldIcon,
  duotone: EyeSlashDuotoneIcon,
  fill: EyeSlashFillIcon,
  light: EyeSlashLightIcon,
  regular: EyeSlashRegularIcon,
  thin: EyeSlashThinIcon,
});
