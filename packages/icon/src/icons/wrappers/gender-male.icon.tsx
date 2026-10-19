import { createIcon } from "../../hocs/create-icon.hoc";
import { GenderMaleBoldIcon } from "../bold/gender-male-bold.icon";
import { GenderMaleDuotoneIcon } from "../duotone/gender-male-duotone.icon";
import { GenderMaleFillIcon } from "../fill/gender-male-fill.icon";
import { GenderMaleLightIcon } from "../light/gender-male-light.icon";
import { GenderMaleRegularIcon } from "../regular/gender-male-regular.icon";
import { GenderMaleThinIcon } from "../thin/gender-male-thin.icon";

export const GenderMaleIcon = createIcon("GenderMale", {
  bold: GenderMaleBoldIcon,
  duotone: GenderMaleDuotoneIcon,
  fill: GenderMaleFillIcon,
  light: GenderMaleLightIcon,
  regular: GenderMaleRegularIcon,
  thin: GenderMaleThinIcon,
});
