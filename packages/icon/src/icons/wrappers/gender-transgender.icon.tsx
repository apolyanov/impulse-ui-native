import { createIcon } from "../../hocs/create-icon.hoc";
import { GenderTransgenderBoldIcon } from "../bold/gender-transgender-bold.icon";
import { GenderTransgenderDuotoneIcon } from "../duotone/gender-transgender-duotone.icon";
import { GenderTransgenderFillIcon } from "../fill/gender-transgender-fill.icon";
import { GenderTransgenderLightIcon } from "../light/gender-transgender-light.icon";
import { GenderTransgenderRegularIcon } from "../regular/gender-transgender-regular.icon";
import { GenderTransgenderThinIcon } from "../thin/gender-transgender-thin.icon";

export const GenderTransgenderIcon = createIcon("GenderTransgender", {
  bold: GenderTransgenderBoldIcon,
  duotone: GenderTransgenderDuotoneIcon,
  fill: GenderTransgenderFillIcon,
  light: GenderTransgenderLightIcon,
  regular: GenderTransgenderRegularIcon,
  thin: GenderTransgenderThinIcon,
});
