import { createIcon } from "../../hocs/create-icon.hoc";
import { GenderNonbinaryBoldIcon } from "../bold/gender-nonbinary-bold.icon";
import { GenderNonbinaryDuotoneIcon } from "../duotone/gender-nonbinary-duotone.icon";
import { GenderNonbinaryFillIcon } from "../fill/gender-nonbinary-fill.icon";
import { GenderNonbinaryLightIcon } from "../light/gender-nonbinary-light.icon";
import { GenderNonbinaryRegularIcon } from "../regular/gender-nonbinary-regular.icon";
import { GenderNonbinaryThinIcon } from "../thin/gender-nonbinary-thin.icon";

export const GenderNonbinaryIcon = createIcon("GenderNonbinary", {
  bold: GenderNonbinaryBoldIcon,
  duotone: GenderNonbinaryDuotoneIcon,
  fill: GenderNonbinaryFillIcon,
  light: GenderNonbinaryLightIcon,
  regular: GenderNonbinaryRegularIcon,
  thin: GenderNonbinaryThinIcon,
});
