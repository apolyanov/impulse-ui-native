import { createIcon } from "../../hocs/create-icon.hoc";
import { LinkBreakBoldIcon } from "../bold/link-break-bold.icon";
import { LinkBreakDuotoneIcon } from "../duotone/link-break-duotone.icon";
import { LinkBreakFillIcon } from "../fill/link-break-fill.icon";
import { LinkBreakLightIcon } from "../light/link-break-light.icon";
import { LinkBreakRegularIcon } from "../regular/link-break-regular.icon";
import { LinkBreakThinIcon } from "../thin/link-break-thin.icon";

export const LinkBreakIcon = createIcon("LinkBreak", {
  bold: LinkBreakBoldIcon,
  duotone: LinkBreakDuotoneIcon,
  fill: LinkBreakFillIcon,
  light: LinkBreakLightIcon,
  regular: LinkBreakRegularIcon,
  thin: LinkBreakThinIcon,
});
