import { createIcon } from "../../hocs/create-icon.hoc";
import { LinkSimpleBoldIcon } from "../bold/link-simple-bold.icon";
import { LinkSimpleDuotoneIcon } from "../duotone/link-simple-duotone.icon";
import { LinkSimpleFillIcon } from "../fill/link-simple-fill.icon";
import { LinkSimpleLightIcon } from "../light/link-simple-light.icon";
import { LinkSimpleRegularIcon } from "../regular/link-simple-regular.icon";
import { LinkSimpleThinIcon } from "../thin/link-simple-thin.icon";

export const LinkSimpleIcon = createIcon("LinkSimple", {
  bold: LinkSimpleBoldIcon,
  duotone: LinkSimpleDuotoneIcon,
  fill: LinkSimpleFillIcon,
  light: LinkSimpleLightIcon,
  regular: LinkSimpleRegularIcon,
  thin: LinkSimpleThinIcon,
});
