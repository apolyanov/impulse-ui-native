import { createIcon } from "../../hocs/create-icon.hoc";
import { GenderFemaleBoldIcon } from "../bold/gender-female-bold.icon";
import { GenderFemaleDuotoneIcon } from "../duotone/gender-female-duotone.icon";
import { GenderFemaleFillIcon } from "../fill/gender-female-fill.icon";
import { GenderFemaleLightIcon } from "../light/gender-female-light.icon";
import { GenderFemaleRegularIcon } from "../regular/gender-female-regular.icon";
import { GenderFemaleThinIcon } from "../thin/gender-female-thin.icon";

export const GenderFemaleIcon = createIcon("GenderFemale", {
  bold: GenderFemaleBoldIcon,
  duotone: GenderFemaleDuotoneIcon,
  fill: GenderFemaleFillIcon,
  light: GenderFemaleLightIcon,
  regular: GenderFemaleRegularIcon,
  thin: GenderFemaleThinIcon,
});
