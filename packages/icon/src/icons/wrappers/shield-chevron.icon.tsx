import { createIcon } from "../../hocs/create-icon.hoc";
import { ShieldChevronBoldIcon } from "../bold/shield-chevron-bold.icon";
import { ShieldChevronDuotoneIcon } from "../duotone/shield-chevron-duotone.icon";
import { ShieldChevronFillIcon } from "../fill/shield-chevron-fill.icon";
import { ShieldChevronLightIcon } from "../light/shield-chevron-light.icon";
import { ShieldChevronRegularIcon } from "../regular/shield-chevron-regular.icon";
import { ShieldChevronThinIcon } from "../thin/shield-chevron-thin.icon";

export const ShieldChevronIcon = createIcon("ShieldChevron", {
  bold: ShieldChevronBoldIcon,
  duotone: ShieldChevronDuotoneIcon,
  fill: ShieldChevronFillIcon,
  light: ShieldChevronLightIcon,
  regular: ShieldChevronRegularIcon,
  thin: ShieldChevronThinIcon,
});
