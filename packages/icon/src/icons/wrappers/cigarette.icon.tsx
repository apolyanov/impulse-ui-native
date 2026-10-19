import { createIcon } from "../../hocs/create-icon.hoc";
import { CigaretteBoldIcon } from "../bold/cigarette-bold.icon";
import { CigaretteDuotoneIcon } from "../duotone/cigarette-duotone.icon";
import { CigaretteFillIcon } from "../fill/cigarette-fill.icon";
import { CigaretteLightIcon } from "../light/cigarette-light.icon";
import { CigaretteRegularIcon } from "../regular/cigarette-regular.icon";
import { CigaretteThinIcon } from "../thin/cigarette-thin.icon";

export const CigaretteIcon = createIcon("Cigarette", {
  bold: CigaretteBoldIcon,
  duotone: CigaretteDuotoneIcon,
  fill: CigaretteFillIcon,
  light: CigaretteLightIcon,
  regular: CigaretteRegularIcon,
  thin: CigaretteThinIcon,
});
