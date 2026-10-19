import { createIcon } from "../../hocs/create-icon.hoc";
import { LinkSimpleHorizontalBreakBoldIcon } from "../bold/link-simple-horizontal-break-bold.icon";
import { LinkSimpleHorizontalBreakDuotoneIcon } from "../duotone/link-simple-horizontal-break-duotone.icon";
import { LinkSimpleHorizontalBreakFillIcon } from "../fill/link-simple-horizontal-break-fill.icon";
import { LinkSimpleHorizontalBreakLightIcon } from "../light/link-simple-horizontal-break-light.icon";
import { LinkSimpleHorizontalBreakRegularIcon } from "../regular/link-simple-horizontal-break-regular.icon";
import { LinkSimpleHorizontalBreakThinIcon } from "../thin/link-simple-horizontal-break-thin.icon";

export const LinkSimpleHorizontalBreakIcon = createIcon(
  "LinkSimpleHorizontalBreak",
  {
    bold: LinkSimpleHorizontalBreakBoldIcon,
    duotone: LinkSimpleHorizontalBreakDuotoneIcon,
    fill: LinkSimpleHorizontalBreakFillIcon,
    light: LinkSimpleHorizontalBreakLightIcon,
    regular: LinkSimpleHorizontalBreakRegularIcon,
    thin: LinkSimpleHorizontalBreakThinIcon,
  },
);
