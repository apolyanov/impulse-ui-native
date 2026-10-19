import { createIcon } from "../../hocs/create-icon.hoc";
import { CopyleftBoldIcon } from "../bold/copyleft-bold.icon";
import { CopyleftDuotoneIcon } from "../duotone/copyleft-duotone.icon";
import { CopyleftFillIcon } from "../fill/copyleft-fill.icon";
import { CopyleftLightIcon } from "../light/copyleft-light.icon";
import { CopyleftRegularIcon } from "../regular/copyleft-regular.icon";
import { CopyleftThinIcon } from "../thin/copyleft-thin.icon";

export const CopyleftIcon = createIcon("Copyleft", {
  bold: CopyleftBoldIcon,
  duotone: CopyleftDuotoneIcon,
  fill: CopyleftFillIcon,
  light: CopyleftLightIcon,
  regular: CopyleftRegularIcon,
  thin: CopyleftThinIcon,
});
