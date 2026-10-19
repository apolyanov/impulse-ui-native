import { createIcon } from "../../hocs/create-icon.hoc";
import { LinkSimpleHorizontalBoldIcon } from "../bold/link-simple-horizontal-bold.icon";
import { LinkSimpleHorizontalDuotoneIcon } from "../duotone/link-simple-horizontal-duotone.icon";
import { LinkSimpleHorizontalFillIcon } from "../fill/link-simple-horizontal-fill.icon";
import { LinkSimpleHorizontalLightIcon } from "../light/link-simple-horizontal-light.icon";
import { LinkSimpleHorizontalRegularIcon } from "../regular/link-simple-horizontal-regular.icon";
import { LinkSimpleHorizontalThinIcon } from "../thin/link-simple-horizontal-thin.icon";

export const LinkSimpleHorizontalIcon = createIcon("LinkSimpleHorizontal", {
  bold: LinkSimpleHorizontalBoldIcon,
  duotone: LinkSimpleHorizontalDuotoneIcon,
  fill: LinkSimpleHorizontalFillIcon,
  light: LinkSimpleHorizontalLightIcon,
  regular: LinkSimpleHorizontalRegularIcon,
  thin: LinkSimpleHorizontalThinIcon,
});
