import { createIcon } from "../../hocs/create-icon.hoc";
import { LinkBoldIcon } from "../bold/link-bold.icon";
import { LinkDuotoneIcon } from "../duotone/link-duotone.icon";
import { LinkFillIcon } from "../fill/link-fill.icon";
import { LinkLightIcon } from "../light/link-light.icon";
import { LinkRegularIcon } from "../regular/link-regular.icon";
import { LinkThinIcon } from "../thin/link-thin.icon";

export const LinkIcon = createIcon("Link", {
  bold: LinkBoldIcon,
  duotone: LinkDuotoneIcon,
  fill: LinkFillIcon,
  light: LinkLightIcon,
  regular: LinkRegularIcon,
  thin: LinkThinIcon,
});
