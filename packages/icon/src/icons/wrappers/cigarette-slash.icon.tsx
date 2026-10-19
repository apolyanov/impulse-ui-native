import { createIcon } from "../../hocs/create-icon.hoc";
import { CigaretteSlashBoldIcon } from "../bold/cigarette-slash-bold.icon";
import { CigaretteSlashDuotoneIcon } from "../duotone/cigarette-slash-duotone.icon";
import { CigaretteSlashFillIcon } from "../fill/cigarette-slash-fill.icon";
import { CigaretteSlashLightIcon } from "../light/cigarette-slash-light.icon";
import { CigaretteSlashRegularIcon } from "../regular/cigarette-slash-regular.icon";
import { CigaretteSlashThinIcon } from "../thin/cigarette-slash-thin.icon";

export const CigaretteSlashIcon = createIcon("CigaretteSlash", {
  bold: CigaretteSlashBoldIcon,
  duotone: CigaretteSlashDuotoneIcon,
  fill: CigaretteSlashFillIcon,
  light: CigaretteSlashLightIcon,
  regular: CigaretteSlashRegularIcon,
  thin: CigaretteSlashThinIcon,
});
