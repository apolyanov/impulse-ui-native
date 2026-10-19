import { createIcon } from "../../hocs/create-icon.hoc";
import { AnchorBoldIcon } from "../bold/anchor-bold.icon";
import { AnchorDuotoneIcon } from "../duotone/anchor-duotone.icon";
import { AnchorFillIcon } from "../fill/anchor-fill.icon";
import { AnchorLightIcon } from "../light/anchor-light.icon";
import { AnchorRegularIcon } from "../regular/anchor-regular.icon";
import { AnchorThinIcon } from "../thin/anchor-thin.icon";

export const AnchorIcon = createIcon("Anchor", {
  bold: AnchorBoldIcon,
  duotone: AnchorDuotoneIcon,
  fill: AnchorFillIcon,
  light: AnchorLightIcon,
  regular: AnchorRegularIcon,
  thin: AnchorThinIcon,
});
