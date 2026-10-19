import { createIcon } from "../../hocs/create-icon.hoc";
import { PillBoldIcon } from "../bold/pill-bold.icon";
import { PillDuotoneIcon } from "../duotone/pill-duotone.icon";
import { PillFillIcon } from "../fill/pill-fill.icon";
import { PillLightIcon } from "../light/pill-light.icon";
import { PillRegularIcon } from "../regular/pill-regular.icon";
import { PillThinIcon } from "../thin/pill-thin.icon";

export const PillIcon = createIcon("Pill", {
  bold: PillBoldIcon,
  duotone: PillDuotoneIcon,
  fill: PillFillIcon,
  light: PillLightIcon,
  regular: PillRegularIcon,
  thin: PillThinIcon,
});
