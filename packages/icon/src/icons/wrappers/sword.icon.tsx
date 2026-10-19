import { createIcon } from "../../hocs/create-icon.hoc";
import { SwordBoldIcon } from "../bold/sword-bold.icon";
import { SwordDuotoneIcon } from "../duotone/sword-duotone.icon";
import { SwordFillIcon } from "../fill/sword-fill.icon";
import { SwordLightIcon } from "../light/sword-light.icon";
import { SwordRegularIcon } from "../regular/sword-regular.icon";
import { SwordThinIcon } from "../thin/sword-thin.icon";

export const SwordIcon = createIcon("Sword", {
  bold: SwordBoldIcon,
  duotone: SwordDuotoneIcon,
  fill: SwordFillIcon,
  light: SwordLightIcon,
  regular: SwordRegularIcon,
  thin: SwordThinIcon,
});
