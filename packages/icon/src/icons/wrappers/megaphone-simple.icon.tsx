import { createIcon } from "../../hocs/create-icon.hoc";
import { MegaphoneSimpleBoldIcon } from "../bold/megaphone-simple-bold.icon";
import { MegaphoneSimpleDuotoneIcon } from "../duotone/megaphone-simple-duotone.icon";
import { MegaphoneSimpleFillIcon } from "../fill/megaphone-simple-fill.icon";
import { MegaphoneSimpleLightIcon } from "../light/megaphone-simple-light.icon";
import { MegaphoneSimpleRegularIcon } from "../regular/megaphone-simple-regular.icon";
import { MegaphoneSimpleThinIcon } from "../thin/megaphone-simple-thin.icon";

export const MegaphoneSimpleIcon = createIcon("MegaphoneSimple", {
  bold: MegaphoneSimpleBoldIcon,
  duotone: MegaphoneSimpleDuotoneIcon,
  fill: MegaphoneSimpleFillIcon,
  light: MegaphoneSimpleLightIcon,
  regular: MegaphoneSimpleRegularIcon,
  thin: MegaphoneSimpleThinIcon,
});
