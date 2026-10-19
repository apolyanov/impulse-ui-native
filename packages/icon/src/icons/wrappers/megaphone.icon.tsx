import { createIcon } from "../../hocs/create-icon.hoc";
import { MegaphoneBoldIcon } from "../bold/megaphone-bold.icon";
import { MegaphoneDuotoneIcon } from "../duotone/megaphone-duotone.icon";
import { MegaphoneFillIcon } from "../fill/megaphone-fill.icon";
import { MegaphoneLightIcon } from "../light/megaphone-light.icon";
import { MegaphoneRegularIcon } from "../regular/megaphone-regular.icon";
import { MegaphoneThinIcon } from "../thin/megaphone-thin.icon";

export const MegaphoneIcon = createIcon("Megaphone", {
  bold: MegaphoneBoldIcon,
  duotone: MegaphoneDuotoneIcon,
  fill: MegaphoneFillIcon,
  light: MegaphoneLightIcon,
  regular: MegaphoneRegularIcon,
  thin: MegaphoneThinIcon,
});
