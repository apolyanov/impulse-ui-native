import { createIcon } from "../../hocs/create-icon.hoc";
import { LinkSimpleBreakBoldIcon } from "../bold/link-simple-break-bold.icon";
import { LinkSimpleBreakDuotoneIcon } from "../duotone/link-simple-break-duotone.icon";
import { LinkSimpleBreakFillIcon } from "../fill/link-simple-break-fill.icon";
import { LinkSimpleBreakLightIcon } from "../light/link-simple-break-light.icon";
import { LinkSimpleBreakRegularIcon } from "../regular/link-simple-break-regular.icon";
import { LinkSimpleBreakThinIcon } from "../thin/link-simple-break-thin.icon";

export const LinkSimpleBreakIcon = createIcon("LinkSimpleBreak", {
  bold: LinkSimpleBreakBoldIcon,
  duotone: LinkSimpleBreakDuotoneIcon,
  fill: LinkSimpleBreakFillIcon,
  light: LinkSimpleBreakLightIcon,
  regular: LinkSimpleBreakRegularIcon,
  thin: LinkSimpleBreakThinIcon,
});
