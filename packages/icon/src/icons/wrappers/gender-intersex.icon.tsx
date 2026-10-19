import { createIcon } from "../../hocs/create-icon.hoc";
import { GenderIntersexBoldIcon } from "../bold/gender-intersex-bold.icon";
import { GenderIntersexDuotoneIcon } from "../duotone/gender-intersex-duotone.icon";
import { GenderIntersexFillIcon } from "../fill/gender-intersex-fill.icon";
import { GenderIntersexLightIcon } from "../light/gender-intersex-light.icon";
import { GenderIntersexRegularIcon } from "../regular/gender-intersex-regular.icon";
import { GenderIntersexThinIcon } from "../thin/gender-intersex-thin.icon";

export const GenderIntersexIcon = createIcon("GenderIntersex", {
  bold: GenderIntersexBoldIcon,
  duotone: GenderIntersexDuotoneIcon,
  fill: GenderIntersexFillIcon,
  light: GenderIntersexLightIcon,
  regular: GenderIntersexRegularIcon,
  thin: GenderIntersexThinIcon,
});
